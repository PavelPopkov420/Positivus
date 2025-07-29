import { Button } from "../Button/Button";
import { List } from "../List/List";
import styles from "./header.module.scss";

export const Header = () => {

  const menuItems = [
    {content: 'About us', href: '#'},
    {content: 'Services', href: '#'},
    {content: 'Use Cases', href: '#'},
    {content: 'Pricing', href: '#'},
    {content: 'Blog', href: '#'},
  ]

  return (
    <>
      <div className="container">
        <div className={styles.header}>
          <a href="" className={styles.header__logo}>
            <img
              src="../../../public/Icon.svg"
              alt="Logo-pisitivus"
              className="header__logo-img"
            />
            <h2>Positivus</h2>
          </a>
          <nav className={styles.header__nav}>
            <List items={menuItems} className={styles.header__list} itemClassName={styles.header__item}/>
            <Button option="White">Request a quote</Button>
          </nav>
        </div>
      </div>
    </>
  );
};
