import { useLoaderData } from "react-router-dom";
import Comps from "../components/Comps/Comps";

const CompsPage = () => {
    const data = useLoaderData();

    return (
        <div className="flex flex-col place-items-center">
            <Comps events={data.events} />
        </div>
    );
};

export default CompsPage;
