import { useEffect, useState } from "react";
import ProductsList from "./ProductsList";

const MainPage = ({ user }) => {
    const [products, setProducts] = useState(null);

    useEffect(() => {
        fetch('http://localhost:8000/db')
            .then(res => {
                return res.json();
            })
            .then(data => {
                console.log(data.products);
                setProducts(data.products);
            })
    }, []);
    return (
            products && <ProductsList products={products} user={user} />
    );
};

export default MainPage;