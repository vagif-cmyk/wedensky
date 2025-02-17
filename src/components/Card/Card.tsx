import clsx from "clsx";
import styles from "./Card.module.css";
import ArrowIcon from "../svg/ArrowIcon";
import { JSX } from "react";

interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  title: string;
  icon: JSX.Element;
  className: string;
}

const Card = ({ title, icon, className }: Props) => {
  return (
    <div className={clsx(styles.card, styles[className])}>
      <div className={styles.cardTop}>
        <h2 className={styles.cardTitle}>{title}</h2>
      </div>
      <div className={styles.cardBottom}>
        <div className={styles.cardBottomIcon}>{icon}</div>
        <button className={styles.cardBottomBtn}>
          <ArrowIcon />
        </button>
      </div>
    </div>
  );
};

export default Card;
