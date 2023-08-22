import Comps from "../components/Comps/Comps";

const CompsPage = () => {
    return (
        <div className="flex flex-col place-items-center text-left">
            <h1>This is the Comps page</h1>
            <p>
                Here is where I render the &lt;Comps&gt; component and pass down
                comp data via props so that it can be displayed
            </p>
            <Comps />
        </div>
    );
};

export default CompsPage;
