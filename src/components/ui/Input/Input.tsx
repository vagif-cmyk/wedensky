import clsx from "clsx";
import styles from "./Input.module.css";

interface Props {
  type: string;
  placeholder: string;
  value: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
  className: string;
}

const Input: React.FC<Props> = ({
  type,
  placeholder,
  value,
  onChange,
  className,
}) => {
  return (
    <input
      className={clsx(styles.input, { [styles[className]]: className })}
      value={value}
      type={type}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default Input;
