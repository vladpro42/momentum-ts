export type Time = {
    min: number,
    sec: number
}

export function getMinutes(second: number): Time {

    const minutes = Math.floor(second / 60)
    const sec = second % 60

    return {
        min: minutes,
        sec,
    }
}