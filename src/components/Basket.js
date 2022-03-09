import BasketList from "./BasketList";

function Basket({ products, user }) {
    console.log("W koszyku: " + user.basket.count);
    return (
        (user.basket.count !== 0) ? (
        products && <BasketList products={products} user={user}/>
        ) : (
            <div className="ui container">Koszyk jest pusty</div>
        )
    );
};

export default Basket;