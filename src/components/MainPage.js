import ProductCards from "./ProductCards";

const MainPage = () => {
    return (
        <div className="ui four stackable container cards">
            <ProductCards />
            <ProductCards />
            <ProductCards />
            <ProductCards />
        </div>
    );
};

export default MainPage;