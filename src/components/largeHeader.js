import React from 'react'
import HomeLink from "./homeLink.js";
import logo from '../images/main-logo.png';

export default function LargeHeader() {
    return (
        <header className="App-header">
            <div className="nav-bar">
                <div className="left-navs">
                    <HomeLink name="About"/>
                    <HomeLink name="Projects"/>
                </div>
                <img src={logo} className="App-logo" alt="logo" />
                <div className="right-navs">
                    <HomeLink name="Blog"/>
                    <HomeLink name="Contact"/>
                </div>
            </div>
        </header>
    )
}
