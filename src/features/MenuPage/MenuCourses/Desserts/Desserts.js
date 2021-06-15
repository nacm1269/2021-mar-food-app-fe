import {useEffect, useState} from "react";
import MenuItem from "../MenuItem";

const Desserts = () => {

    const [desserts, setDesserts] = useState([])

    const getDesserts = async () => {
        const data = await fetch('http://localhost:3001/dishes/desserts')
        return await data.json()
    }

    useEffect(() => {
        getDesserts()
            .then(json => {
                if (json.success) {
                    setDesserts(json.data.desserts)
                }
            })
    })

    const displayDesserts = () => {
        if (desserts.length > 0) {
            return desserts.map(dessert => {
                return <MenuItem key={dessert._id} name={dessert.name} description={dessert.description}
                                 price={dessert.price} image={dessert.imageURL}/>
            })
        }
        else return null
    }

    return (
        <main>
            {displayDesserts()}
        </main>
    )

}

export default Desserts