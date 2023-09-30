import { useContext } from "react";
import ShopContext from "../../store/ShopContext";
import CartModal from "./CartModal";
import CartItem from "./CartItem";

const Cart = ({ onClose }) => {
    const shopCartCtx = useContext(ShopContext);

    const totalAmount = `$${shopCartCtx.totalAmount.toFixed(2)}`;

    const shopCartItemRemoveHandler = (id) => {
        shopCartCtx.removeItem(id);
    };

    const shopCartItemAddHandler = (item) => {
        shopCartCtx.addItem({ ...item, quantity: 1 });
    };

    const shopCartItems = (
        <div>
            <h2 className="text-black flex flex-row place-content-center">Your Cart</h2>
            <ul>
                {shopCartCtx.items.map((item) => (
                    <CartItem
                        key={item.id}
                        name={item.name}
                        price={item.price}
                        quantity={item.quantity}
                        onAdd={shopCartItemAddHandler.bind(null, item)}
                        onRemove={shopCartItemRemoveHandler.bind(null, item.id)}
                    />
                ))}
            </ul>
        </div>
    );

    const shopCartModalContent = (
        <>
            {shopCartItems}
            <div className="text-black">
                <span>Total Amount: </span>
                <span>{totalAmount}</span>
                <div>
                    <button onClick={onClose}>Close</button>
                </div>
            </div>
        </>
    );

    return <CartModal onClose={onClose}>{shopCartModalContent}</CartModal>;
};

export default Cart;
