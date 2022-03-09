import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const ButtonAddToBasket = () => 
    <div>
        <i className="large icons">
            <i className="shopping basket icon"></i>
            <i className="green corner add icon"></i>
        </i>
        <p>Do koszyka</p>
    </div>;

const ProductsList = ({ user, products }) => {
    const handleBasket = (e) => {
        e.preventDefault();

        const target = e.currentTarget.parentElement.id;
        const basketCount = user.basket.length;

        user.basket[basketCount] = target;

        localStorage.setItem('user', JSON.stringify(user));
    }

    return(
        <div className="ui four stackable container cards">
            {products.map((product) => (
                <div className="ui card" id={product.id} key={product.id}>
                    <div className="center aligned">
                        <i className={`${product.icon} huge icon`}></i>
                    </div>

                    <div className="center aligned">
                        <h2 className="ui header">{product.name}</h2>
                    </div>

                    {/* Jeśli użytkownik nie jest zalogowany, 
                    przycisk dodawania do koszyka przenosi 
                    do ekranu logowania */}
                    {(user.name === "") ? (
                        <Link to="/login" className="ui bottom attached button" title="Zaloguj się, aby móc dodać produkt do koszyka">
                            <ButtonAddToBasket />
                        </Link>
                    ) : (
                        <button className="ui bottom attached button" onClick={handleBasket}>
                            <ButtonAddToBasket />
                        </button>
                    )}
                </div>
            ))}
        </div>
    )
}

export default ProductsList;