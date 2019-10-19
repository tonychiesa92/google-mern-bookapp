import React from "react";

function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-primary bg-white">
            <a className="navbar-brand" href="/">
                <h2 className="text-dark">Google Book Search</h2>
            </a>
            <div id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item" id="home">
                        <a className="nav-link" href="/"><button type="button" className="btn btn-info text-white">Search Books</button></a>
                    </li>
                    <li className="nav-item" id="report">
                        <a className="nav-link" href="/saved"><button type="button" className="btn btn-info text-white">Saved Books</button></a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;