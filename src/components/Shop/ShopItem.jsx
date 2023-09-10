const ShopItem = ({ description, price, name }) => {
    return (
        <section>
            <div className="grid grid-cols-1 grid-rows-2 m-5">
                <ul className="flex flex-col list-none bg-amber-500 text-indigo-800 rounded-md ">
                    <li>{name}</li>
                    <li>{description}</li>
                    <li>£{price}</li>
                </ul>
            </div>
        </section>
    );
};

export default ShopItem;
