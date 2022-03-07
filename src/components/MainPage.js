import { useEffect, useState } from "react";
import ProductsList from "./ProductsList";

const MainPage = ({ products, user }) => {
    return (
            products && <ProductsList products={products} user={user} />
    );
};

export default MainPage;