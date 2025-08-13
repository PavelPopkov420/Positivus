import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { Button } from "../Button/Button";
import { FormSelector } from "./FormSelector";
import { FormImage } from "./FormImage";
import { SayHiForm } from "../forms/SayHiForm";
import { GetAQuoteForm } from "../forms/GetAQuoteForm";
import type { IContectForm, FormName } from "./FormTypes";
import styles from "./ContactForm.module.scss";

export const ContactForm = () => {
  const [selectedForm, setSelectedForm] = useState<FormName>("SayHi");
  const { register, handleSubmit, reset } = useForm<IContectForm>();
  const [isSuccsesModalOpen, setIsSuccsesModalOpen] = useState(false);

  const closeModal: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    setIsSuccsesModalOpen(false);
  };
  const onSubmit: SubmitHandler<IContectForm> = (data) => {
    console.log("Form submitted:", data);
    reset();
    setIsSuccsesModalOpen(true);
  };

  return (
    <form className={styles.fields} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.fields__form}>
        <FormSelector
          selectedForm={selectedForm}
          onFormChange={setSelectedForm}
        />

        {selectedForm === "SayHi" ? (
          <SayHiForm register={register} />
        ) : (
          <GetAQuoteForm register={register} />
        )}

        <Button option="Dark">
          {selectedForm === "SayHi" ? "Send Message" : "Get a Quote"}
        </Button>
      </div>
      {isSuccsesModalOpen && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <h3>Заявка отправлена!</h3>
            <p>Мы свяжемся с вами в ближайшее время.</p>
            <Button option="Dark" onClick={closeModal}>
              Закрыть
            </Button>
          </div>
        </div>
      )}
      <FormImage />
    </form>
  );
};
