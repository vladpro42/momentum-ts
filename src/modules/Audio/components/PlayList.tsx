import { trackList } from "../trackList"
import css from "./PlayList.module.css"

type Props = {
    setIndex: React.Dispatch<React.SetStateAction<number>>;
    indexSong: number
}
const PlayList: React.FC<Props> = ({ setIndex, indexSong }) => {

    const handleClick = (index: number) => {
        setIndex(index)
    }

    return (
        <ul className={css.track__list}>
            {
                trackList.map((song, index) => {
                    return <li
                        onClick={() => handleClick(index)}
                        className={css.track__item}
                        style={{ color: index === indexSong ? "red" : "" }}
                        key={song.title}
                    >
                        {song.title}
                    </li>
                })
            }
        </ul>
    )
}
export default PlayList