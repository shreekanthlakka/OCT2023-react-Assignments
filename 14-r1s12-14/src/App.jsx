import { useEffect, useState } from "react";
import axios from "axios";
const BASE_URL = "https://jsonplaceholder.typicode.com";

function App() {
    const [users, setUsers] = useState([]);
    const [posts, setPosts] = useState([]);
    const [todos, setTodos] = useState([]);

    async function fetchData(resource) {
        try {
            const data = await axios.get(`${BASE_URL}/${resource}`);
            return data.data;
        } catch (err) {
            console.log(err.message);
        }
    }

    useEffect(() => {
        Promise.all([
            fetchData("users"),
            fetchData("posts"),
            fetchData("todos"),
        ])
            .then(
                ([usersData, postsData, todosData]) => (
                    setUsers(usersData),
                    setPosts(postsData),
                    setTodos(todosData)
                )
            )
            .catch((err) => {
                console.log(err.message);
            });
    }, []);

    return (
        <>
            {users.length > 0 && posts.length > 0 && todos.length > 0 && (
                <div>
                    <h1>Users : {users.length}</h1>
                    <h1>Posts : {posts.length}</h1>
                    <h1>Todos : {todos.length}</h1>
                </div>
            )}
        </>
    );
}

export default App;
