import { useEffect, useState } from "react";
import axios from "axios";

const URL = "https://jsonplaceholder.typicode.com";

function App() {
    const [users, setUsers] = useState([]);
    const [email, setEmail] = useState("");
    const [selectedUser, setSelectedUser] = useState({});
    const [error, setError] = useState("");

    const isInputed = email.length > 0;
    const isSelected = users.some((user) => user.email === email);

    useEffect(() => {
        async function fetchUsers() {
            try {
                const data = await axios.get(`${URL}/users`);
                if (data.request.status != 200)
                    throw new Error("Failed to fetch");
                setUsers(data.data);
            } catch (error) {
                console.log(error.responce.status);
            }
        }
        fetchUsers();
    }, []);

    useEffect(() => {
        setError("");
        setSelectedUser({});
        const user = users.find((user) => user.email === email);
        if (!user) {
            setError("no recourd found");
        }
        setSelectedUser(user);
    }, [email, users]);

    function handleSubmit(e) {
        e.preventDefault();
        setEmail(e.target[0].value);
    }
    return (
        <div>
            {users.length > 0 && (
                <form onSubmit={handleSubmit}>
                    <input type="email" />
                    <button type="submit">Search by email</button>
                </form>
            )}
            {isInputed && error && <p>{error}</p>}
            {isSelected && (
                <div>
                    <p>User name :{selectedUser?.name}</p>
                    <p>Email :{selectedUser?.email}</p>
                    <p>phone name :{selectedUser?.phone}</p>
                    <p>City :{selectedUser?.address.city}</p>
                    <a href={selectedUser?.website}>Dummy Website</a>
                </div>
            )}
        </div>
    );
}

export default App;
