import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const URL = "https://jsonplaceholder.typicode.com/users";

function User() {
    const [user, setUser] = useState();
    const { id } = useParams();

    useEffect(() => {
        async function fetchData() {
            const data = await axios.get(`${URL}/${id}`);
            setUser(data.data);
        }
        fetchData();
    }, [id]);

    return (
        <>
            {user && (
                <div>
                    <h2>name : {user.name}</h2>
                    <p>Email : {user.email}</p>
                    <p>
                        City :<strong>{user.address.city}</strong>{" "}
                    </p>
                </div>
            )}
        </>
    );
}

export default User;
