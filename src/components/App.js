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
    const [userList, setUserList] = useState(() => {
        const localData = localStorage.getItem('userList');
        return localData ? JSON.parse(localData) : [];
    });
    const [products, setProducts] = useState([
        {
            "name": "Gra",
            "price": "15",
            "icon": "gamepad",
            "id": 11
        },
        {
            "name": "Słuchawki",
            "price": "9",
            "icon": "headphones",
            "id": 12
        },
        {
            "name": "Telefon",
            "price": "20",
            "icon": "phone",
            "id": 13
        },
        {
            "name": "Ołówek",
            "price": "5",
            "icon": "pencil",
            "id": 14
        }
    ]);

    const [user, setUser] = useState(() => {
        const localData = localStorage.getItem('user');
        return localData ? JSON.parse(localData) : {name: ""};
    });
    
    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(user));
    }, [user]);

    useEffect(() => {
        localStorage.setItem('userList', JSON.stringify(userList));
    }, [userList]);

    return (
        <Router>
            <Header user={user} />
            <Routes>
                {/* Strona główna */}
                <Route 
                    path="/react-sklep" 
                    element={
                        <MainPage products={products} user={user} userList={userList} setUserList={setUserList}/>
                    } 
                />

                {/* Strona logowania */}
                <Route 
                    path="/login"
                    element={
                        <LoginPage user={user} setUser={setUser} userList={userList} />
                    }
                />

                {/* Rejestracja */}
                <Route 
                    path="/register" 
                    element={
                        <Register user={user}  setUserList={setUserList}  userList={userList} />
                    } 
                />

                {/* Panel użytkownika */}
                <Route 
                    path="/account" 
                    element={
                        <Account user={user} setUser={setUser} userList={userList} setUserList={setUserList} />
                    }
                />

                {/* Koszyk */}
                <Route
                    path="/basket"
                    element={
                        <Basket products={products} user={user} setUser={setUser} userList={userList} setUserList={setUserList} />
                    }
                />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
