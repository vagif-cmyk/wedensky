import clsx from "clsx";
import Input from "../Input/Input";
import styles from "./InputWrap.module.css";

interface InputFields {
  type: string;
  placeholder: string;
  value: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
}

interface Props {
  icon?: React.ReactNode;
  inputFields: InputFields;
  iconLocation?: "left" | "right";
  inputClassName: string;
}

const getIconLocation = (value: string | undefined) => {
  if (value === "left") {
    return "iconLocationLeft";
  } else if (value === "right") {
    return "iconLocationRight";
  } else return "";
};

const InputWrap: React.FC<Props> = ({
  inputFields,
  icon,
  iconLocation,
  inputClassName,
}) => {
  const { onChange, placeholder, type, value } = inputFields;

  return (
    <div className={styles.wrap}>
      {icon ? (
        <div
          className={clsx(styles.icon, styles[getIconLocation(iconLocation)])}
        >
          {icon}
        </div>
      ) : (
        ""
      )}
      <Input
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={onChange}
        className={inputClassName}
      />
    </div>
  );
};

export default InputWrap;
