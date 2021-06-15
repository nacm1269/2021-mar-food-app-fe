import React from 'react'
import { Link } from 'react-router-dom'

const MenuCourses = (props) => {
    return (
        <div className={"menu-dropdown"}>
            <div>
                <Link to="/starters">
                    <button>Starters</button>
                </Link>
                <Link to="/mains">
                    <button>Mains</button>
                </Link>
                <Link to="/desserts">
                    <button>Desserts</button>
                </Link>
                <Link to="/refreshments">
                    <button>Refreshments</button>
                </Link>
            </div>
            <div className={"menu-course-items"}>
                {props.children}
            </div>
        </div>
    )
}

export default MenuCourses
