import ErrorIcon from "../components/Error/ErrorIcon";
import Navigation from "../components/Navigation/Navigation";

const ErrorPage = () => {
    return (
        <div className="flex flex-col place-items-center">
            <Navigation />
            <div className="flex flex-col place-items-center mt-80">
                <h1>Error! Page not found.</h1>
                <p>It might be still under construction...</p>
                <ErrorIcon />
            </div>
        </div>
    );
};

export default ErrorPage;
