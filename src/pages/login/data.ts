import { FieldInputs } from "../../utils/types/dataTypes";

const inputs: FieldInputs[] = [
    {
      name: "login",
      label: "Логин",
      type: "text",
      required: "true",
      id: "name",
      events: {
          blur: () => {
              console.log('кликнули')
          }
      }
    },
    {
      name: "password",
      label: "Пароль",
      type: "password",
      required: "true",
      id: "password",
      events: {
          blur: () => {
              console.log('кликнули')
          }
      },
    }
];

export default inputs;