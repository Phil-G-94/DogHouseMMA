import { useCallback, useEffect, useState } from "react";
import ShopItem from "./ShopItem";
import ShopCartButton from "./ShopCartButton";

const Shop = ({ onShowCart }) => {
    const [shopItems, setShopItems] = useState([]);

    const fetchItemsHandler = useCallback(async () => {
        try {
            const response = await fetch(
                "https://doghouse-store-default-rtdb.europe-west1.firebasedatabase.app/items.json"
            );

            if (!response.ok) {
                throw new Error("Cannot fetch shop items. Please try again.");
            }

            const data = await response.json();

            const loadedItems = [];

            for (const key in data) {
                loadedItems.push({
                    id: key,
                    name: data[key].name,
                    description: data[key].description,
                    price: data[key].price,
                });
            }

            setShopItems(loadedItems);
        } catch (error) {
            console.log(error);
        }
    }, []);

    useEffect(() => {
        fetchItemsHandler();
    }, [fetchItemsHandler]);

    return (
        <section className="flex flex-col place-items-center">
            <ShopCartButton showCart={onShowCart} />
            {shopItems.map((item) => (
                <ShopItem
                    key={item.name}
                    id={item.id}
                    description={item.description}
                    name={item.name}
                    price={item.price}
                />
            ))}
        </section>
    );
};

export default Shop;
