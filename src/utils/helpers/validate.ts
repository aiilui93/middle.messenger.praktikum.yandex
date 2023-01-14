import rules from './rules';

const validateRegExp = (el: HTMLElement | HTMLInputElement, ruleName: string, repeater?: string) => {
    const result: Record<string, any> = {};
    let input;

    if (el instanceof HTMLInputElement) {
        input = el;
    } else {
        input = el.querySelector('input')! || el.querySelector('textarea')!;
    }

    if (ruleName === 'repeater' && repeater) {
        const repeatInput = document.querySelector(`input[name="${repeater}"]`) as HTMLInputElement;
        const repeatValue = repeatInput.value;
        result.error = 'Неверный повторный ввод';
        result.value = input.value;
        result.test = input.value === repeatValue;
    } else {
        const regex: RegExp = rules[ruleName].rule;
        const { error } = rules[ruleName];
        result.test = regex.test(input.value);
        result.error = error;
        result.value = input.value;
    }

    return result;
};

export default validateRegExp;
