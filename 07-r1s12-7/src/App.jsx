import { useEffect, useState } from "react";
import axios from "axios";
import Todos from "./Todos";

const BASEURL = "https://jsonplaceholder.typicode.com";

function App() {
    const [users, setUsers] = useState([]);
    const [selectedId, setSelectedId] = useState(0);
    const [todos, setTodos] = useState([]);

    const selectedUser = users.filter((user) => user.id === selectedId);
    // console.log(selectedUser);
    useEffect(() => {
        async function fetchData() {
            const res = await axios.get(`${BASEURL}/users`);
            // console.log(res.data);
            setUsers(res.data);
        }
        fetchData();
    }, []);

    useEffect(() => {
        async function fetchDataById() {
            const res = await axios.get(
                `${BASEURL}/todos?userId=${selectedId}`
            );
            setTodos(res.data);
            // console.log(res.data);
        }
        fetchDataById();
    }, [selectedId]);

    return (
        <div>
            <>
                {!selectedId && <h2>Select a User from dropdown</h2>}
                {users.length > 0 ? (
                    <select
                        value={selectedId}
                        onChange={(e) => setSelectedId(Number(e.target.value))}
                    >
                        <option value={0}>Users</option>
                        {users.map((user) => (
                            <option key={user.id} value={Number(user.id)}>
                                {user.name}
                            </option>
                        ))}
                    </select>
                ) : null}
                {selectedId > 0 && (
                    <p>Selected User : {selectedUser[0].name}</p>
                )}
            </>
            {selectedId > 0 && <Todos todos={todos} />}
        </div>
    );
}

export default App;
