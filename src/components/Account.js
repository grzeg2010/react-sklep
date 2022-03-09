import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Account({ user, setUser, Logout }) {
    const [value, setValue] = useState({credits: ""});
    let navigate = useNavigate();

    useEffect(() => {
        const localDataCredits = JSON.parse(localStorage.getItem('user'));
        setValue({
            credits: localDataCredits.credits
        });
    }, []);

    const changeCredits = (e) => {
        setValue({credits: (e.target.value)});
        value.credits = parseInt(value.credits) + 1;
        setUser({
            ...user,
            credits: value.credits
        });
        
    }

   useEffect(() => {
        localStorage.setItem('user', JSON.stringify(user)); 
    }, [user]);

    const logoutHandler = e => {
        Logout();
        navigate("/");
    }

    return(
        <div className="ui container">
            <h2>Konto</h2>
            <p>Witaj {user.name}</p>
            <h3>Kredyty</h3>
            <div className="ui input">
                <input type="number" placeholder='0'  onChange={changeCredits} value={value.credits} />
            </div>

            <div className="ui divider"></div>

            <button className="red ui button" onClick={logoutHandler}>Wyloguj się</button>
        </div>
    )
}

export default Account;