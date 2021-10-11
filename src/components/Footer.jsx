import React from 'react';
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container-fluid">
            <nav>
                <ul className="footer-menu">
                <li>
                    <Link to="/">
                    Home
                    </Link>
                </li>

                </ul>
                <p className="copyright text-center">
                © BackSlash Technologies 2020
            </p>
            </nav>
            </div>
        </footer>
    )
};

export default Footer;