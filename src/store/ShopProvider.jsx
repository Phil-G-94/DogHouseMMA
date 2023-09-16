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
                    quantity:
                        existingShopCartItem.quantity + action.item.quantity,
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
            return;
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
        dispatchShopCartAction({ type: "ADD_ITEM", item: item });
    };

    const shopCartContext = {
        items: shopCartState.items,
        totalAmount: shopCartState.totalAmount,
        addItem: addItemToCartHandler,
    };

    return (
        <ShopContext.Provider value={shopCartContext}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopProvider;
