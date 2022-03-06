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
    return(
        <div className="ui four stackable container cards">
            {products.map((product) => (
                <div className="ui card">
                    <div className="center aligned">
                        <i class={`${product.icon} huge icon`}></i>
                    </div>

                    <div className="center aligned">
                        <h2>{product.name}</h2>
                    </div>

                    {/* Jeśli użytkownik nie jest zalogowany, 
                    przycisk dodawania do koszyka przenosi 
                    do ekranu logowania */}
                    {(user === "") ? (
                        <Link to="/login" className="ui bottom attached button">
                            <ButtonAddToBasket />
                        </Link>
                    ) : (
                        <button className="ui bottom attached button">
                            <ButtonAddToBasket />
                        </button>
                    )}
                </div>
            ))}
        </div>
    )
}

export default ProductsList;