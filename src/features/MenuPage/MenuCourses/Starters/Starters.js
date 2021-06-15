import React from 'react'
import {useEffect, useState} from "react";
import MenuItem from "../MenuItem";

const Starters = () => {

    const [starters, setStarters] = useState([])

    const getStarters = async () => {

        const data = await fetch('http://localhost:9000/dishes/starters')
        return await data.json()
    }

    useEffect(() => {
        getStarters()
            .then(json => {
                if (json.success) {
                    setStarters(json.data.starters)
                }
            })
    })

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