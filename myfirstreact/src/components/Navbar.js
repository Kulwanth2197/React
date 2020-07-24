import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <div className="Data">
                <Link to="#" className="brand-logo left">KULWANTH's KITCHEN</Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><Link to="/Pizza">Pizza</Link></li>
                    <li><Link to="/Burger">Burger</Link></li>
                </ul>
            </div>
        </nav>

    );
}

export default Navbar;