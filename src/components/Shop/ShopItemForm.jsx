import { useState, useRef } from "react";
import QuantityInput from "./QuantityInput";
import { nanoid } from "nanoid";

const ShopItemForm = (props) => {
    const [quantityIsValid, setQuantityIsValid] = useState(true);

    const quantityInputRef = useRef();

    const submitHandler = (event) => {
        event.preventDefault();

        const selectedQuantity = quantityInputRef.current.value;

        // returns a string so transforming to number

        const selectedQuantityToNumber = +selectedQuantity;

        if (
            selectedQuantity.trim().length === 0 ||
            selectedQuantityToNumber > 5 ||
            selectedQuantityToNumber < 1
        ) {
            setQuantityIsValid(false);
            return;
        }

        props.onAddToCart(selectedQuantityToNumber);
    };

    return (
        <form
            className="flex flex-row gap-10 m-2 text-black"
            onSubmit={submitHandler}
        >
            <QuantityInput
                ref={quantityInputRef}
                label="quantity"
                input={{
                    id: nanoid(),
                    type: "number",
                    min: "1",
                    max: "5",
                    step: "1",
                    defaultValue: "1",
                }}
            />
            <button className="text-black bg-indigo-500 rounded-md px-4 hover:bg-white">
                Add
            </button>
            {!quantityIsValid && <p>Please enter a valid amount (1 - 5)</p>}
        </form>
    );
};

export default ShopItemForm;
