import { BsFillVolumeMuteFill } from "react-icons/bs"
import { BsFillVolumeDownFill } from "react-icons/bs"
import { BsFillVolumeUpFill } from "react-icons/bs"
import { BsFillVolumeOffFill } from "react-icons/bs"


type PropsVolume = {
    volume: number
    onClick: () => void
    className?: string | undefined
}

const Volume = ({ volume, className, onClick }: PropsVolume) => {


    if (volume <= 20 && volume != 0) {
        return <BsFillVolumeOffFill
            onClick={onClick}
            className={className}
        />
    }

    if (volume <= 50 && volume > 20) {
        return <BsFillVolumeDownFill
            onClick={onClick}
            className={className}
        />
    }

    if (volume <= 100 && volume > 50) {
        return <BsFillVolumeUpFill
            onClick={onClick}
            className={className}
        />
    }

    return <BsFillVolumeMuteFill
        onClick={onClick}
        className={className}
    />
}

export default Volume





