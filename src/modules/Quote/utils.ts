export function randomInteger(max: number, min = 1,): number {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}