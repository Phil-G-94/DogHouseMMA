import Card from "../Card/Card";

import { COACHES } from "../../data/coaches";

const Display = () => {
    console.log(COACHES);

    return (
        <div>
            <div>
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
    );
};

export default Display;
