import { useEffect, useState } from "react";
import axios from "axios";

const URI = "https://jsonplaceholder.typicode.com/users";

function UserSelect() {
    const [users, setUsers] = useState([]);
    const [selectedId, setSelectedId] = useState();

    const selectedUser = users.filter((user) => +user.id === +selectedId);
    console.log(selectedUser);

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
            {users.length > 0 && (
                <select
                    value={selectedId}
                    onChange={(e) => setSelectedId(e.target.value)}
                >
                    {users.map((user) => (
                        <option key={user.id} value={user.id}>
                            {user.name}
                        </option>
                    ))}
                </select>
            )}

            {selectedId && (
                <div>
                    <p>{`name  ${selectedUser[0]?.name}`}</p>
                    <p>{`email  ${selectedUser[0]?.email}`}</p>
                    <p>{`city  ${selectedUser[0]?.address.city}`}</p>
                </div>
            )}
        </div>
    );
}

export default UserSelect;
