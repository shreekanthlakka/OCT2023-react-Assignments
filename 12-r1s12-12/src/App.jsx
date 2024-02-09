import { useEffect, useState } from "react";

function App() {
    const [color, setColor] = useState("");

    function changeColor(color) {
        document.querySelector("body").style.background = color;
    }

    useEffect(() => {
        changeColor(color);
    }, [color]);
    return (
        <div>
            <select value={color} onChange={(e) => setColor(e.target.value)}>
                <option value="">select color</option>
                <option value="red">Red</option>
                <option value="green">Green</option>
                <option value="yellow">Yellow</option>
                <option value="black">Black</option>
                <option value="pink">Pink</option>
                <option value="orange">Orange</option>
            </select>
        </div>
    );
}

export default App;
