import { useEffect, useState } from "react";
import ProductsList from "./ProductsList";

const MainPage = () => {
    const [products, setProducts] = useState(null);

    useEffect(() => {
        fetch('http://localhost:8000/products')
            .then(res => {
                return res.json();
            })
            .then(data => {
                console.log(data);
                setProducts(data);
            })
    }, []);
    return (
            products && <ProductsList products={products}/>
    );
};

export default MainPage;