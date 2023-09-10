import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";

import Navigation from "./components/Navigation/Navigation";
import RootLayout from "./pages/RootLayout";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import CompsPage from "./pages/CompsPage";
import ShopPage from "./pages/ShopPage";
import { compListLoader } from "./utils/compListLoader";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        errorElement: <ErrorPage />,
        children: [
            { index: true, element: <Home /> },
            { path: "about-us", element: <AboutUs /> },
            { path: "contact", element: <Contact /> },
            { path: "comps", element: <CompsPage />, loader: compListLoader },
            { path: "shop", element: <ShopPage /> },
        ],
    },
]);

function App() {
    return (
        <>
            <RouterProvider router={router}>
                <Navigation />
            </RouterProvider>
            <Analytics />
        </>
    );
}

export default App;
