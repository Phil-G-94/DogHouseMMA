import useForm from "../../hooks/use-form";

import { useSelector, useDispatch } from "react-redux";
import Notification from "../Notification/Notification";
import { notificationActions } from "../../store/notification-slice";

const ContactForm = () => {
    const notification = useSelector(
        (state) => state.notification.notification
    );

    const dispatch = useDispatch();

    const fullNameRegEx = /^([\p{L}]{2,})+\s+([\p{L}\s]{3,})+$/iu;

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

    const {
        value: messageInputValue,
        isValid: messageInputIsValid,
        hasError: messageInputHasError,
        inputChangeHandler: messageInputChangeHandler,
        inputBlurHandler: messageInputBlurHandler,
        reset: messageInputReset,
    } = useForm((value) => value.trim().length > 50 && value.trim() !== "");

    const nameInputIsInvalid = !nameInputIsValid && nameInputHasError;
    const nameValidityStyle = nameInputIsInvalid
        ? "invalid mt-1 block w-full rounded-md border-red-800 text-red-800"
        : "valid mt-1 block w-full rounded-md border-green-800 text-green-800";

    const emailInputIsInvalid = !emailInputIsValid && emailInputHasError;
    const emailValidityStyle = emailInputIsInvalid
        ? "invalid mt-1 block w-full rounded-md border-red-800 text-red-800"
        : "valid mt-1 block w-full rounded-md border-green-800 text-green-800";

    const messageInputIsInvalid = !messageInputIsValid && messageInputHasError;
    const messageValidityStyle = messageInputIsInvalid
        ? "invalid mt-1 block w-full rounded-md border-red-800 text-red-800"
        : "valid mt-1 block w-full rounded-md border-green-800 text-green-800";

    const formSubmissionHandler = (event) => {
        event.preventDefault();

        if (nameInputIsInvalid && emailInputIsInvalid) {
            return;
        }

        const sendMessageRequest = async () => {
            dispatch(
                notificationActions.showNotification({
                    status: "sending",
                    title: "Sending...",
                    message: "Sending message...",
                })
            );
            const response = await fetch(
                "https://dhmma-contact-form-default-rtdb.europe-west1.firebasedatabase.app/contact.json",
                {
                    method: "POST",
                    body: JSON.stringify({
                        name: nameInputValue,
                        email: emailInputValue,
                        message: messageInputValue,
                    }),
                }
            );

            if (!response.ok) {
                dispatch(
                    notificationActions.showNotification({
                        status: "fail",
                        title: "Failed to send.",
                        message: "Messaged failed to send.",
                    })
                );
                throw new Error("Message not sent");
            } else {
                dispatch(
                    notificationActions.showNotification({
                        status: "success",
                        title: "Sent.",
                        message: "Message sent.",
                    })
                );
            }

            nameInputReset();
            emailInputReset();
            messageInputReset();
        };

        sendMessageRequest();
    };

    return (
        <div className="m-20 py-12 bg-yellow-500 rounded-md w-80">
            {notification && (
                <Notification
                    status={notification.status}
                    title={notification.title}
                    message={notification.message}
                ></Notification>
            )}
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
                            {nameInputIsInvalid && (
                                <p className="text-red-800 m-2 text-xs">
                                    First name must be longer than 2 characters;
                                    surname must be longer than 3.
                                </p>
                            )}
                        </label>
                        <label className="block m-4">
                            <span className="text-black">Email Address</span>
                            <input
                                type="text"
                                placeholder="john@example.com"
                                className={emailValidityStyle}
                                value={emailInputValue ?? ""}
                                onChange={emailInputChangeHandler}
                                onBlur={emailInputBlurHandler}
                            />
                            {emailInputIsInvalid && (
                                <p className="text-red-800 m-2 text-xs">
                                    Email must be in valid format.
                                </p>
                            )}
                        </label>

                        <div className="flex place-items-center justify-center m-4">
                            <label className="block">
                                <span className="text-black">Message</span>
                                <textarea
                                    rows="10"
                                    cols="30"
                                    className={messageValidityStyle}
                                    value={messageInputValue ?? ""}
                                    onChange={messageInputChangeHandler}
                                    onBlur={messageInputBlurHandler}
                                ></textarea>
                                {messageInputIsInvalid && (
                                    <p className="text-red-800 m-2 text-xs">
                                        Message must be &gt; 50 characters long.
                                    </p>
                                )}
                            </label>
                        </div>
                        <div className="flex place-items-center justify-center m-4">
                            <button className="rounded-full bg-indigo-700 p-3 m-2 hover:text-white hover:bg-black text-black">
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
