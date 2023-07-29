import { useEffect } from 'react'
import css from './Background.module.css'

const clientId = "rmmolXUcMqlCWjKXnROTgWjNL-QxkslfkFjsiZ9YrQw";

const Background: React.FC = () => {
    const link = `https://api.unsplash.com/photos/random?orientation=landscape&query=nature&client_id=${clientId}`

    const handleClick = () => {
        fetch(link)
            .then(res => res.json())
            .then(data => {
                document.body.style.background = `url(${data.urls.regular}) no-repeat`
                document.body.style.backgroundSize = `cover`
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        handleClick()
    }, [])

    return <>
        <button
            onClick={handleClick}
            className={css.btn}>
            Обновить обои
        </button>
    </>
}

export default Background