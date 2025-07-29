import type { ComponentType, FC, ReactNode } from "react";
import styles from  './ContainerComponent.module.scss'
interface IContainerComponent {
  Component?: ComponentType<{ children: ReactNode }>;
  title: string;
  subtitle: string;
}

export const ContainerComponent: FC<IContainerComponent> = ({
  Component,
  title,
  subtitle
}) => {
  return (
    <>
      <div className="container">
        <div className={styles.description}>
          <h2 className={styles.description__title}>{title}</h2>
          <p className={styles.description__subtitle}>{subtitle}</p>
        </div>
        {Component && (  // Рендерим только если передан
        <Component>
          <p>Это переданный контент</p>
        </Component>
      )}
      </div>
    </>
  );
};
