import React from 'react'
import {useEffect, useState} from "react";
import MenuItem from "../MenuItem";

const Starters = () => {

    const fakeData = [{
        "_id": {
            "$oid": "60c739e10b5f5c23d4a61684"
        },
        "name": "burger",
        "description": "beef and cheese",
        "price": {
            "$numberDecimal": "12.99"
        }
    },
        {
            "_id": {
                "$oid": "60c739e10b5f5c23d4a61684"
            },
            "name": "banana",
            "description": "potassium and cheese",
            "price": {
                "$numberDecimal": "12.99"
            }
        },
        {
            "_id": {
                "$oid": "60c739e10b5f5c23d4a61684"
            },
            "name": "calamari",
            "description": "squid and cheese ",
            "price": {
                "$numberDecimal": "12.99"
            }
        }]
    const [starters, setStarters] = useState([])

    const getStarters = async () => {
        const data = await fetch()
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