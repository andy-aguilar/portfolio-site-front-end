import React from 'react'
import fleur from '../../images/fleur-de-lis.png';
import "./headers.css"

export default function MediumHeader() {
    return (
        <header className="tablet-header">
            <img src={fleur} className="tablet-logo" alt="logo" />
        </header>
    )
}
