export default function getTime(date: string) :string {
    const time: Date = new Date(date as string);
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const timeString = `${hours}:${minutes}`;

    return timeString;
}
