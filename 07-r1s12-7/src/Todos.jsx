/*eslint-disable react/prop-types*/

function Todos({ todos }) {
    return (
        <>
            <h2>Listing Todos</h2>
            <ul>
                {todos.map((todo) => (
                    <li
                        key={todo.id}
                        className={` ${todo.completed ? "completed" : ""}`}
                    >
                        {todo.title}
                    </li>
                ))}
            </ul>
        </>
    );
}

export default Todos;
