import { useCallback, useEffect, useState } from "react";
import ShopItem from "./ShopItem";
import ShopCartButton from "./ShopCartButton";

const Shop = ({ onShowCart }) => {
    const [shopItems, setShopItems] = useState([]);

    const fetchItemsHandler = useCallback(async () => {
        try {
            const response = await fetch(
                "https://doghouseshop-44293-default-rtdb.europe-west1.firebasedatabase.app/items.json"
            );

            if (!response.ok) {
                throw new Error("Cannot fetch shop items. Please try again.");
            }

            const data = await response.json();

            console.log(data);

            const loadedItems = [];

            for (const key in data) {
                loadedItems.push({
                    id: key,
                    name: data[key].name,
                    description: data[key].description,
                    price: data[key].price,
                });
            }

            console.log(loadedItems);

            setShopItems(loadedItems);
        } catch (error) {
            console.log(error);
        }
    }, []);

    useEffect(() => {
        fetchItemsHandler();
    }, [fetchItemsHandler]);

    return (
        <section className="flex flex-col place-items-center m-2">
            <div className="mt-10">
                <ShopCartButton showCart={onShowCart} />
            </div>
            <div>
                {shopItems.map((item) => (
                    <ShopItem
                        key={item.name}
                        id={item.id}
                        description={item.description}
                        name={item.name}
                        price={item.price}
                    />
                ))}
            </div>
        </section>
    );
};

export default Shop;
