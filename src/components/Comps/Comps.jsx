const Comps = ({ events }) => {
    return (
        <>
            <h2>This is the Comps component</h2>

            <p>
                Here I should manipulate and display data passed down to this
                component from the Comps Page.
            </p>
            <div className=" bg-yellow-500 ">
                {events.map((event) => (
                    <ul
                        key={event.id}
                        className="grid grid-cols-2 gap-2 place-content-center place-items-center rounded-md border-black border-2"
                    >
                        <li>{event.title}</li>
                        <li>{event.date}</li>
                        <li>
                            <p className="text-sm text-center ">
                                {event.description}{" "}
                            </p>
                        </li>
                        <img
                            className="object-cover w-1/3 "
                            src={event.image}
                            alt="event image"
                        />
                    </ul>
                ))}
            </div>
        </>
    );
};

export default Comps;
