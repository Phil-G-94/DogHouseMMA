import { useState } from "react";
import Cart from "../components/Shop/Cart";
import Shop from "../components/Shop/Shop";
import ShopProvider from "../store/ShopProvider";

const ShopPage = () => {
    const [cartIsShown, setCartIsShown] = useState(false);

    const showCartHandler = () => {
        setCartIsShown(true);
    };

    const hideCartHandler = () => {
        setCartIsShown(false);
    };

    return (
        <div className="flex flex-col place-items-center">
            <ShopProvider>
                {cartIsShown && <Cart onClose={hideCartHandler} />}
                <Shop onShowCart={showCartHandler} />
            </ShopProvider>
        </div>
    );
};

export default ShopPage;
