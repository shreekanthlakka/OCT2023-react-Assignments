import { useEffect, useState } from "react";
import axios from "axios";
import UsersList from "./components/UsersList";
import Loading from "./components/Loading";

const URI = "https://jsonplaceholder.typicode.com/users";

function App() {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        async function fetchData() {
            try {
                setIsLoading(true);
                const res = await axios.get(URI);
                // console.log(res);
                setUsers(res.data);
            } catch (error) {
                console.log("Error ", error);
            } finally {
                setIsLoading(false);
            }
        }
        fetchData();
    }, []);
    return (
        <div>
            <h1>Listing Users</h1>
            {isLoading && <Loading />}
            {users && <UsersList users={users} />}
        </div>
    );
}

export default App;
