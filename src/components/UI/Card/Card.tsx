import type { FC, ReactNode } from "react";
import styles from "./Card.module.scss";
import clsx from "clsx";

type CardOption = 'Grey' | 'Green' | 'Black' | 'Dark' | 'Dark_Green';

interface ICard {
  title1: string;
  title2: string;
  image: ReactNode;
  children: ReactNode;
  option: CardOption
}

export const Card: FC<ICard> = ({ title1, title2, image, children, option }) => {
  return (
    <>
     
        <div className={clsx(styles.card,{
          [styles['card--dark']]: option === 'Dark',
          [styles['card--dark_green']]: option === 'Dark_Green',
          [styles['card--grey']]: option === 'Grey',
          [styles['card--green']]: option === 'Green',
        })}>
          <div className={styles.card__discrition}>
            <h3 className={styles.card__title}>
              <span>{title1}</span>
              <span>{title2}</span>
            </h3>
            <a href="#" className={styles.card__link}>
              <button className={styles.card__link_btn}>{children}</button>
              <p className={styles.card__link_text}>Learn more</p>
            </a>
          </div>
          <div className={styles.card__image}>{image}</div>
        </div>
    </>
  );
};
