import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Navigation from "./components/Navigation/Navigation";

import RootLayout from "./pages/RootLayout";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        errorElement: <ErrorPage />,
        children: [
            { path: "/home", element: <Home /> },
            { path: "/about-us", element: <AboutUs /> },
            { path: "/contact", element: <Contact /> },
        ],
    },
]);

function App() {
    return (
        <>
            <RouterProvider router={router}>
                <Navigation />
            </RouterProvider>
        </>
    );
}

export default App;
