import Navigation from "./components/Navigation/Navigation";
import Map from "./components/Map/Map";

function App() {
    return (
        <>
            <header id="header">
                <Navigation />
                <div className="flex items-center justify-center">
                    <h1>Welcome to the Dog House</h1>
                </div>
            </header>
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

            <footer id="contact">
                <Map />
            </footer>
        </>
    );
}

export default App;
