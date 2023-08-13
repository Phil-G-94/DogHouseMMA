const Notification = (props) => {
    let statusClasses = "";

    if (props.status === "error") {
        statusClasses = "bg-red-700";
    }

    if (props.status === "success") {
        statusClasses = "bg-green-700";
    }

    if (props.status === "sending") {
        statusClasses = "bg-blue-700";
    }

    return (
        <section
            className={`w-full flex place-content-center p-2 rounded-lg ${statusClasses}`}
        >
            <p className="text-sm">{props.message}</p>
        </section>
    );
};

export default Notification;
