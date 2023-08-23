import { json } from "react-router-dom";

export const compListLoader = async () => {
    const response = await fetch("http://localhost:8080/events/")

    if (!response.ok) {
        throw json({ message: "Could not fetch comps." }, { status: 500 })
    } else {
        return response;
    }
}