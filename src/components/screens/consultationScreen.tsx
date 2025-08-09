import { Consultation } from "../UI/Consultation/Consultation";
import styles from './consultationScreen.module.scss'

export const СonsultationScreen = () => {
  const consultationSteps = [
    {
      id: '01',
      title: "Consultation",
      content:
        "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    },
    {
      id: '02',
      title: "Research and Strategy Development",
      content: '2'
    },
    {
      id: '03',
      title: "Research and Strategy Development",
      content: '3'
    },
    {
      id: '04',
      title: "Research and Strategy Development",
      content: '4'
    },
    {
      id: '05',
      title: "Research and Strategy Development",
      content:'5'
    },
    {
      id: '06',
      title: "Research and Strategy Development",
      content:'6'
    },
  ];
  return (
    <div className={styles.content}>
      {consultationSteps.map((item) => (<Consultation content={item.content} id={item.id} title={item.title}/>)
      )}
    </div>
  );
};
