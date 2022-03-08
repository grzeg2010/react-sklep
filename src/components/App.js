import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";

import Header from "./Header";
import MainPage from "./MainPage";
import LoginPage from "./Login";
import Account from "./Account";
import Register from "./Register";
import Basket from "./Basket";
import Footer from "./Footer";

function App() {
    const [userList, setUserList] = useState(null);

    useEffect(() => {
        fetch('http://localhost:8000/db')
            .then(res => {
                return res.json();
            })
            .then(data => {
                setUserList(data.users);
            })
    }, []);

    const [user, setUser] = useState(() => {
        const localData = localStorage.getItem('user');
        return localData ? JSON.parse(localData) : {name: ""};
    });
    const [error, setError] = useState("");

    const Logout = () => {
        console.log("Logout");
        setUser({name: ""});
    }

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(user));
    }, [user]);

    const [products, setProducts] = useState(null);

    useEffect(() => {
        fetch('http://localhost:8000/db')
            .then(res => {
                return res.json();
            })
            .then(data => {
                console.log(data.products);
                setProducts(data.products);
            })
    }, []);

    return (
        <Router>
            <Header user={user} />
            <Routes>
                {/* Strona główna */}
                <Route path="/" element={<MainPage products={products} user={user}/>} />

                {/* Strona logowania */}
                    <Route 
                        path="/login"
                        element={
                            <LoginPage 
                                error={error} 
                                user={user} 
                                setUser={setUser} 
                                userList={userList} 
                            />
                        }
                    />

                {/* Rejestracja */}
                <Route path="/register" element={<Register />} />

                {/* Panel użytkownika */}
                <Route path="/account" element={<Account Logout={Logout} user={user} />} />

                {/* Koszyk */}
                <Route path="/basket" element={<Basket products={products} user={user} />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
