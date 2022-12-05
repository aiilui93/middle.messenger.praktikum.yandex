import rules from './rules';

const validateRegExp = (el: HTMLElement, ruleName: string) => {
    const result: Record<string, any> = {};
    const regex: RegExp = rules[ruleName].rule;
    const { error } = rules[ruleName];
    const input = el.querySelector('input')! || el.querySelector('textarea')!;

    result.test = regex.test(input.value);
    result.error = error;
    result.value = input.value;

    return result;
};

export default validateRegExp;
