import { useEffect, useState } from "react";
import axios from "axios";
import useConverter from "./useConverter";

/**
 * 
 *  https://api.exchangeratesapi.io/v1/latest
    ? access_key = API_KEY
    & base = USD
    & symbols = GBP,JPY,EUR
 * 
 * https://api.exchangeratesapi.io/v1/latest
    ? access_key = API_KEY
 * 
 * https://api.exchangeratesapi.io/v1/convert
    ? access_key = API_KEY
    & from = GBP
    & to = JPY
    & amount = 25
 * 
 * 
 * 

 */

const API_KEY = "b4a3324c5c6f798f6187a26de31f1e1f";
const BASE_URL = "http://api.exchangeratesapi.io/v1";

function App() {
    const [usd, setUsd] = useState(0);

    useEffect(() => {
        async function currencyConverter() {
            const res = await fetch(
                `${BASE_URL}/convert?access_key=${API_KEY}&from=USD&to=INR&amount=${usd}`
            );
            const data = await res.json();
            console.log(data);
        }
        currencyConverter();
    }, []);

    return (
        <div>
            <h1>Currency Converter</h1>
            <hr />
            <h3>USD : {usd}</h3>
            <h3>INR : </h3>
            <input
                type="range"
                min={0}
                max={100}
                value={usd}
                onChange={(e) => setUsd(Number(e.target.value))}
            />
            <p>note : 1 USD = X INR</p>
        </div>
    );
}

export default App;
