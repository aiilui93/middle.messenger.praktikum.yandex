import { PlainObject } from '../types/dataTypes';

function isPlainObject(value: unknown): value is PlainObject {
    return typeof value === 'object'
        && value !== null
        && value.constructor === Object
        && Object.prototype.toString.call(value) === '[object Object]';
}

function isArray(value: unknown): value is [] {
    return Array.isArray(value);
}

function isArrayOrObject(value: unknown): value is [] | PlainObject {
    return isPlainObject(value) || isArray(value);
}

export default function isEqual(lhs: PlainObject, rhs: PlainObject) {
    if (Object.keys(lhs).length !== Object.keys(rhs).length) {
        return false;
    }

    // eslint-disable-next-line no-restricted-syntax
    for (const [key, value] of Object.entries(lhs)) {
        const compared = rhs[key];
        if (isArrayOrObject(value) && isArrayOrObject(compared)) {
            if (isEqual(value, compared)) {
                // eslint-disable-next-line no-continue
                continue;
            }
            return false;
        }

        if (value !== compared) {
            return false;
        }
    }

    return true;
}
