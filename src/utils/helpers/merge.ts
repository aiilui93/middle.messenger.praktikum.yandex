export type Indexed<T = any> = {
    [key in string]: T;
  };

export function merge(lhs: Indexed, rhs: Indexed): Indexed {
    Object.keys(rhs).forEach((key) => {
        // @ts-ignore
        if (!rhs.hasOwnProperty(key)) {
            return;
        }

        try {
            // @ts-ignore
            if (rhs[key]!.constructor === Object) {
                // @ts-ignore
                if (lhs[key]!.constructor === Object) {
                    rhs[key] = merge(lhs[key] as Indexed, rhs[key] as Indexed);
                }
            } else {
                lhs[key] = rhs[key];
            }
        } catch (e) {
            lhs[key] = rhs[key];
        }
    });

    return lhs;
}
