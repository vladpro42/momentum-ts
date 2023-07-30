import { useState, useEffect, useRef } from "react"
import AudioPlayer from "./components/AudioPlayer"
import css from "./components/Audio.module.css"
import PlayList from "./components/PlayList"
import { trackList } from "./trackList"
import { getMinutes } from "./utils/utils"


const Audio: React.FC = () => {

    const [progress, setProgress] = useState(0);
    const [isPlying, setIsPlying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [indexSong, setIndexSong] = useState(0);

    const btn = useRef<HTMLButtonElement>(null);

    const time = getMinutes(trackList[indexSong].duration)
    const curTime = getMinutes(currentTime)

    const toggleAudio = () => {
        if (isPlying) {
            AudioPlayer.pause()
            setIsPlying(false)
            return
        }
        AudioPlayer.play()
        setIsPlying(true)
    }

    useEffect(() => {
        AudioPlayer.src = trackList[indexSong].src;
        AudioPlayer.currentTime = 0;
        setProgress(0)
        setCurrentTime(0)
        setIsPlying(false)
    }, [indexSong])

    AudioPlayer.onended = () => {
        setProgress(0)
        setCurrentTime(0)
        setIsPlying(false)
    };

    useEffect(() => {
        if (!isPlying) {
            return () => { }
        }

        const timerId = setInterval(() => {
            setProgress(prev =>
                prev + Math.floor(1000 / trackList[indexSong].duration)
            )
        }, 1000)

        return () => {
            clearInterval(timerId)
        }

    }, [isPlying])

    useEffect(() => {

        if (!isPlying) {
            return () => { }
        }

        const intervalId = setInterval(() => {
            setCurrentTime(prev => prev + 1)
            console.log(currentTime)

        }, 1000)


        return () => {
            clearInterval(intervalId)
        }
    }, [isPlying, currentTime])


    return (
        <div className={css.audio__container}>
            <div className={css.audio} >
                <span className={css.time}>
                    {time.min}:{time.sec} / {curTime.min}:{curTime.sec}
                </span>
                <progress className={css.progressBar} max={1000} value={progress} />
                <button className={css.btn} ref={btn} onClick={toggleAudio} >
                    {isPlying ? "pause" : "play"}
                </button>
            </div>
            <PlayList indexSong={indexSong} setIndex={setIndexSong} />
        </div>
    )
}

export default Audio