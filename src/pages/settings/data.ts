import { FieldInputs } from "../../utils/types/dataTypes";

const inputs = {
    data: [
        {
          name: "email",
          label: "Почта",
          type: "email",
          required: "true",
          id: "email",
          value: "pochta@yandex.ru"
        },
        {
          name: "login",
          label: "Логин",
          type: "text",
          required: "true",
          id: "login",
          value: "ivanivanov"
        },
        {
          name: "first_name",
          label: "Имя",
          type: "text",
          required: "true",
          id: "first_name",
          value: "Иван"
        },
        {
          name: "second_name",
          label: "Фамилия",
          type: "text",
          required: "true",
          id: "second_name",
          value: "Иванов"
        },
        {
          name: "display_name",
          label: "Имя в чате",
          type: "text",
          required: "true",
          id: "display_name",
          value: "Иванов"
        },
        {
          name: "phone",
          label: "Телефон",
          type: "text",
          required: "true",
          id: "phone",
          value: "+7 (909) 967 30 30"
        }
    ],
    password: [
        {
            name: "oldPassword",
            label: "Старый пароль",
            type: "password",
            required: "true",
            id: "oldPassword",
            value: "12345678"
        },
        {
            name: "newPassword",
            label: "Новый пароль",
            type: "password",
            required: "true",
            id: "newPassword",
            value: "12345678qwe"
        },
        {
            name: "newPassword-repeat",
            label: "Повторите новый пароль",
            type: "password",
            required: "true",
            id: "newPassword-repeat",
            value: "12345678qwe"
        }
    ]
}

export default inputs;