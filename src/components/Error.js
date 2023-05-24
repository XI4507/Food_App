import error from "../assets/img/error.jpg"
import { useRouteError } from "react-router-dom";

const Error =()=>{
    const err=useRouteError();
    // console.log(err);
    return(
        <div className="error-container">
            <h1>{err.status}</h1>
            <img src={error} alt="Oops.. Something went wrong 😐" className="errorImage"/>
        </div>
    )
}

export default Error;