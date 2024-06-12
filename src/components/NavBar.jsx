import React from "react";
import { Link } from "react-router-dom";

//Creating the navbar for the page which links to sorting the page with appropriate category
const NavBar = () => {
    return(
        <>
            <nav id="navBar">
                <ul className="nav nav-underline justify-content-center">
                    <li className="nav-item mx-5">
                        <Link to="/" className="nav-link" href="#">
                            All
                        </Link>
                    </li>

                    <li className="nav-item mx-5">
                        <Link to="/fullstackdevelopment" className="nav-link" href="#">
                            FULL STACK DEVELOPMENT
                        </Link>
                    </li>

                    <li className="nav-item mx-5">
                        <Link to="/datascience" className="nav-link" href="#">
                            DATA SCIENCE
                        </Link>
                    </li>

                    <li className="nav-item mx-5">
                        <Link to="cybersecurity" className="nav-link" href="#">
                            CYBER SECURITY
                        </Link>
                    </li>

                    <li className="nav-item mx-5">
                        <Link to="career" className="nav-link" href="#">
                            CARREER
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default NavBar