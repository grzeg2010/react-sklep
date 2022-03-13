import React from 'react';
import { Link } from "react-router-dom";

function Header({ user }) {

    return (
        <div className="ui header">
            <div className="ui menu container">
                <Link to="/react-sklep">
                    <div className="item">
                        
                        <h1><i className="react icon"></i>Sklep React</h1>
                    </div>
                </Link>

                {(user.name === "") ? (
                    <div className="right item">
                        <Link to="/login">
                            <button className="blue ui button">Zaloguj się</button>
                        </Link>                  
                    </div>
                ) : (
                    <div className="right item">
                        <Link to="/account">
                            <button className="ui button">Konto</button>
                        </Link>
                        <Link to="/basket">
                            <button className="ui button">Koszyk</button>
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Header;