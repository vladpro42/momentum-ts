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

    const handleClick = () => {
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
            <button className={css.reset} onClick={handleClick}>
                <ResetButton />
            </button>
        </div>
    )

}

export default Quote;