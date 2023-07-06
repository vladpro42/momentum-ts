import css from './Watch.module.css'
import { useState, useEffect } from 'react'
import { sayHi } from './utils'

const Watch: React.FC = () => {

    const [time, setTime] = useState(new Date())
    const [name, setName] = useState(localStorage.getItem("name") || "")

    useEffect(() => {

        const idInterval = setInterval(() => {
            setTime(new Date())
        }, 1000)

        return () => {
            clearInterval(idInterval)
        }
    }, [])

    const day = time.toDateString();
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();

    const [timeDay, setTimeDay] = useState(sayHi(hours))
    useEffect(() => {
        setTimeDay(sayHi(hours))
    }, [hours])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        localStorage.setItem("name", e.target.value)
        setName(localStorage.getItem("name") || "")
    }

    return <div className={css.clock}>

        <h2 >{day}</h2>
        <h1 >{hours}:{minutes}:{seconds}</h1>
        <div style={{ display: 'flex' }}>
            <h2 >{timeDay}, </h2>
            <label className={css.label}>
                <input
                    className={css.input}
                    type="text"
                    placeholder='Enter Name'
                    onChange={(e) => handleChange(e)}
                    value={name}
                />
            </label>
        </div>
    </div>
}

export default Watch