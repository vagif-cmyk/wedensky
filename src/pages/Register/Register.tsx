import { useState } from "react";
import Container from "../../components/Container/Container";
import HandSetIcon from "../../components/svg/HandsetIcon";
import LockIcon from "../../components/svg/LockIcon";
import styles from "./Register.module.css";
import { TInput } from "../../types/types";
import Form from "../../components/ui/Form/Form";
import LogoBlock from "../../components/ui/LogoBlock/LogoBlock";
import { NavLink } from "react-router";

const Register = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [surName, setSurname] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const inputs: TInput[] = [
    {
      id: 1,
      fields: {
        placeholder: "Фамилия",
        type: "text",
        onChange: setLastName,
        value: lastName,
      },
      iconLocation: "left",
      inputClassName: "paddingRight",
    },
    {
      id: 2,
      fields: {
        placeholder: "Имя",
        type: "text",
        onChange: setName,
        value: name,
      },
      iconLocation: "left",
      inputClassName: "paddingRight",
    },
    {
      id: 3,
      fields: {
        placeholder: "Отчество",
        type: "text",
        onChange: setSurname,
        value: surName,
      },
      iconLocation: "left",
      inputClassName: "paddingRight",
    },
    {
      id: 4,
      fields: {
        placeholder: "Номер телефона",
        type: "number",
        onChange: setPhoneNumber,
        value: phoneNumber,
      },

      icon: <HandSetIcon />,
      iconLocation: "left",
      inputClassName: "paddingLeft",
    },
    {
      id: 5,
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
    {
      id: 6,
      fields: {
        placeholder: "Подтвердите пароль",
        type: "password",
        onChange: setConfirmPassword,
        value: confirmPassword,
      },
      icon: <LockIcon />,
      iconLocation: "left",
      inputClassName: "paddingLeft",
    },
  ];

  return (
    <NavLink to={"/"}>
      <Container>
        <div className={styles.logoWrap}>
          <LogoBlock />
          <div className={styles.line}></div>
        </div>
        <div className={styles.formWrap}>
          <Form
            authPageInputs={inputs}
            title="Регистрация"
            buttonSubmitTitle="Создать аккаунт"
            extra={{ question: "Уже есть аккаунт?", textButton: "Войти" }}
          />
        </div>
      </Container>
    </NavLink>
  );
};

export default Register;
