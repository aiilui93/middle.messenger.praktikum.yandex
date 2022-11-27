export default function createInstances(data: Record<string, any>[], Instance: any ) {
    return data.reduce( (target: Record<string, object>, item: any )  => {
        const name: string = item.name;
        target[name] = new Instance(item);
        return target;
    }, {} );
}
