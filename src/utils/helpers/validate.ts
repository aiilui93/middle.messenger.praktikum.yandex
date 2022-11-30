import { rules } from './rules' 

export const validateRegExp = (el: HTMLElement, ruleName: string) => {
    let result: Record<string, any> = {};
    const regex: RegExp = rules[ruleName].rule;
    const error: string = rules[ruleName].error;
    const input = el.querySelector('input')! || el.querySelector('textarea')!;

    result.test = regex.test(input.value)
    result.error = error
    result.value = input.value

    return result;
}