import { useRouteError } from "react-router-dom";

const Error = () =>
{
    const error = new useRouteError();
    console.log(error)
    return (
        <div>
            <h2>Oops!! Something went wrong</h2>
            <h4>{error.data}</h4>
            <h4>{error.status}</h4>
            <h4>{error.statusText}</h4>
        </div>
    )
}

export default Error;