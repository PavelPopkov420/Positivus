import type { FC, ReactNode } from "react";
import styles from "./button.module.scss";
import clsx from "clsx";

interface Iprops {
  children: ReactNode;
  option: "Dark" | "White" | "Green";
  style?: React.CSSProperties;
}

export const Button: FC<Iprops> = ({ children, option, style }) => {
  return (
    <button
      className={clsx(styles.button, {
        [styles["button--dark"]]: option === "Dark",
        [styles["button--white"]]: option === "White",
        [styles["button--green"]]: option === "Green",
      })}
      style={style}
    >
      {children}
    </button>
  );
};
