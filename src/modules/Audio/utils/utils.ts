export type Time = {
    min: number,
    sec: number | string
}

export function getMinutes(second: number): Time {

    const minutes = Math.floor(second / 60)
    let sec: number | string = second % 60

    if (sec <= 9) {
        sec = "0" + sec
    }

    return {
        min: minutes,
        sec,
    }
}
