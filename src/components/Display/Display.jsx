import Card from "../Card/Card";

import { COACHES } from "../../data/coaches";
import { MEMBERS } from "../../data/members";

const Display = () => {
    return (
        <>
            <div>
                <h1 className="flex flex-row place-content-center">Coaches</h1>
                <div className="grid grid-cols-2 m-10">
                    {COACHES.map((coach) => (
                        <Card
                            key={coach.id}
                            name={coach.name}
                            surname={coach.surname}
                            title={coach.title}
                            rank={coach.rank}
                            id={coach.id}
                        ></Card>
                    ))}
                </div>
            </div>
            <div>
                <h2 className="flex flex-row place-content-center">Members</h2>
                <div className="grid grid-cols-4 m-10">
                    {MEMBERS.map((member) => (
                        <Card
                            key={member.id}
                            name={member.name}
                            surname={member.surname}
                            rank={member.rank}
                        ></Card>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Display;
