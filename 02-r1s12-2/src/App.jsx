import { useEffect, useState } from "react";
import axios from "axios";

const URI = "https://jsonplaceholder.typicode.com/users";

function UserSelect() {
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState("");

    useEffect(() => {
        async function fetchData() {
            const data = await axios.get(URI);
            setUsers(data.data);
        }
        fetchData();
    }, []);
    return (
        <div>
            <h2>User Select</h2>
            <select
                value={selectedUser}
                onChange={(e) => setSelectedUser(e.target.value)}
            >
                <option>select user</option>
                {users.map((user) => (
                    <option key={user.id} value={user.name}>
                        {user.name}
                    </option>
                ))}
            </select>
            <p>{selectedUser}</p>
        </div>
    );
}

export default UserSelect;
