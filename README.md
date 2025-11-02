# ⚡ ElektrykService

**ElektrykService** — це сайт електромонтажних послуг у Києві, створений на базі **Next.js 16**, **TypeScript** та **SCSS**, з підтримкою SEO і автоматичним деплоєм на **GitHub Pages**.

---

## 🚀 Основні команди

### 🔹 Режим розробки
```bash
npm run dev
```
Запускає локальний сервер розробки Next.js:  
➡️ [http://localhost:3000](http://localhost:3000)

---

### 🔹 Локальна збірка та перегляд
```bash
npm run start
```
Ця команда:
1. Збирає сайт у статичну директорію `out/`
2. Запускає локальний сервер `serve` для попереднього перегляду  
➡️ [http://localhost:3000](http://localhost:3000)

> Використовується для перевірки сайту перед деплоєм.

---

### 🔹 Деплой на GitHub Pages
```bash
npm run deploy
```
Команда автоматично:
- Збирає сайт зі встановленим `basePath=/ElektrykService`
- Генерує файл `.nojekyll`, щоб GitHub Pages не блокував папку `_next`
- Публікує сайт у гілку **`gh-pages`**

🌐 Готовий сайт:  
👉 [https://smikhotur.github.io/ElektrykService](https://smikhotur.github.io/ElektrykService)

---

## 🧩 Технології

| Технологія | Призначення |
|-------------|-------------|
| **Next.js 16** | Фреймворк для React з підтримкою SSG (Static Site Generation) |
| **React 19** | Основна бібліотека UI |
| **TypeScript** | Типізація коду |
| **SCSS (SASS)** | Модульні стилі |
| **next-sitemap** | Автоматична генерація `sitemap.xml` для SEO |
| **gh-pages** | Деплой на GitHub Pages |
| **cross-env** | Кросплатформене встановлення змінних середовища |
| **serve** | Локальний сервер для статичного сайту |

---

## 🛠️ Структура проєкту

```
elektryk-site/
 ├─ app/                  # Сторінки Next.js (App Router)
 ├─ components/           # Компоненти інтерфейсу
 ├─ public/               # Статичні файли (.nojekyll, favicon, зображення)
 ├─ styles/               # SCSS стилі
 ├─ out/                  # Готовий білд для GitHub Pages
 ├─ next.config.mjs       # Конфігурація Next.js
 ├─ package.json          # Скрипти та залежності
 └─ README.md             # Поточна документація
```

---

## ⚙️ Скрипти в `package.json`

```json
"scripts": {
  "dev": "next dev",
  "build": "next build && next-sitemap",
  "build:local": "npm run build",
  "build:gh": "cross-env GH_PAGES=true npm run build",
  "postbuild": "node -e \"require('fs').writeFileSync('out/.nojekyll','')\"",
  "serve": "serve out",
  "start": "npm run build:local && npm run serve",
  "deploy": "npm run build:gh && gh-pages -d out --dotfiles"
}
```

---

## 🧠 Корисні поради

- 🔸 Для **розробки** — використовуй `npm run dev`  
- 🔸 Для **локального перегляду** — `npm run start`  
- 🔸 Для **деплою на GitHub Pages** — `npm run deploy`
- 🔸 Не видаляй `.nojekyll` — він необхідний, щоб GitHub Pages не ігнорував папку `_next`
- 🔸 Файл `next.config.mjs` автоматично перемикає `basePath` залежно від змінної `GH_PAGES`

---

## 🧭 SEO

Проєкт використовує **next-sitemap**, який автоматично генерує:
- `sitemap.xml`
- `robots.txt`

Для коректного SEO встановлено базовий URL у файлі `next-sitemap.config.js`:
```js
module.exports = {
  siteUrl: 'https://smikhotur.github.io/ElektrykService',
  generateRobotsTxt: true,
  outDir: 'out',
};
```

---

## 📦 Залежності

Основні:
```bash
next react react-dom sass next-sitemap gh-pages cross-env serve
```

Розробницькі:
```bash
typescript @types/react @types/node eslint eslint-config-next
```

---

## 📄 Ліцензія

© 2025 **ElektrykService**. Усі права захищено.

---

## 👨‍💻 Автор

**Roman Smikhotur**  
📧 [email protected]  
🌐 [https://smikhotur.github.io/ElektrykService](https://smikhotur.github.io/ElektrykService)
