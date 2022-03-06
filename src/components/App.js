import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";

import Header from "./Header";
import MainPage from "./MainPage";
import LoginPage from "./Login";
import Account from "./Account";
import Register from "./Register";
import Basket from "./Basket";

function App() {
    const adminUser = {
        name: "admin",
        password: "admin123",
    }

    const [user, setUser] = useState(() => {
        const localData = localStorage.getItem('user');
        return localData ? JSON.parse(localData) : {name: ""};
    });
    const [error, setError] = useState("");

    const Login = details => {
        console.log(details);

        if (details.name === adminUser.name && details.password === adminUser.password) {
            console.log("Zalogowano");
            setUser({
                name: details.name,
            })
        } else {
            console.log("Błąd");
        }
    }

    const Logout = () => {
        console.log("Logout");
        setUser({name: ""});
    }

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(user));
    }, [user]);

    return (
        <Router>
            <Header user={user} />
            <Routes>
                {/* Strona główna */}
                <Route path="/" element={<MainPage />} />

                {/* Strona logowania */}
                    <Route path="/login" element={<LoginPage Login={Login} error={error} user={user} />} />

                {/* Rejestracja */}
                <Route path="/register" element={<Register />} />

                {/* Panel użytkownika */}
                <Route path="/account" element={<Account Logout={Logout} user={user} />} />

                {/* Koszyk */}
                <Route path="/basket" element={<Basket user={user} />} />
            </Routes>
        </Router>
    );
}

export default App;
