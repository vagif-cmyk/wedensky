import styles from "./Login.module.css";
import photo from "../../assets/images/hotel-front.jpg";
import LogoBlock from "../../components/ui/LogoBlock/LogoBlock";
import Form from "../../components/ui/Form/Form";
import Container from "../../components/Container/Container";
import { TInput } from "../../types/types";
import HandSetIcon from "../../components/svg/HandsetIcon";
import LockIcon from "../../components/svg/LockIcon";
import { useState } from "react";
import { NavLink } from "react-router";

const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const inputs: TInput[] = [
    {
      id: 1,
      fields: {
        placeholder: "Номер телефона",
        type: "number",
        onChange: setName,
        value: name,
      },

      icon: <HandSetIcon />,
      iconLocation: "left",
      inputClassName: "paddingLeft",
    },
    {
      id: 2,
      fields: {
        placeholder: "Введите пароль",
        type: "password",
        onChange: setPassword,
        value: password,
      },
      icon: <LockIcon />,
      iconLocation: "left",
      inputClassName: "paddingLeft",
    },
  ];
  return (
    <NavLink to={"/register"}>
      <Container>
        <img className={styles.img} src={photo} alt="фото отеля" />
        <section className={styles.section}>
          <div className={styles.logoWrapper}>
            <LogoBlock />
            <div className={styles.line}></div>
          </div>
          <div className={styles.formWrapper}>
            <Form
              authPageInputs={inputs}
              title="Добро пожаловать в Demetra Hotel!"
              extra={{
                question: "Нет аккаунта?",
                textButton: "Зарегистрироваться",
              }}
              rememberLoginBlockHint={"Забыли пароль?"}
              buttonSubmitTitle={"Войти"}
            />
          </div>
        </section>
      </Container>
    </NavLink>
  );
};

export default Login;
