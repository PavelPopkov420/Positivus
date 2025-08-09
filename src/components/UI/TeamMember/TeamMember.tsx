import type { FC, ReactNode } from "react";
import styles from './teamMember.module.scss';

interface ITeamMember {
  name: string;
  jobTitle: string;
  photo: ReactNode;
  link: ReactNode;
  description: string;
}

export const TeamMember: FC<ITeamMember> = ({
  name,
  jobTitle,
  photo,
  link,
  description
}) => {
  return (
    <>
      <div className={styles.member}>
        <div className={styles.member__header}>
          <div className={styles.member__photo}>{photo}</div>
          <div className={styles.member__info}>
          <a href="" className={styles.member__link}>{link}</a>
            <div className={styles.member__profile}>
              <p className={styles.member__name}>{name}</p>
              <p className={styles.member__position}>{jobTitle}</p>
            </div>
            
          </div>
        </div>
        <div  className={styles.member__description} >
          <p>{description}</p>
        </div>
      </div>
    </>
  );
};
