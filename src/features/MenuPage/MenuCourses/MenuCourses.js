import React from 'react'
import { Link } from 'react-router-dom'
import 'materialize-css';
import DishOne from './DishOne.png'
import DishTwo from './DishTwo.png'
import DishThree from './DishThree.png'
import Refreshment from './Refreshment.jpg'
import './MenuCourses.css'
import {Button} from "react-materialize";

const MenuCourses = () => {
    return (
        <div className={"container"}>
        <div className={"row"}>
            <div className={"col s3"}>
                <Link to="/starters">
                    <img className={"responsive-img"} style={{
                        padding: "25px",
                        width: "40vh",
                        alt: "image of a starter"
                    }} src={DishOne} />
                    {/*<button>Starters</button>*/}
                </Link>
            </div>
            <div className={"col s3"}>
                <Link to="/mains">
                    <img className={"responsive-img"} style={{
                        padding: "25px",
                        width: "40vh",
                        alt: "image of a main meal"
                    }} src={DishTwo} />
                    {/*<button>Mains</button>*/}
                </Link>
            </div>
            <div className={"col s3"}>
                <Link to="/desserts">
                    <img className={"responsive-img"} style={{
                        padding: "25px",
                        width: "40vh",
                        alt: "image of a dessert"
                    }} src={DishThree} />
                    {/*<button>Desserts</button>*/}
                </Link>
            </div>
            <div className={"col s3"}>
                <Link to="/refreshments">
                    <img className={"responsive-img"} style={{
                        padding: "25px",
                        width: "40vh",
                        alt: "image of a cocktail"
                    }} src={Refreshment} />
                    {/*<button>Refreshments</button>*/}
                </Link>
            </div>
            </div>
        </div>

        )
}

export default MenuCourses
