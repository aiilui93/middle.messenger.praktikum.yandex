import { FieldInputs } from '../../utils/types/dataTypes';

const inputs: FieldInputs[] = [
    {
        name: 'password',
        label: 'Пароль',
        type: 'password',
        required: 'true',
        id: 'password',
        validate_rule: 'password',
    },
    {
        name: 'login',
        label: 'Логин',
        type: 'text',
        required: 'true',
        id: 'name',
        validate_rule: 'login',
    },
];

export default inputs;
