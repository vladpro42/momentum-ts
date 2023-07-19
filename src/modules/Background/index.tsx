import { useEffect, useState } from 'react'
import css from './Background.module.css'

const clientId = "rmmolXUcMqlCWjKXnROTgWjNL-QxkslfkFjsiZ9YrQw";

const Background: React.FC = () => {
    const [refresh, setRefresh] = useState(1);
    //const [isError, setIsError] = useState(false);

    const link = `https://api.unsplash.com/photos/random?orientation=landscape&query=nature&client_id=${clientId}`

    useEffect(() => {
        fetch(link)
            .then(res => res.json())
            .then(data => {
                document.body.style.background = `url(${data.urls.regular}) no-repeat`
                document.body.style.backgroundSize = `cover`
            })
            .catch(err => console.log(err))
        document.body.style.background = `gray`
    }, [refresh])

    return <>
        <button onClick={() => setRefresh(prev => prev + 1)} className={css.btn}>Обновить обои</button>
    </>
}

export default Background