const Comps = ({ events }) => {
    return (
        <>
            <div className="bg-purple-300 rounded-md grid grid-cols-1 gap-4 ">
                {events.map((event) => (
                    <ul
                        key={event.id}
                        className="flex flex-col place-items-center p-3 m-auto text-center "
                    >
                        <li className="w-2/5 ">{event.title}</li>
                        <li className="w-2/5">{event.date}</li>
                        <li className="w-2/5">
                            <p className="text-sm">{event.description}</p>
                        </li>
                        <img
                            className="object-cover w-4/6 md:w-2/5"
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
