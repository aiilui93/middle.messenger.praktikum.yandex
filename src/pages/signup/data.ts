import { FieldInputs } from '../../utils/types/dataTypes';

const inputs: FieldInputs[] = [
    {
        name: 'email',
        label: 'Почта',
        type: 'email',
        required: 'true',
        id: 'email',
        validate_rule: 'email',
    },
    {
        name: 'login',
        label: 'Логин',
        type: 'text',
        required: 'true',
        id: 'login',
        validate_rule: 'login',
    },
    {
        name: 'first_name',
        label: 'Имя',
        type: 'text',
        required: 'true',
        id: 'first_name',
        validate_rule: 'name',
    },
    {
        name: 'second_name',
        label: 'Фамилия',
        type: 'text',
        required: 'true',
        id: 'second_name',
        validate_rule: 'name',
    },
    {
        name: 'phone',
        label: 'Телефон',
        type: 'text',
        required: 'true',
        id: 'phone',
        validate_rule: 'phone',
    },
    {
        name: 'password',
        label: 'Пароль',
        type: 'password',
        required: 'true',
        id: 'password',
        validate_rule: 'password',
    },
    {
        name: 'submit_password',
        label: 'Пароль (ещё раз)',
        type: 'password',
        required: 'true',
        id: 'submit_password',
        validate_rule: 'repeater',
        repeater_name: 'password',
    },
];

export default inputs;
