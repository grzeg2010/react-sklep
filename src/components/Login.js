import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function LoginPage({ user, userList, setUser }) {
    const [details, setDetails] = useState({name: "", password: ""});
    let navigate = useNavigate();

    const Login = details => {
        console.log(details);

        const selectedUser = (userList.find(user => user.name === details.name));

        if (details.name === selectedUser.name && details.password === selectedUser.password) {
            console.log("Zalogowano");
            setUser({
                name: selectedUser.name,
                id: selectedUser.id,
                credits: selectedUser.credits,
                basket: []
            });
        } else {
            console.log("Błąd");
        }
    }

    const submitHandler = e => {
        e.preventDefault();

        Login(details);
    }

    /* Przenosi użytkownika na stronę główną po zalogowaniu */
    useEffect(() => {
        if (user.name !== "") { 
            console.log(user);
            navigate("/react-sklep");
        }
    }, [user]);

    return(
        <div className="ui container grid two columns">
        <form onSubmit={submitHandler} className="ui form column">
            <label htmlFor="name">Nick:</label>
            <input type="text" name="name" id="name" onChange={e => setDetails({...details, name: e.target.value})} value={details.name} />

            <label htmlFor="password">Hasło:</label>
            {/* <input type="password" name="password" id="password" onChange={e => setDetails({...details, password:e.target.value})} value={details.password} /> */}
            <select name="password" value={e => e.target.value} onChange={e => setDetails({...details, password:e.target.value})}>
                    <option value="1">bajka wioska cis</option>
                    <option value="2">olej nurek gepard</option>   
                    <option value="3">staw zjazd autko</option>   
            </select>

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