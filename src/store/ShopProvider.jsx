import { useReducer } from "react";
import ShopContext from "./ShopContext";

const defaultShopCartState = {
    items: [],
    totalAmount: 0,
};

const shopCartReducer = (state, action) => {
    switch (action.type) {
        case "ADD_ITEM": {
            const updatedTotalAmount = (state.totalAmount +=
                (action.item.price * action.item.quantity) / 2);

            const existingShopItemCartIndex = state.items.findIndex(
                (item) => item.id === action.item.id
            );

            const existingShopCartItem = state.items[existingShopItemCartIndex];

            let updatedShopItems;

            if (existingShopCartItem) {
                const updatedShopItem = {
                    ...existingShopCartItem,
                    quantity: existingShopCartItem.quantity + action.item.quantity,
                };
                updatedShopItems = [...state.items];
                updatedShopItems[existingShopItemCartIndex] = updatedShopItem;
            } else {
                updatedShopItems = state.items.concat(action.item);
            }

            return {
                ...state,
                items: updatedShopItems,
                amount: updatedTotalAmount,
            };
        }
        case "REMOVE_ITEM": {
            const existingShopCartItemIndex = state.items.findIndex(
                (item) => item.id === action.id
            );

            const existingShopCartItem = state.items[existingShopCartItemIndex];

            const updatedTotalAmount = state.totalAmount - existingShopCartItem.price;

            let updatedCartItems;

            if (existingShopCartItem.quantity === 1) {
                updatedCartItems = state.items.filter((item) => item.id !== action.id);
            } else {
                const updatedShopItem = {
                    ...existingShopCartItem,
                    quantity: existingShopCartItem.quantity - 1,
                };

                updatedCartItems = [...state.items];
                updatedCartItems[existingShopCartItemIndex] = updatedShopItem;
            }

            return {
                ...state,
                items: updatedCartItems,
                totalAmount: updatedTotalAmount,
            };
        }
        case "CLEAR": {
            return;
        }
        default: {
            return defaultShopCartState;
        }
    }
};

const ShopProvider = (props) => {
    const [shopCartState, dispatchShopCartAction] = useReducer(
        shopCartReducer,
        defaultShopCartState
    );

    const addItemToCartHandler = (item) => {
        dispatchShopCartAction({ type: "ADD_ITEM", item });
    };

    const removeItemFromCartHandler = (id) => {
        dispatchShopCartAction({ type: "REMOVE_ITEM", id });
    };

    const shopCartContext = {
        items: shopCartState.items,
        totalAmount: shopCartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
    };

    return <ShopContext.Provider value={shopCartContext}>{props.children}</ShopContext.Provider>;
};

export default ShopProvider;
