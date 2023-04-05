import { NavLink, Outlet } from "react-router-dom";

export default function HelpLayout() {
    return (
        <div className="help-layout">

            <h2>Website Help</h2>
            <p>We are here to help you! Please feel free to view our frequently asked questions or contact us directly so we can assist you with any other questions you may have. </p>

            <nav>
                <NavLink to="faq">View the FAQ</NavLink>
                <NavLink to="contact">Contact Us</NavLink>
            </nav>

            <Outlet />

        </div>
    )
}