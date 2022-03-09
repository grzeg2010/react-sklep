import React, { useState } from "react";
import BasketList from "./BasketList";

function Basket({ products, user, setUser }) {
    const [price, setPrice] = useState(0);

    let creditsLeft = user.credits;

    creditsLeft = user.credits - price;

    console.log("W koszyku: " + user.basket.count);

    function RenderList() {
        return (
            (user.basket.count !== 0 || user.basket.count !== undefined) ? (
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
                        <p>Za mało monet</p>
                    )}
                </div>
            ) : (
                <p>Twoje monety: {user.credits}</p>
            )}

            {(price !== 0 && creditsLeft >= 0) ? (
                <button className="blue ui button" onClick={BuyButton}>Zakup</button>
            ) : (
                <button disabled className="blue ui button">Zakup</button>
            )}
        </div>
    )
};

export default Basket;