import {useEffect, useState} from "react";
import MenuItem from "../MenuItem";
import ErrorMessage from "../../ErrorMessage";
import MenuCourses from "../MenuCourses";

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
                    setDesserts(json.data)
                }
            })
    },[])

    const displayDesserts = () => {
        if (desserts.length > 0) {
            return desserts.map(dessert => {
                return <MenuItem key={dessert._id} name={dessert.name} description={dessert.description}
                                 price={dessert.price} image={dessert.imageURL} menuItemId={dessert._id}/>
            })
        }
        else return ErrorMessage
    }

    return (
        <div>
        <MenuCourses/>
        <main>
            {displayDesserts()}
        </main>
        </div>
    )
}

export default Desserts