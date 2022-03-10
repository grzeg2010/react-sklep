import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Register({ user, userList, setUserList }) {
    const [details, setDetails] = useState({name: "", password: ""});
    let navigate = useNavigate();

    console.log(userList.length);

    function Register(details) {
        console.log(details);

        console.log(userList.find(user => user.name === details.name));

        if (details.name !== userList.find(user => user.name === details.name)) {
            setUserList([
                ...userList,
                {
                    name: details.name,
                    password: details.password,
                    id: userList.count,
                    credits: 0,
                    basket: []
                }
            ]);
        } else {
            console.log("Ta nazwa użytkownika jest już zajęta");
        }
    }

    const submitHandler = e => {
        e.preventDefault();

        Register(details);
    }

    /* Przenosi użytkownika na stronę główną po zalogowaniu */
    useEffect(() => {
        if (user.name !== "") { 
            console.log(user);
            navigate("/");
        }
    }, [user]);

    return (
        <div className="ui four main container">
            <h1>Utwórz nowe konto</h1>

            <form onSubmit={submitHandler} className="ui form column">
                <label htmlFor="name">Nick:</label>
                <input type="text" name="name" id="name" onChange={e => setDetails({ ...details, name: e.target.value })} value={details.name} />
                
                <label htmlFor="password">Hasło:</label>
                <select name="password" value={e => e.target.value} onChange={e => setDetails({...details, password:e.target.value})}>
                        <option value="1">bajka wioska cis</option>
                        <option value="2">olej nurek gepard</option>   
                        <option value="3">staw zjazd autko</option>   
                </select>

                <input type="submit" value="Zarejestruj się" className="blue ui button" />
            </form>
        </div>
    );
}

export default Register;