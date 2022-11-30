
interface Rule {
    error: string,
    rule: RegExp
}

export const rules: Record<string, Rule> = { 
    name: {
        error: 'Начните с заглавной, только буквы',
        rule: /^[A-ZА-Я]{1}[a-zа-я-]*$/
    },
    login: {
        error: 'Введите 3-20 латинских символов',
        rule: /(?!^\d+$)^[\w-]{3,20}$/
    },
    email: {
        error: 'Введите валидный e-mail',
        rule: /^[\w-]+@[A-Za-z]+\.\w+$/
    },
    password: {
        error: '8-40 символов, как минимум одна цифра и заглавная буква',
        rule: /^(?=.*[A-Z])(?=.*[0-9]).{8,40}$/
    },
    phone: {
        error: 'Введите правильный номер телефона',
        rule: /^((\+)*([0-9]){10,15})$/
    },
    message: {
        error: 'Введите сообщение',
        rule: /^\S+$/
    }
}