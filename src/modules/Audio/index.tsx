import { useState, useEffect, useRef } from "react"
import AudioPlayer from "./components/AudioPlayer"
import css from "./components/Audio.module.css"
import PlayList from "./components/PlayList"
import { trackList } from "./trackList"
import { getMinutes } from "./utils/utils"


const Audio: React.FC = () => {

    const [progress, setProgress] = useState(0);
    const [isPause, setIsPause] = useState(true);
    const [currentTime, setCurrentTime] = useState(0);
    const [indexSong, setIndexSong] = useState(0);

    const btn = useRef<HTMLButtonElement>(null);

    getMinutes(trackList[indexSong].duration)

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
        AudioPlayer.src = trackList[indexSong].src;
        AudioPlayer.currentTime = currentTime;
        setProgress(0)
        setCurrentTime(0)
    }, [indexSong])

    useEffect(() => {

        if (isPause) {
            return () => { }
        }

        const timerId = setInterval(() => {
            setCurrentTime(prev => prev + 1)
        }, 1000)

        if (currentTime >= trackList[indexSong].duration) {
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
            setProgress(prev => (prev + (1000 / trackList[indexSong].duration)))
        }, 1000)

        if (progress >= 1000) {
            return clearTimeout(timerId)
        }

        return () => { clearTimeout(timerId) }
    }, [isPause, progress])

    return (
        <div className={css.audio__container}>
            <div className={css.audio} >
                <span className={css.time}>{getMinutes(trackList[indexSong].duration)} / {getMinutes(currentTime)}</span>
                <progress className={css.progressBar} max={1000} value={progress} />
                <button className={css.btn} ref={btn} onClick={toggleAudio} >
                    {isPause ? "play" : "pause"}
                </button>
            </div>
            <PlayList indexSong={indexSong} setIndex={setIndexSong} />
        </div>
    )
}

export default Audio