import { useState, useEffect, useRef } from "react"
import AudioPlayer from "./AudioPlayer"

function getMinutes(second: number): string {

    const minutes = Math.floor(second / 60)
    const sec = second - (minutes * 60)

    return `${minutes}:${sec}`
}

const playList = [
    {
        title: "sec5",
        src: "/sec5.mp3",
        duration: 5
    },
    {
        title: "ilomilo",
        src: "/ilomilo.mp3",
        duration: 156
    }
]

const Audio: React.FC = () => {

    const [progress, setProgress] = useState(0);
    const [isPause, setIsPause] = useState(true);
    const [currentTime, setCurrentTime] = useState(0);

    const btn = useRef<HTMLButtonElement>(null);

    getMinutes(playList[0].duration)

    const toggleAudio = () => {
        if (!isPause) {
            AudioPlayer.pause()
            setIsPause(true)
            return
        }
        AudioPlayer.play()
        setIsPause(false)
    }


    useEffect(() => {
        AudioPlayer.src = playList[0].src
        AudioPlayer.currentTime = currentTime
    }, [])

    useEffect(() => {

        if (isPause) {
            return () => { }
        }

        const timerId = setInterval(() => {
            setCurrentTime(prev => prev + 1)
        }, 1000)

        if (currentTime >= playList[0].duration) {
            return clearInterval(timerId)
        }

        return () => {
            clearInterval(timerId)
        }

    }, [isPause, currentTime])

    useEffect(() => {

        if (isPause) {
            return () => { }
        }

        const timerId = setTimeout(() => {
            setProgress(prev => (prev + (1000 / playList[0].duration)))
        }, 1000)

        if (progress >= 1000) {
            return clearTimeout(timerId)
        }

        return () => { clearTimeout(timerId) }
    }, [isPause, progress])


    return (
        <div style={{ marginTop: "75px" }}>
            <div>
                <button ref={btn} onClick={toggleAudio} >
                    {isPause ? "play" : "pause"}
                </button>
            </div>
            <div>
                <span>{getMinutes(playList[0].duration)} / {getMinutes(currentTime)}</span>
                <progress max={1000} value={progress} />
            </div>
        </div>
    )
}

export default Audio