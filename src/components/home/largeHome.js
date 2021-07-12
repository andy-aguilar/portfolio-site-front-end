import React from 'react'


import "./home.css"

export default function LargeHome({scrollToSec}) {



    return (
        <div id="home-container">
            <div className="App-home">
                <div className="link-container">
                    <div className="home-link about" onClick={() => scrollToSec("about")}>
                        <h1>About</h1>
                    </div>
                    <div className="home-link" onClick={() => scrollToSec("projects")}>
                        <h1>Projects</h1>
                    </div>
                    <div className="home-link" onClick={() => scrollToSec("blog")}>
                        <h1>Blog</h1>
                    </div>
                    <div className="home-link" onClick={() => scrollToSec("contact")}>
                        <h1>Contact</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}
