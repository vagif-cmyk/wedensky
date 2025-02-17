import CheckMarkIcon from "../../svg/CheckMarkIcon";
import styles from "./RememberLoginBlock.module.css";

interface Props {
  hint?: string;
}

const RememberLoginBlock = ({ hint }: Props) => {
  return (
    <div className={styles.container}>
      <label className={styles.label}>
        <input type="checkbox" />
        <div className={styles.customCheckIcon}>
          <CheckMarkIcon />
        </div>
        Запомнить данные входа
      </label>
      {hint ? (
        <button className={styles.lost} type="button">
          {hint}
        </button>
      ) : (
        ""
      )}
    </div>
  );
};

export default RememberLoginBlock;
