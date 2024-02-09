import axios from "axios";
import Error from "./components/Error";
import User from "./components/User";
import { useState } from "react";
const URL = "https://jsonplaceholder.typicode.com";

function App() {
    const [user, setUser] = useState({});
    const [error, setError] = useState();

    const isEmptyUserData = Object.keys(user).length === 0;

    async function fetchData(id) {
        try {
            setError();
            const data = await axios.get(`${URL}/users/${id}`);
            if (data.request.status != 200) throw new Error("Invalid user ID");
            setUser(data.data);
        } catch (error) {
            setError(error.response.status);
            setUser({});
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        const id = +e.target[0].value;
        fetchData(id);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="number"
                    // value={id}
                    // onChange={(e) => setId(Number(e.target.value))}
                />
                <button type="submit"> Search</button>
            </form>
            {error && <Error message={error} />}
            {!isEmptyUserData && <User user={user} />}
        </>
    );
}

export default App;
