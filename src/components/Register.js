import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Register({ user, userList, setUserList }) {
    const [details, setDetails] = useState({name: "", password: ""});
    let navigate = useNavigate();

    function Register(details) {
        console.log(details);

        let selectedUser = (userList.find(user => user.name === details.name));

        if (typeof selectedUser == "undefined") {
            setUserList([
                ...userList,
                {
                    name: details.name,
                    password: details.password,
                    id: parseInt(userList.count) + 21,
                    credits: 0,
                    basket: []
                }
            ]);

            navigate("/login");
        } else {
            console.log("Ta nazwa użytkownika jest już zajęta");
        }
    }

    const submitHandler = e => {
        e.preventDefault();

        Register(details);
    }

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

                <input type="submit" value="Zarejestruj się" className="blue ui button marginTop" />
            </form>
        </div>
    );
}

export default Register;