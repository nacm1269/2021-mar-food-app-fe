import React from 'react'
import { Link } from 'react-router-dom'
import 'materialize-css';
import DishOne from './DishOne.png'
import DishTwo from './DishTwo.png'
import DishThree from './DishThree.png'
import Refreshment from './Refreshment.png'
import './MenuCourses.css'
import {useState, useEffect} from "react";

const MenuCourses = () => {

    const [isMobile, setIsMobile] = useState(window.innerWidth < 1200);
    {/* Performs similarly to componentDidMount in classes */}
    useEffect(() => {
        window.addEventListener("resize", () => {
            const ismobile = window.innerWidth < 800;
            if (ismobile !== isMobile) setIsMobile(ismobile);
        }, false);
    }, [isMobile]);

    return (
        <div className={"container center"}>
        <div className={"row image-flex"}>
            <div className={"col s3"}>
                <Link to="/starters">
                    <img className={`${isMobile ? null : "responsive-img"}`} src={DishOne} alt="image of a starter"/>
                </Link>
            </div>
            <div className={"col s3"}>
                <Link to="/mains">
                    <img className={`${isMobile ? null : "responsive-img"}`} src={DishTwo} />
                </Link>
            </div>
            <div className={"col s3"}>
                <Link to="/desserts">
                    <img className={`${isMobile ? null : "responsive-img"}`} src={DishThree} />
                </Link>
            </div>
            <div className={"col s3"}>
                <Link to="/refreshments">
                    <img className={`${isMobile ? null : "responsive-img"}`} src={Refreshment} />
                </Link>
            </div>
            </div>
        </div>

        )
}

export default MenuCourses
