import { type FormName } from './FormTypes';
import styles from './ContactForm.module.scss';

interface FormSelectorProps {
  selectedForm: FormName;
  onFormChange: (formName: FormName) => void;
}

export const FormSelector = ({ selectedForm, onFormChange }: FormSelectorProps) => (
    <div className={styles.fields__checkbox}>
      <label>
        <input
          type="checkbox"  
          checked={selectedForm === "SayHi"}
          onChange={() => onFormChange("SayHi")}
        />{" "}
        Say Hi
      </label>
      <label>
        <input
          type="checkbox"
          checked={selectedForm === "GetAQuote"}
          onChange={() => onFormChange("GetAQuote")}
        />{" "}
        Get a Quote
      </label>
    </div>
  );