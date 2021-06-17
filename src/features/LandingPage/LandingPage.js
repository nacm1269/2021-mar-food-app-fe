
// White text box enter site

import React from 'react'
import 'materialize-css';
import { Button} from 'react-materialize';
import {Link} from 'react-router-dom'
import restaurantImage from './restaurantImage.jpg'
import balogo1 from './balogo1.png'
import './LandingPage.css'

const LandingPage = () => {
    return (
        <div className='responsive-img box'
             style={{
                 backgroundImage: `url(${restaurantImage})`,
                 backgroundSize: "cover",
                 height: "100vh",
                 width: "100vw",
                 alt: "restaurant hanging lights",
                 backgroundBlendMode: "multiply"
             }}>
            <div>
                <img className={'responsive-img'} style={{
                    width: "40vh",
                    alt: "bon appétit logo"
                }} src={balogo1}/>
            </div>
            <div style={{
                position:"absolute",
                bottom:"3%"}
            }>
                <Link to="/formpage">
                    <Button className='waves-effect waves-light btn white black-text' style={{
                        fontWeight: "bold",
                        letterSpacing: "2px",
                        width: "15vw",
                        height: "5vw",
                    }}>
                        Enter Site
                    </Button>
                </Link>
            </div>
        </div>
    )
}

export default LandingPage