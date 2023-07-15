import { useState, useEffect } from 'react'
import css from "./Weather.module.css"

const apiKey = "85f273f92356c30d3aac4d5d43f91a4e";

const Weather: React.FC = () => {

    const [weather, setWeather] = useState<any>(undefined);
    const [city, setSity] = useState(localStorage.getItem("city") || "Минск");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setSity(e.target.value)
        localStorage.setItem("city", e.target.value)
    }


    useEffect(() => {
        submitWeather()
    }, [])

    const submitWeather = () => {
        const urlApi = `
            https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ru&appid=${apiKey}&units=metric
        `
        fetch(urlApi)
            .then(data => data.json())
            .then(weather => setWeather(weather))
            .catch(err => setWeather(err))
    }

    return (
        <div className={css.weather}>
            <label>

            </label>
            <input type="text" value={city}
                onChange={e => handleChange(e)}
            />
            <button onClick={submitWeather}>Submit</button>

            {
                !weather?.message ? (<div className={css.descr}>
                    <h3 className={css.title}>
                        В {weather?.name} сейчас {weather?.weather[0].description}
                    </h3>
                    <p className={css.weathr__descr}>Влажность {weather?.main.humidity} %</p>
                    <p className={css.weathr__descr}>Температура {weather?.main.temp} </p>
                    <p className={css.weathr__descr}>Ветер {weather?.wind.speed} м/с</p>
                </div>) : (
                    <h3>{weather.message}</h3>
                )
            }
        </div>
    )


}

export default Weather