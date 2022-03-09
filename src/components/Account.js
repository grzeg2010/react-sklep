import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Account({ user, setUser }) {
    const [value, setValue] = useState({credits: ""});
    let navigate = useNavigate();

    useEffect(() => {
        const localDataCredits = JSON.parse(localStorage.getItem('user'));
        setValue({
            credits: localDataCredits.credits
        });
    }, []);

    const changeCredits = (e) => {
        e.preventDefault();

        setValue({credits: (e.target.value)});
        setUser({
            ...user,
            credits: value.credits
        });
        
    }

   useEffect(() => {
        localStorage.setItem('user', JSON.stringify(user)); 
    }, [user]);

    const Logout = () => {
        console.log("Logout");
        setUser({name: ""});
    }

    const logoutHandler = e => {
        Logout();
        navigate("/");
    }

    return(
        <div className="ui container">
            <h2>Konto</h2>
            <p>Witaj {user.name}</p>
            <h3>Monety</h3>
            <form className="ui input" onSubmit={changeCredits}>
                <input type="number" placeholder='0' onChange={e => (setValue({credits: (e.target.value)}))} value={value.credits} />
                <button className="ui button">Zapisz ilość</button>
            </form>

            <div className="ui divider"></div>

            <button className="red ui button" onClick={logoutHandler}>Wyloguj się</button>
        </div>
    )
}

export default Account;