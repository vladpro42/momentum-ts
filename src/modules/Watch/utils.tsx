export function sayHi(hours: number): string {
    if (hours >= 4 && hours < 9) {
        return "Good morning"
    } else if (hours >= 9 && hours < 17) {
        return "Good day"
    } else if (hours >= 17 && hours < 24 || 0) {
        return "Good evening"
    } else {
        return "Good night"
    }
}
