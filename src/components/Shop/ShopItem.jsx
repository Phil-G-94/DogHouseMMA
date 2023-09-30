import ShopItemForm from "./ShopItemForm";

import ShopContext from "../../store/ShopContext";
import { useContext } from "react";

const ShopItem = ({ description, price, name, id }) => {
    const shopCartCtx = useContext(ShopContext);

    const addToCartHandler = (quantity) => {
        shopCartCtx.addItem({
            quantity: quantity,
            name,
            price,
            id,
        });
    };

    return (
        <section>
            <div className="grid grid-cols-1 grid-rows-2 m-3">
                <ul className="flex flex-col place-items-center list-none bg-amber-500 text-indigo-800 rounded-md">
                    <li>{name}</li>
                    <li>{description}</li>
                    <li>£{price}</li>
                    <ShopItemForm
                        id={id}
                        onAddToCart={addToCartHandler}
                    />
                </ul>
            </div>
        </section>
    );
};

export default ShopItem;
