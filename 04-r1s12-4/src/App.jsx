import { BrowserRouter, Routes, Route } from "react-router-dom";
import Users from "./Components/Users";
import HomePage from "./Components/HomePage";
import User from "./Components/User";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route index path="users" element={<Users />} />
                <Route path="users/:id" element={<User />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
