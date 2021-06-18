import React from 'react'
import 'materialize-css';
import { Button} from 'react-materialize';
import {Link} from 'react-router-dom'
import plateBackground from './plateBackground.jpeg'
import bonLogo from '../../Bon-logo.png'
import './LandingPage.css'

const LandingPage = () => {
    return (
        <div className='responsive-img box'
             style={{
                 backgroundImage: `url(${plateBackground})`,
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
            </div>
            <div style={{
                position:"absolute",
                bottom:"3%"}
            }>
                <Link to="/formpage">
                    <Button className='waves-effect waves-light btn-small white black-text' id='landing-button' style={{
                        fontWeight: "bold",
                        letterSpacing: "2px",
                        width: "10vw",
                        height: "2vw",
                    }}>
                        Enter Site
                    </Button>
                </Link>
            </div>
        </div>
    )
}

export default LandingPage