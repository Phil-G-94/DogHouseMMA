/*eslint-disable */
import React from "react";

const ShopContext = React.createContext({
    items: [],
    totalAmount: 0,
    addItem: (item) => {},
    removeItem: (id) => {},
    clearCart: () => {},
});

export default ShopContext;
