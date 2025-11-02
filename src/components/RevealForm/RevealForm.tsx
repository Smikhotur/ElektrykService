"use client";

import { useState } from "react";
import styles from "../../app/services/services.module.scss";
import SendForm from "@/app/contacts/page";

export default function RevealForm({
  showLabel = "Замовити монтаж",
  hideLabel = "Сховати форму",
  message = "",
}: { showLabel?: string; hideLabel?: string; message?: string }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button onClick={() => setOpen(v => !v)} className={styles.cta}>
        {open ? hideLabel : showLabel}
      </button>

      {open && (
        <div className={styles.formWrap}>
          <SendForm message={message} />
        </div>
      )}
    </>
  );
}
