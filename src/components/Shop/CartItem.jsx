const CartItem = ({ price, name, quantity, onAdd, onRemove }) => {
    return (
        <>
            <li className="flex flex-col place-items-start text-black">
                <span className="text-xl">{name}</span>
                <span className="text-sm">Price: {price}</span>
                <span className="text-sm">Quantity: {quantity}</span>

                <div className="flex flex-row gap-3">
                    <button
                        className="border-black border-2 text-black px-1 rounded-3xl"
                        onClick={onRemove}
                    >
                        -
                    </button>
                    <button
                        className="border-black border-2 text-black px-1 rounded-3xl"
                        onClick={onAdd}
                    >
                        +
                    </button>
                </div>
            </li>
            <br />
        </>
    );
};

export default CartItem;
