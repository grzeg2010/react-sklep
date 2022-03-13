import { useEffect, useState } from "react";
import ProductsList from "./ProductsList";

const MainPage = ({ products, user, userList, setUserList }) => {
    return (
            products && <ProductsList products={products} user={user} userList={userList} setUserList={setUserList} />
    );
};

export default MainPage;