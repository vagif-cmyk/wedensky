import clsx from "clsx";
import styles from "./ButtonSubmit.module.css";

interface Props
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  hint?: string;
}
const ButtonSubmit: React.FC<Props> = ({ title, onClick, type, hint }) => {
  return (
    <button
      className={clsx(styles.submit, { [styles.spaceBetween]: hint })}
      type={type}
      onClick={onClick}
    >
      <span className={styles.title}>{title}</span>
      <span className={styles.hint}>{hint}</span>
    </button>
  );
};

export default ButtonSubmit;
