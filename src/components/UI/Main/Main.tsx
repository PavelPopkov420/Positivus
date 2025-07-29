import type { FC } from "react";
import { Button } from "../Button/Button";
import style from "./Main.module.scss";
import { List } from "../List/List";

interface IMain {
  title: string;
  discription: string;
}

export const Main: FC<IMain> = ({ title, discription }) => {

    const logos = [
        {content: <img src="../../public/AMAZON.png" alt="AMAZON" />, href: ''},
        {content: <img src="../../public/DRIBBLE.png" alt="DRIBBLE" />, href: ''},
        {content: <img src="../../public/HUBSPOT.png" alt="HUBSPOT" />, href: ''},
        {content: <img src="../../public/NOTION.png" alt="NOTION" />, href: ''},
        {content: <img src="../../public/NETFLIX.png" alt="NETFLIX" />, href: ''},
        {content: <img src="../../public/ZOOM.png" alt="ZOOM" />, href: ''},
    ]


  return (
    <>
      <div className="container">
        <div className={style.main_content}>
          <div className={style.main_content__info}>
            <h2 className={style.main_content__title}>{title}</h2>
            <p className={style.main_content__discription}>{discription}</p>
            <Button option={"Dark"} style={{ alignSelf: "flex-start" }}>
              Book a consultation
            </Button>
          </div>
          <div className={style.main_content__image}>
            <img src="../../public/Main-Image.png" alt="Main-image" />
          </div>
        </div>
        <div className={style.main_content__logotypes}>
          {/* <ul className={style.main_content__list}>
            <li  className={style.main_content__list_item}>
              <a href="">
                <img src="../../public/AMAZON.png" alt="AMAZON" />
              </a>
            </li>
            <li className={style.main_content__list_item}>
              <a href="">
                <img src="../../public/DRIBBLE.png" alt="DRIBBLE" />
              </a>
            </li>
            <li className={style.main_content__list_item}>
              <a href="">
                <img src="../../public/HUBSPOT.png" alt="HUBSPOT" />
              </a>
            </li>
            <li className={style.main_content__list_item}>
              <a href="">
                <img src="../../public/NOTION.png" alt="NOTION" />
              </a>
            </li>
            <li className={style.main_content__list_item}>
              <a href="">
                <img src="../../public/NETFLIX.png" alt="NETFLIX" />
              </a>
            </li>
            <li className={style.main_content__list_item}>
              <a href="">
                <img src="../../public/ZOOM.png" alt="ZOOM" />
              </a>
            </li>
          </ul> */}
          <List items={logos} className={style.main_content__list} itemClassName={style.main_content__list_item}/>
        </div>
      </div>
    </>
  );
};
