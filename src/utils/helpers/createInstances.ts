export default function createInstances(data: Record<string, any>[], Instance: any) {
    return data.reduce((obj: Record<string, object>, item: any) => {
        const { name } = item;
        /* eslint-disable-next-line */
        obj[name] = new Instance(item);
        return obj;
    }, {});
}
