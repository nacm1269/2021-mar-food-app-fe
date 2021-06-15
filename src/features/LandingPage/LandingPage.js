import React from 'react'
import 'materialize-css';
import { Button} from 'react-materialize';
import Facebook from '@material-ui/core/facebook';
import restaurantImage from './restaurantImage.jpg'
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
                {/*<img className={'responsive-img'} src={restaurantImage} alt='restaurant hanging lights'/>*/}
                    <Button className='waves-effect waves-light btn-large white black-text' id='cssHook'>
                    Enter Site
                    </Button>
                <Icon>Facebook</Icon>
            </div>
    )
}

export default LandingPage