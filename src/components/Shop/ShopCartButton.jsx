import ShopContext from "../../store/ShopContext";

import { useContext } from "react";

const ShopCartButton = ({ showCart }) => {
    const shopCartCtx = useContext(ShopContext);

    const numberOfShopCartItems = shopCartCtx.items.reduce(
        (currentValue, item) => {
            return currentValue + item.quantity;
        },
        0
    );

    return (
        <button
            className="flex flex-row place-items-center gap-2 bg-amber-500 rounded-md p-2 text-black"
            onClick={showCart}
        >
            <span>Cart: </span>
            <span>{/* cart icon goes here */}</span>
            <span>{numberOfShopCartItems}</span>
        </button>
    );
};

export default ShopCartButton;
