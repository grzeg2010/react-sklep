import React, { useState } from "react";
import { Link } from "react-router-dom";

function LoginPage({ user, Login }) {
    const [details, setDetails] = useState({name: "", password: ""});

    const submitHandler = e => {
        e.preventDefault();

        Login(details);
        console.log(user.name);
    }

    return(
        <div className="ui container grid two columns">
        <form onSubmit={submitHandler} className="ui form column">
            <label htmlFor="name">Nick:</label>
            <input type="text" name="name" id="name" onChange={e => setDetails({...details, name: e.target.value})} value={details.name} />

            <label htmlFor="password">Hasło:</label>
            <input type="password" name="password" id="password" onChange={e => setDetails({...details, password:e.target.value})} value={details.password} />

            <input type="submit" value="Zaloguj się" className="ui button" />
        </form>
        <div className="ui column">
            <h3>Nie masz konta?</h3>
            <Link to="/register">
                <button className="ui button">Zarejestruj się</button>
            </Link>
        </div>
        </div>
    );
}

export default LoginPage;