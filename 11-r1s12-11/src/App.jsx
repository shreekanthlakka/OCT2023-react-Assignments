import { useEffect, useState } from "react";

function App() {
    const [title, setTitle] = useState(function () {
        const storedData = localStorage.getItem("title");
        return storedData ? JSON.parse(storedData) : "";
    });
    const [body, setBody] = useState(() => {
        const storedData = localStorage.getItem("body");
        return storedData ? JSON.parse(storedData) : "";
    });

    useEffect(() => {
        localStorage.setItem("title", JSON.stringify(title));
        localStorage.setItem("body", JSON.stringify(body));
    }, [title, body]);

    function handleSubmit(e) {
        e.preventDefault();
        localStorage.setItem("title", "");
        localStorage.setItem("body", "");
        setTitle("");
        setBody("");
    }
    function handleClick() {
        location.reload();
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>Story Book</h1>
                <div>
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="body">Body</label>
                    <input
                        type="area"
                        id="body"
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                    />
                </div>

                <button type="submit">Save</button>
            </form>
            <button onClick={handleClick}> reload</button>
        </div>
    );
}

export default App;
