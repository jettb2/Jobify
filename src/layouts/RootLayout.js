import { NavLink, Outlet } from "react-router-dom"
import Breadcrumbs from "../components/Breadcrumbs"

export default function RootLayout() {
    return (
        <div className="root layout">
            <header>
                <nav>
                    <h1> Jobify </h1>
                    <NavLink to="/"> Home </NavLink>
                    <NavLink to="About"> About </NavLink>
                    <NavLink to="Help"> Help </NavLink>
                    <NavLink to="Careers"> Careers </NavLink>
                </nav>
                <Breadcrumbs />
            </header>

            <main>
                <Outlet />
            </main>
        </div>
    )
}