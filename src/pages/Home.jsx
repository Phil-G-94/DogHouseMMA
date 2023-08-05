import Map from "../components/Map/Map";

const Home = () => {
    return (
        <>
            <main>
                <div className="flex items-center justify-center">
                    <img
                        src="/images/dhlogo.jpeg"
                        alt="dog house logo"
                        className="animate-pulse"
                    />
                </div>

                <section></section>
            </main>

            <footer>
                <Map />
            </footer>
        </>
    );
};

export default Home;
