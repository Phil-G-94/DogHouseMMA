const Card = (props) => {
    return (
        <section className="flex place-content-center">
            <div className="w-[300px] h-[300px] bg-transparent cursor-pointer group perspective">
                <div className="relative preserve-3d group-hover:rotate-y-180 w-full h-full duration-1000">
                    <div className="absolute backface-hidden w-full h-full rounded-lg">
                        <img
                            className="w-full h-full object-contain"
                            src="/images/dhlogo-card.jpeg"
                            alt="logo"
                        />
                    </div>

                    <div className="absolute rotate-y-180 backface-hidden w-full h-full bg-yellow-500 overflow-hidden rounded-lg">
                        <div className="text-center flex flex-col items-center justify-center h-full text-gray-800 px-2 pb-24">
                            <p>
                                {/* MEMBER.name Member.surname */}
                                {props.name} {props.surname}
                            </p>
                            <ul>
                                <li>
                                    {/* MEMBER.title */}
                                    {props.title}
                                </li>
                                <li>
                                    {/* MEMBER.rank */}
                                    {props.rank}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Card;

/* 

flip card source attribution: https://github.com/Sridhar-C-25/animated3dflipcard_tailwind/blob/main/src/index.html




*/
