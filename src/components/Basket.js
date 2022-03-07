import BasketList from "./BasketList";

function Basket({ products, user }) {
    return (
        products && <BasketList products={products} user={user}/>
    );
};

export default Basket;