import { Button } from "../Button/Button";
import { List } from "../List/List";
import styles from "./Footer.module.scss";

export const Footer = () => {
  const menuItems = [
    { content: "About us", href: "#" },
    { content: "Services", href: "#" },
    { content: "Use Cases", href: "#" },
    { content: "Pricing", href: "#" },
    { content: "Blog", href: "#" },
  ];

  return (
    <div className={styles.footer}>
      <nav className={styles.footer__nav}>
        <a href="" className={styles.footer__logo}>
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_2268_122)">
              <path
                d="M14.7573 4.95854L29.1886 0.78125L24.9778 15.0001L29.1886 29.1788L14.7573 25.0416L0.285156 29.1788L4.53687 15.0001L0.285156 0.78125L14.7573 4.95854Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_2268_122">
                <rect
                  width="29.5167"
                  height="29"
                  fill="white"
                  transform="translate(0 0.5)"
                />
              </clipPath>
            </defs>
          </svg>
          <h2>Positivus</h2>
        </a>
        <List
          items={menuItems}
          className={styles.footer__list}
          itemClassName={styles.footer__item}
        />
        <div className={styles.footer__social}>
          <a href="">
            <img src="../../../public/footer_in.png" alt="in" />
          </a>
          <a href="">
            <img src="../../../public/footer_fb.png" alt="fb" />
          </a>
          <a href="">
            <img src="../../../public/twitter.png" alt="twitter" />
          </a>
        </div>
      </nav>
      <div className={styles.footer__info}>
        <div className={styles.footer__about}>
            <h4 className={styles['footer__about-title']}>Contacs Us</h4>
            <p className={styles['footer__about-email']}>Email: info@positivus.com</p>
            <p className={styles['footer__about-tel']}>Phone: 555-567-8901</p>
            <p className={styles['footer__about-address']}>Address: 1234 Main St Moonstone City, Stardust State 12345</p>
        </div>
        <div className={styles.footer__subscribe}>
            <input type="text" placeholder="Email"/>    
            <Button option="Green">Subscribe to news</Button>
        </div>
      </div>
      <div className={styles.footer__copyright}>
        <p>© 2023 Positivus. All Rights Reserved.</p>
        <a href="">Privacy Policy</a>
      </div>
    </div>
  );
};
