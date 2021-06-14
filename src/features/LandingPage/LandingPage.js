import React from 'react'
import 'materialize-css';
import { Button } from 'materialize-css';
import './LandingPage.css'

const LandingPage = () => {
    return (
        <section>
            <img src={'https://upload.wikimedia.org/wikipedia/commons/b/b2/Hausziege_04.jpg'} alt='a goat'/>
                <button className={Button}>Enter Site</button>
        </section>
    )
}

export default LandingPage