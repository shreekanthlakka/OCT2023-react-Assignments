import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const URI = "https://jsonplaceholder.typicode.com/users";

function UserSelect() {
    const [users, setUsers] = useState([]);
    const [selectedId, setSelectedId] = useState(0);
    const navigate = useNavigate();

    // console.log(selectedId);
    // const selectedUser = users.filter((user) => +user.id === +selectedId);
    // console.log(selectedUser);

    useEffect(() => {
        async function fetchData() {
            const data = await axios.get(URI);
            setUsers(data.data);
        }
        fetchData();
    }, []);

    function handleClick() {
        navigate(`/users/${selectedId}`);
    }

    return (
        <div>
            <h2>User Select</h2>
            {users.length > 0 && (
                <select
                    value={selectedId}
                    onChange={(e) => setSelectedId(+e.target.value)}
                >
                    {users.map((user) => (
                        <option key={user.id} value={user.id}>
                            {user.name}
                        </option>
                    ))}
                </select>
            )}

            {selectedId > 0 && (
                <button onClick={handleClick}>
                    Get Details of Selected User
                </button>
            )}
        </div>
    );
}

export default UserSelect;
