import { FieldInputs } from '../../utils/types/dataTypes';

const inputs: Record<string, FieldInputs[]> = {
    data: [
        {
          name: 'email',
          label: 'Почта',
          type: 'email',
          required: 'true',
          id: 'email',
          value: 'pochta@yandex.ru',
          validate_rule: 'email'
        },
        {
          name: 'login',
          label: 'Логин',
          type: 'text',
          required: 'true',
          id: 'login',
          value: 'ivanivanov',
          validate_rule: 'login'
        },
        {
          name: 'first_name',
          label: 'Имя',
          type: 'text',
          required: 'true',
          id: 'first_name',
          value: 'Иван',
          validate_rule: 'name'
        },
        {
          name: 'second_name',
          label: 'Фамилия',
          type: 'text',
          required: 'true',
          id: 'second_name',
          value: 'Иванов',
          validate_rule: 'name'
        },
        {
          name: 'display_name',
          label: 'Имя в чате',
          type: 'text',
          required: 'true',
          id: 'display_name',
          value: 'Иванов',
          validate_rule: 'name'
        },
        {
          name: 'phone',
          label: 'Телефон',
          type: 'text',
          required: 'true',
          id: 'phone',
          value: '+79099673030',
          validate_rule: 'phone'
        }
    ],
    password: [
        {
            name: 'oldPassword',
            label: 'Старый пароль',
            type: 'password',
            required: 'true',
            id: 'oldPassword',
            value: '12345678',
            validate_rule: 'password'
        },
        {
            name: 'newPassword',
            label: 'Новый пароль',
            type: 'password',
            required: 'true',
            id: 'newPassword',
            value: '12345678qwe',
            validate_rule: 'password'
        },
        {
            name: 'newPassword-repeat',
            label: 'Повторите новый пароль',
            type: 'password',
            required: 'true',
            id: 'newPassword-repeat',
            value: '12345678qwe',
            validate_rule: 'password'
        }
    ]
}

export default inputs;