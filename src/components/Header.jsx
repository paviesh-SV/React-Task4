import React from "react";

//Creating the header of the website by adding logo and image by linking to the actual guvi website
const Header = () => {
    return (
        <>
            <nav className="navbar header bg-body-tertiary">
                <div className="container">
                    <a className="navbar-brand" href="#">
                        <img src="https://www.guvi.in/blog/wp-content/themes/guvi-blog/assets/images/guvi-logo.svg" alt="Bootstrap" width="120" height="50" />
                    </a>
                </div>
            </nav>

            <div className="container">
                <div className="navimg justify-content-center d-flex">
                    <img src="https://s3.ap-south-1.amazonaws.com/guvi-2.0/banner/Zen_Banner_1.png" alt="Bootstrap" width="90%" height="30%" />
                </div>
            </div>
        </>
    )
}

export default Header