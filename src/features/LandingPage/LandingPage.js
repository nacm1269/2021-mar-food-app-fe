import React from 'react'
import 'materialize-css';
import { Button} from 'react-materialize';
import {Link} from 'react-router-dom'
import restaurantImage from './restaurantImage.jpg'
import balogo1 from './balogo1.png'
import bonLogo from '../../Bon-logo.png'
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
             }}>
            <div>
                <img className={'responsive-img'} alt='logo' style={{
                    width: "50vh",
                    alt: "bon appétit logo"
                }} src={bonLogo}/>
                <h5 className={'landing-tagline'}>Michelin-starred food delivered to your door</h5>
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