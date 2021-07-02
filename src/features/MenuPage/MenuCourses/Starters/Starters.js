import React from 'react'
import {useEffect, useState} from "react";
import MenuItem from "../MenuItem";
import ErrorMessage from "../../ErrorMessage";
import MenuCourses from "../MenuCourses";
import {Link} from "react-router-dom";


const Starters = () => {

    const [starters, setStarters] = useState([])

    const getStarters = async () => {

        const data = await fetch('http://localhost:3001/dishes/starters')
        return await data.json()
    }

    useEffect(() => {
        getStarters()
            .then(json => {
                    setStarters(json.data)
                console.log(json.data)
            })
    }, [])

    const displayStarters = () => {
        if (starters.length > 0) {
            return starters.map(starter => {
                return (
                    <div>
                    <MenuItem key={starter._id} name={starter.name} description={starter.description}
                                    price={starter.price} image={starter.imageURL} menuItemId={starter._id} dishType={starter.dishType}/>
                    </div>
                )
            })
        }
        else return ErrorMessage
    }
    return (
        <div>
            <MenuCourses/>
            <main className={"container center"}>
                <h1>Starters</h1>
                {displayStarters()}
                <div className={'row'}>
                    <Link className={"waves-light btn-small center-align review-order-button"} to={'/reviewOrder'}>REVIEW ORDER</Link>
                </div>
            </main>
        </div>
    )

}

export default Starters