import quotes from "./quotes.json";
import { useState } from 'react';
import { randomInteger } from './utils';
import css from "./Quote.module.css"
import ResetButton from "./UI/ResetButton"

const Quote: React.FC = () => {

    const quotesArray = Array.from(quotes);
    const max = quotesArray.length;
    const [randomNum, setRandomNum] = useState(randomInteger(max));
    const quote = quotesArray[randomNum - 1];

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {

        const target = e.currentTarget
        target.classList.add(`${css.resetActive}`)

        setTimeout(() => {
            target.classList.remove(`${css.resetActive}`)
        }, 500)

        let random = randomInteger(max);
        if (randomNum === random) {
            random = randomInteger(max);
        }
        setRandomNum(random);
    }

    return (
        <div className={css.quote}>
            <p className={css.text}>{quote.qoute}</p>
            <p className={css.author}>{quote.author}</p>
            <button className={css.reset} onClick={e => handleClick(e)}>
                <ResetButton />
            </button>
        </div>
    )

}

export default Quote;