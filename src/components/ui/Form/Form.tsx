import { TInput } from "../../../types/types";
import ButtonSubmit from "../ButtonSubmit/ButtonSubmit";
import styles from "./Form.module.css";
import Inputs from "../Inputs/Inputs";
import RememberLoginBlock from "../RememberLoginBlock/RememberLoginBlock";

type TExtraQuestion = {
  question: string;
  textButton: string;
};

interface Props
  extends React.DetailedHTMLProps<
    React.FormHTMLAttributes<HTMLFormElement>,
    HTMLFormElement
  > {
  extra?: TExtraQuestion;
  authPageInputs: TInput[];
  rememberLoginBlockHint?: string;
  buttonSubmitTitle: string;
}

const Form = ({
  title,
  extra,
  authPageInputs,
  rememberLoginBlockHint,
  buttonSubmitTitle
}: Props) => {
  return (
    <form className={styles.form}>
      <h2 className={styles.title}>{title}</h2>
      <Inputs inputs={authPageInputs} />
      <RememberLoginBlock
        hint={rememberLoginBlockHint ? "Забыли пароль?" : ""}
      />
      <ButtonSubmit title={buttonSubmitTitle} />
      {extra ? (
        <div className={styles.registerWrap}>
          <div className={styles.register}>
            <span>{extra.question}</span>
            <button className={styles.registerBtn}>{extra.textButton}</button>
          </div>
        </div>
      ) : (
        ""
      )}
    </form>
  );
};

export default Form;
