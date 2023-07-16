import { playList } from "../index"
import css from "./PlayList.module.css"

type Props = {
    setIndex: React.Dispatch<React.SetStateAction<number>>
}
const PlayList: React.FC<Props> = ({ setIndex }) => {

    const handleClick = (index: number) => {
        setIndex(index)
    }

    return (
        <div className={css.track__list}>
            {
                playList.map((song, index) => {
                    return <div
                        onClick={() => handleClick(index)}
                        className={css.track__item}
                        key={song.title}
                    >
                        {song.title}
                    </div>
                })
            }
        </div>
    )
}
export default PlayList