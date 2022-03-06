import React from 'react';
import { useNavigate } from 'react-router-dom';

function Account({ user, Logout }) {
    let navigate = useNavigate();

    const logoutHandler = e => {
        Logout();
        navigate("/");
    }

    return(
        <div className="ui container">
            <h2>Konto</h2>
            <p>Witaj {user.name}</p>
            <button className="red ui button" onClick={logoutHandler}>Wyloguj się</button>
        </div>
    )
}

export default Account;