const Map = () => {
    return (
        <>
            <p className="flex items-center justify-center mt-20">
                You&apos;ll find our dojo here at No. 10 Biggin Avenue, Mitcham,
                CR4 3HN
            </p>
            <div className="flex place-items-center justify-center m-20">
                <img
                    src="https://www.mapquestapi.com/staticmap/v5/map?key=xH2GkAjTuyBejqLoUUeeLPpLl6qC9fTC&center=51.41205,-0.16648&zoom=16&size=400,400&locations=51.41205,-0.16648"
                    alt="dojo location"
                />
            </div>
        </>
    );
};

export default Map;
