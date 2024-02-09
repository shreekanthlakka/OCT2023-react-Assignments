import { useEffect } from "react";

/**
 * 
 * 
 * https://api.exchangeratesapi.io/v1/latest
    ? access_key = API_KEY
    & base = USD
    & symbols = GBP,JPY,EUR
 * 
 * https://api.exchangeratesapi.io/v1/latest
    ? access_key = API_KEY
 */

const BASE_URL = "https://api.exchangeratesapi.io/v1";
const API_KEY = "b4a3324c5c6f798f6187a26de31f1e1f";

export let data;
function useConverter() {
    useEffect(() => {
        async function currencyConverter() {
            const res = await fetch(
                `${BASE_URL}/latest?access_key=${API_KEY}&base=USD&symbols=GBP`
            );
            data = await res.json();
            console.log(data);
        }
        currencyConverter();
    }, []);
}

export default useConverter;
