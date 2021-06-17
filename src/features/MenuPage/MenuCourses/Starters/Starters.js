import React from 'react'
import {useEffect, useState} from "react";
import MenuItem from "../MenuItem";
import ErrorMessage from "../../ErrorMessage";
import MenuCourses from "../MenuCourses";
import {Button} from "react-materialize";

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
            })
    }, [])

    const displayStarters = () => {
        if (starters.length > 0) {
            return starters.map(starter => {
                return <MenuItem key={starter._id} name={starter.name} description={starter.description}
                                    price={starter.price} image={starter.imageURL} menuItemId={starter._id}/>
            })
        }
        else return ErrorMessage
    }
    return (
        <div>
            <MenuCourses/>
            <main>
                {displayStarters()}
            </main>
            <Button className="waves-light btn-small black white-text">Review Order</Button>
        </div>
    )

}

export default Starters