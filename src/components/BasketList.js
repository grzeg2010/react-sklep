import React, { useState } from "react";

const BasketList = ({ products, user }) => {
    const basket = user.basket;

    let currentProduct = useState(null);

    function currentProductHandler(basketElement) {
        currentProduct = (products.find(product => product.id == basketElement));
        return(
            <div className="item">
                <i className={`huge ${currentProduct.icon} icon left item`}></i>
                <div className="content">
                    <h2 className="header">{currentProduct.name}</h2>
                    <p className="meta">{currentProduct.price}</p>
                </div>
            </div>
        )
    }

    return(
            <div className="ui container items">
            {basket.map((basketElement) => (     
                currentProductHandler(basketElement)            
            ))}
            </div>
    )
}

export default BasketList;