import { FieldInputs } from "../../utils/types/dataTypes";

const inputs: FieldInputs[] = [
    {
      name: "email",
      label: "Почта",
      type: "email",
      required: "true",
      id: "email"
    },
    {
      name: "login",
      label: "Логин",
      type: "text",
      required: "true",
      id: "login"
    },
    {
      name: "first_name",
      label: "Имя",
      type: "text",
      required: "true",
      id: "first_name"
    },
    {
      name: "second_name",
      label: "Фамилия",
      type: "text",
      required: "true",
      id: "second_name"
    },
    {
      name: "phone",
      label: "Телефон",
      type: "text",
      required: "true",
      id: "phone"
    },
    {
      name: "password",
      label: "Пароль",
      type: "password",
      required: "true",
      id: "password"
    },
    {
      name: "submit_password",
      label: "Пароль (ещё раз)",
      type: "password",
      required: "true",
      id: "submit_password"
    }
];

export default inputs;