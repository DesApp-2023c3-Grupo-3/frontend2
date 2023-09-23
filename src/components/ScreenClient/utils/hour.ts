export function createHour() {
    const date = new Date()
    let hour = date.getHours().toString()
    let minute = date.getMinutes().toString()

    if(hour.length < 2) hour ='0' + hour
    if(minute.length < 2) minute = '0' + minute

    return { hour, minute }
}