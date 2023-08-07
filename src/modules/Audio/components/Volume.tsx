import { BsFillVolumeMuteFill } from "react-icons/bs"
import { BsFillVolumeDownFill } from "react-icons/bs"
import { BsFillVolumeUpFill } from "react-icons/bs"
import { BsFillVolumeOffFill } from "react-icons/bs"


type PropsVolume = {
    volume: number
    width: number | string
    height: number | string
    onClick: () => void
    className?: string | undefined
}

const Volume = ({ width, height, volume, className, onClick }: PropsVolume) => {

    if (volume === 0) {
        return <BsFillVolumeMuteFill
            onClick={onClick}
            className={className}
            width={width}
            height={height}
        />
    }

    if (volume <= 20 && volume != 0) {
        return <BsFillVolumeOffFill
            onClick={onClick}
            className={className}
            width={width}
            height={height}
        />
    }

    if (volume <= 50 && volume > 20) {
        return <BsFillVolumeDownFill
            onClick={onClick}
            className={className}
            width={width}
            height={height}
        />
    }

    if (volume <= 100 && volume > 50) {
        return <BsFillVolumeUpFill
            onClick={onClick}
            className={className}
            width={"40px"}
            height={"40px"}
        />
    }

    return null
}

export default Volume





