interface Rule {
    error: string,
    rule: RegExp
}

const rules: Record<string, Rule> = {
    name: {
        error: 'Начните с заглавной, только буквы',
        rule: /^[A-ZА-Я]{1}[a-zа-я-]*$/,
    },
    login: {
        error: 'Введите 3-20 латинских символов',
        rule: /(?!^\d+$)^[\w-]{3,20}$/,
    },
    chatname: {
        error: 'Введите 3-20 букв или цифр',
        rule: /^[\sa-zа-я0-9-_?!#$@.,]{3,20}$/i,
    },
    email: {
        error: 'Введите валидный e-mail',
        rule: /^[\w-]+@[A-Za-z]+\.\w+$/,
    },
    password: {
        error: '8-40 символов, как минимум одна цифра и заглавная буква',
        rule: /^(?=.*[A-Z])(?=.*[0-9]).{8,40}$/,
    },
    phone: {
        error: 'Введите правильный номер телефона',
        rule: /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/,
    },
    message: {
        error: 'Введите сообщение',
        rule: /^.+$/i,
    },
    number: {
        error: 'Введите число',
        rule: /^[0-9]{1,100}$/i,
    },
};

export default rules;
