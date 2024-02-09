/*eslint-disable react/prop-types*/

function Todos({ todos, isCompleted, setIsCompleted }) {
    return (
        <>
            <h2>Listing Todos</h2>

            <input
                id="completed"
                type="checkbox"
                value={isCompleted}
                onChange={() => setIsCompleted((prev) => !prev)}
            />
            <label htmlFor="completed">Show Completed Tasks Only</label>

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
