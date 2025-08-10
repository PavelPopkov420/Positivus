// import { useForm } from "react-hook-form"
import { Button } from "../Button/Button";
import styles from './ContactForm.module.scss'

// interface IContectForm{
//     name: string;
//     email: string
// }

export const ContactForm = () => {
  // const {} = useForm<IContectForm>({});

  return (
    <form className={styles.fields}>
      <div className={styles.fields__form}>
        <div className={styles.fields__checkbox}>
          <label>
            <input type="checkbox" name="option" /> Say Hi
          </label>
          <label>
            <input type="checkbox" name="option" /> Get a Quote
          </label>
        </div>
        <div className={styles.fields__info}>
          <div className={styles.fields__name}>
            <p className={styles.fields__name__title}>Name</p>
            <input type="text" name="" id="" placeholder="Name" />
          </div>
          <div className={styles.fields__email}>
            <p className={styles.fields__email__title}>Emaeli*</p>
            <input type="email" name="" id="" placeholder="Email"/>
          </div>
          <div className={styles.fields__massage}>
            <p className={styles.fields__massage__title}>Message*</p>
            <input type="text" name="" id="" placeholder="Message"/>
          </div>
        </div>
        <Button option="Dark"> Send Message</Button>
      </div>
      
      <div>
        <img src="../../public/form_image.png" alt="form_image" />
      </div>
      
    </form>
  );
};
