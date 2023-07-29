export function getMinutes(second: number): string {

    const minutes = Math.floor(second / 60)
    const sec = second - (minutes * 60)

    return `${minutes}:${sec}`
}