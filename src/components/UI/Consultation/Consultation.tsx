import { useState, type FC } from "react";
import styles from "./Consultation.module.scss";

interface IConsultation {
  id: string;
  title: string;
  content: string;
}

export const Consultation: FC<IConsultation> = ({ id, title, content }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`${styles.consultation} ${
        open ? styles["consultation--open"] : ""
      }`}
    >
      <div className={styles.consultation__item}>
        <span className={styles.consultation__number}>{id}</span>
        <span className={styles.consultation__title}>{title}</span>
        <button className={styles.consultation__btn} onClick={() => setOpen(prev =>!prev)}>
          {open ? (
            <svg
              width="18"
              height="7"
              viewBox="0 0 18 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 6.14V0.5H17.76V6.14H0Z" fill="black" />
            </svg>
          ) : (
            <svg
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.6 25.58V15.86H0V10.22H9.6V0.5H15.48V10.22H25.08V15.86H15.48V25.58H9.6Z"
                fill="#191A23"
              />
            </svg>
          )}
        </button>
      </div>

      {open && <div className={styles.consultation__content}>{content}</div>}
    </div>
  );
};
