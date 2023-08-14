import { useState, useEffect, useRef } from "react"
import AudioPlayer from "./components/AudioPlayer"
import css from "./components/Audio.module.css"
import PlayList from "./components/PlayList"
import { trackList } from "./trackList"
import { getMinutes } from "./utils/utils"
import { PauseSvg } from "./components/PauseSvg"
import { PlaySvg } from "./components/PlaySvg"
import Volume from "./components/Volume"
import { getLocalStorage } from "../../utils/globalUtils"


const Audio: React.FC = () => {

    const [progress, setProgress] = useState(0);
    const [isPlying, setIsPlying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [indexSong, setIndexSong] = useState(0);
    const [volume, setVolume] = useState<number>(getLocalStorage<number>("volume") || 50)

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
        AudioPlayer.volume = volume / 100
    }, [volume])

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

        }, 1000)


        return () => {
            clearInterval(intervalId)
        }
    }, [isPlying, currentTime])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setVolume(+e.currentTarget.value)
    }

    const toggleVolume = () => {


        if (volume > 0) {
            localStorage.setItem("volume", JSON.stringify(volume))
            setVolume(0)
        }

        if (volume === 0) {
            const volumeJSON = localStorage.getItem("volume")
            if (!volumeJSON) {
                return
            }
            setVolume(JSON.parse(volumeJSON))
        }

    }


    return (
        <div className={css.audio__container}>
            <div className={css.audio} >
                <span className={css.time}>
                    {curTime.min}:{curTime.sec} / {time.min}:{time.sec}
                </span>
                <progress className={css.progressBar} max={1000} value={progress} />
                <Volume
                    onClick={toggleVolume}
                    className={css.volume__icon}
                    volume={volume}
                />
                <div className={css.volume}>
                    <input
                        className={css.volume__input}
                        type="range"
                        max={100}
                        min={0}
                        step={1}
                        value={volume}
                        onChange={e => handleChange(e)}
                    />
                </div>
                <button className={css.btn} ref={btn} onClick={toggleAudio} >
                    {isPlying ?
                        <PauseSvg fill="#fff" width="20px" height="20px" />
                        : <PlaySvg fill="#fff" width="20px" height="20px" />}
                </button>
            </div>
            <PlayList indexSong={indexSong} setIndex={setIndexSong} />
        </div>
    )
}

export default Audio


