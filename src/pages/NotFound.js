import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div>
            <h2> Page Not Found! </h2>
            <p> The page you have requested has not been found please click the link below to return to the homepage! </p>

            <p> Go to the <Link to="/"> Homepage</Link></p>
        </div>


    )
}