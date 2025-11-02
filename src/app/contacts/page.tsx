'use client';

import { useState } from 'react';
import { IMaskInput } from 'react-imask';
import styles from './SendForm.module.scss';

interface SendFormProps {
  message?: string;
}

export default function SendForm({ message }: SendFormProps) {
  const [form, setForm] = useState({ name: '', phone: '', message: message || '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));

  // опційно: нормалізація номера перед надсиланням (тільки цифри у форматі 380XXXXXXXXX)
  const normalizePhone = (masked: string) => {
    const digits = masked.replace(/\D/g, '');
    // якщо користувач вводив у форматі +38 (0XX)... → приведемо до 380XXXXXXXXX
    if (digits.startsWith('380')) return digits;
    if (digits.startsWith('0')) return `38${digits}`;
    if (digits.startsWith('8')) return `3${digits}`; // малоймовірно, але на всяк
    return digits;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const payload = {
        ...form,
        phoneNormalized: normalizePhone(form.phone), // <-- якщо треба на бек
      };

      const res = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      setStatus(data.success ? 'success' : 'error');
      if (data.success) setForm({ name: '', phone: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  return (
    <section className={styles.container}>
      <h3 className={styles.title}>Залиште ваші дані і ми вам зателефонуєм</h3>

      <form className={styles.form} onSubmit={handleSubmit} noValidate>
        <div className={styles.field}>
          <input
            name="name"
            placeholder="Ваше ім’я"
            value={form.name}
            onChange={handleChange}
            required
            autoComplete="name"
          />
        </div>

        <div className={styles.field}>
          <IMaskInput
            // маска під UA формат
            mask="+38 (000) 000-00-00"
            // якщо хочеш зберігати лише цифри в state → постав unmask={true}
            // і отримаєш 380XXXXXXXXX в onAccept; тут лишаємо з маскою в state:
            unmask={false}
            name="phone"
            value={form.phone}
            // адаптер під твій handleChange (створюємо "синтетичну" подію)
            onAccept={(value) =>
              handleChange({
                target: { name: 'phone', value: String(value) },
              } as unknown as React.ChangeEvent<HTMLInputElement>)
            }
            placeholder="Ваш номер телефону"
            inputMode="tel"
            autoComplete="tel"
            required
            // нативна валідація (працює з маскою у state):
            pattern={String.raw`^\+38 \(\d{3}\) \d{3}-\d{2}-\d{2}$`}
            title="+38 (0XX) XXX-XX-XX"
          />
        </div>

        <div className={styles.field}>
          <textarea
            name="message"
            rows={4}
            placeholder="Ваше повідомлення"
            value={form.message}
            onChange={handleChange}
            required
          />
        </div>

        <button className={styles.button} type="submit" disabled={status === 'loading'}>
          {status === 'loading' ? 'Відправлення...' : 'Відправити'}
        </button>

        <p className={styles.status} aria-live="polite">
          {status === 'success' && '✅ Повідомлення відправлено!'}
          {status === 'error' && '❌ Помилка! Спробуйте ще раз.'}
        </p>
      </form>
    </section>
  );
}
