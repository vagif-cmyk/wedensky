import { TInput } from "../../../types/types";
import InputWrap from "../InputWrap/InputWrap";
import styles from "./Inputs.module.css";

interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  inputs: TInput[];
}

const Inputs = ({ inputs }: Props) => {
  return (
    <div className={styles.inputs}>
      {inputs.map((item) => (
        <InputWrap
          inputFields={{ ...item.fields }}
          inputClassName={item.inputClassName}
          icon={item.icon}
          iconLocation={item.iconLocation}
          key={item.id}
        />
      ))}
    </div>
  );
};

export default Inputs;
