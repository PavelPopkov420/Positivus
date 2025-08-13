import type { UseFormRegister } from 'react-hook-form';
import type { IContectForm } from '../ContactForm/FormTypes';
import styles from '../ContactForm/ContactForm.module.scss';

interface GetAQuoteFormProps {
  register: UseFormRegister<IContectForm>;
}

export const GetAQuoteForm = ({ register }: GetAQuoteFormProps) => (
  <div className={styles.fields__info}>
    <div className={styles.fields__name}>
      <p className={styles.fields__name__title}>Name</p>
      <input
        className={styles.fields__name__input}
        type="text"
        placeholder="Name"
        {...register("name")}
      />
    </div>
    <div className={styles.fields__email}>
      <p className={styles.fields__email__title}>Email*</p>
      <input
        className={styles.fields__email__input}
        {...register("email", { required: true })}
        type="email"
        placeholder="Email"
      />
    </div>
    <div className={styles.fields__phone}> {/* Новый класс для телефона */}
      <p className={styles.fields__phone__title}>Phone Number</p>
      <input
        className={styles.fields__phone__input}
        {...register("message")}
        type="tel"
        placeholder="Phone Number"
      />
    </div>
  </div>
);