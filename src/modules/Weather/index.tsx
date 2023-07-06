import { useState, useEffect } from 'react'

const Weather: React.FC = () => {

    const [weather, setWeather] = useState("");
    const [city, setSity] = useState("Минск");

    const apiKey = "85f273f92356c30d3aac4d5d43f91a4e";

    const urlApi = `
        https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ru&appid=${apiKey}&units=metric
    `
    console.log()
    useEffect(() => {
        fetch(urlApi)
            .then(data => data.json())
            .then(weather => setWeather(weather))
    }, [city])

    console.log(weather)

    return (
        <div>

        </div>
    )

}

export default Weather