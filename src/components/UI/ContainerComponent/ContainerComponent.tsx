import type { FC, ReactNode } from "react";
import styles from './ContainerComponent.module.scss'

interface IContainerComponent {
  children?: ReactNode;
  title: string;
  subtitle: string;
}

export const ContainerComponent: FC<IContainerComponent> = ({
  title,
  subtitle,
  children
}) => {
  return (
    <>
      
        <div className={styles.description}>
          <h2 className={styles.description__title}>{title}</h2>
          <p className={styles.description__subtitle}>{subtitle}</p>
        </div>
        <div>
          {children}
        </div>
   
    </>
  );
};
