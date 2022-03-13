import React, { useState } from "react";
import { Link } from "react-router-dom";
import BasketList from "./BasketList";

function Basket({ products, user, setUser, userList, setUserList }) {
    const [price, setPrice] = useState(0);

    let creditsLeft = user.credits;

    creditsLeft = user.credits - price;

    function RenderList() {
        return (
            (user.basket.length !== 0) ? (
                products && <BasketList products={products} price={price} setPrice={setPrice} user={user} />
            ) : (
                <div className="ui container">Koszyk jest pusty</div>
            )
        );
    }

    function Buy() {
        setUser({
            ...user,
            basket: [],
            credits: creditsLeft
        });

        const updateUser = userList.map(target => {
            if (target.name === user.name) {
                return {...target, basket: [], credits: creditsLeft};
            } else return target;
        });

        setUserList(updateUser);

        setPrice(0);
    }

    const BuyButton = () => {
        console.log(user.credits);
        (user.credits >= price && price !== 0) ? (
            Buy()
        ) : (
            console.log("Nie można kupić")
        )
    }

    return (
        <div className="ui container">
            <RenderList />

            {(price !== 0 ) ? (
                <div>
                    <p><b>Razem:</b> {price}</p>
                    <p>Twoje monety: {user.credits}</p>
                    {(creditsLeft >= 0) ? (
                        <p>Twoje monety po zakupie: {creditsLeft}</p>
                    ) : (
                        <p>Za mało monet<br />
                            <Link to="/account">Dodaj monety</Link>
                        </p>
                        
                    )}
                </div>
            ) : (
                <p>Twoje monety: {user.credits}</p>
            )}

            {(price !== 0 && creditsLeft >= 0) ? (
                <button className="blue ui button marginTop" onClick={BuyButton}>Zakup</button>
            ) : (
                <button disabled className="blue ui button marginTop">Zakup</button>
            )}
        </div>
    )
};

export default Basket;