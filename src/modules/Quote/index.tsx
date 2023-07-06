import quotes from "./quotes.json";
import { useState } from 'react';
import { randomInteger } from './utils';

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
        <div>
            <p>{quote.qoute}</p>
            <p>{quote.author}</p>
            <button onClick={handleClick}>reset quote</button>
        </div>
    )

}

export default Quote;