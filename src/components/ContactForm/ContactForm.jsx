import useForm from "../../hooks/use-form";

const ContactForm = () => {
    const fullNameRegEx = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/gm;

    const emailRegEx = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;

    const {
        value: nameInputValue,
        isValid: nameInputIsValid,
        hasError: nameInputHasError,
        inputChangeHandler: nameInputChangeHandler,
        inputBlurHandler: nameInputBlurHandler,
        reset: nameInputReset,
    } = useForm((value) => fullNameRegEx.test(value) && value.trim() !== "");

    const {
        value: emailInputValue,
        isValid: emailInputIsValid,
        hasError: emailInputHasError,
        inputChangeHandler: emailInputChangeHandler,
        inputBlurHandler: emailInputBlurHandler,
        reset: emailInputReset,
    } = useForm((value) => emailRegEx.test(value) && value.trim() !== "");

    const nameInputIsInvalid = !nameInputIsValid && nameInputHasError;
    const nameValidityStyle = nameInputIsInvalid
        ? "invalid mt-1 block w-full rounded-md border-red-800 text-red-800"
        : "valid mt-1 block w-full rounded-md border-green-800 text-green-800";

    const emailInputIsInvalid = !emailInputIsValid && emailInputHasError;
    const emailValidityStyle = emailInputIsInvalid
        ? "invalid mt-1 block w-full rounded-md border-red-800 text-red-800"
        : "valid mt-1 block w-full rounded-md border-green-800 text-green-800";

    const formSubmissionHandler = (event) => {
        event.preventDefault();

        if (nameInputIsInvalid && emailInputIsInvalid) {
            return;
        }

        nameInputReset();
        emailInputReset();
    };

    return (
        <div className="m-20 py-12 bg-indigo-200 rounded-md w-80">
            <div className="mt-8 max-w-md">
                <div className="grid grid-cols-1 gap-6">
                    <form
                        action="submit"
                        className="text-black"
                        onSubmit={formSubmissionHandler}
                    >
                        <label className="block m-4">
                            <span className="text-black">Full Name</span>
                            <input
                                type="text"
                                placeholder="John Doe"
                                className={nameValidityStyle}
                                value={nameInputValue ?? ""}
                                onChange={nameInputChangeHandler}
                                onBlur={nameInputBlurHandler}
                            />
                        </label>
                        <label className="block m-4">
                            <span className="text-black">Email Address</span>
                            <input
                                type="email"
                                placeholder="john@example.com"
                                className={emailValidityStyle}
                                value={emailInputValue ?? ""}
                                onChange={emailInputChangeHandler}
                                onBlur={emailInputBlurHandler}
                            />
                        </label>

                        <div className="flex place-items-center justify-center m-4">
                            <label className="block">
                                <span className="text-black">Message</span>
                                <textarea
                                    className="mt-1 block w-full rounded-md border-black shadow-sm"
                                    rows="10"
                                    cols="20"
                                    minLength={10}
                                ></textarea>
                            </label>
                        </div>
                        <div className="flex place-items-center justify-center m-4">
                            <button className="rounded-full bg-indigo-700 p-3 m-2 hover:text-black hover:bg-yellow-500 text-black">
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
