import { Link } from "react-router-dom";

const ButtonAddToBasket = () => 
    <div>
        <i className="large icons">
            <i className="shopping basket icon"></i>
            <i className="green corner add icon"></i>
        </i>
        <p>Do koszyka</p>
    </div>;

function ProductCards({ user }) {
    return(
        <div className="ui card">
            <div className="center aligned">
                <i class="blue huge circle icon"></i>
            </div>

            <div className="center aligned">
                <h2>Produkt</h2>
            </div>

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
    )
}

export default ProductCards;