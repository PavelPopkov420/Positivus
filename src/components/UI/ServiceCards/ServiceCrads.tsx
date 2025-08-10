import type { FC, ReactNode } from "react"
import { ServiceScreen } from "../../screens/serviceScreen"
import styles from './ServiceCards.module.scss'
import { Button } from "../Button/Button"

interface IServiceCards{
    title: string,
    description: string,
    img: ReactNode
}

export const ServiceCards: FC<IServiceCards> = ({title, description, img}) =>{
    return (
        <>
            <ServiceScreen/>
            <div className={styles['cta-card']}>
                <div className={styles['cta-card__info']}>
                    <h3 className={styles['cta-card__title']}>{title}</h3>
                    <p className={styles['cta-card__description']}>{description}</p>
                    <Button style={{ alignSelf: "flex-start" }} option="Dark">{'Get your free proposal'}</Button>
                </div>
                <div className={styles['cta-card__img']}>
                    {img}
                </div>
            </div>
        </>
    )
}