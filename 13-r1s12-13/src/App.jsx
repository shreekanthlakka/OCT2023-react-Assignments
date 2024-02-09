import { useEffect, useRef, useState } from "react";

function App() {
    const [number, setNumber] = useState();
    const [even, setEven] = useState([]);
    const timerId = useRef();

    function generateRandomNumber(max = 100, min = 1) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    useEffect(() => {
        timerId.current = setInterval(() => {
            setNumber(() => generateRandomNumber());
            if (number % 2 === 0) setEven((prev) => [...prev, number]);
        }, 1000);
        return () => clearInterval(timerId.current);
    }, [number]);
    return (
        <div>
            <h2> Random Number :{number}</h2>
            <h2>All Even Numbers Count : {even.length}</h2>
            {even.length > 0 && (
                <ul>
                    {even.map((num, i) => (
                        <li key={i}>{num}</li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default App;
