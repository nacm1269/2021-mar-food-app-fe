import React from 'react'
import {useEffect, useState} from "react";
import MenuItem from "../MenuItem";

const Starters = () => {

    const [starters, setStarters] = useState([])

    const getStarters = async () => {

        const data = await fetch('http://localhost:3001/dishes')
        return await data.json()
    }

    useEffect(() => {
        getStarters()
            .then(json => {
                    console.log(json)
                    setStarters(json.data)
            })
    }, [])

    const displayStarters = () => {
        if (starters.length > 0) {
            return starters.map(starter => {
                return <MenuItem key={starter._id} name={starter.name} description={starter.description}
                                    price={starter.price} image={starter.imageURL}/>
            })
        }
        else return null
    }
    return (
        <main>
            {displayStarters()}
        </main>
    )

}

export default Starters