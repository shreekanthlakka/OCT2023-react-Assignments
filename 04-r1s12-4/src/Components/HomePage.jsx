import { Link } from "react-router-dom";

function HomePage() {
    return (
        <div>
            <h1>Users List </h1>
            <Link to="/users">Click here to get users dropdown data</Link>
        </div>
    );
}

export default HomePage;
