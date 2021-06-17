import {useEffect, useState} from "react";
import MenuItem from "../MenuItem";
import ErrorMessage from "../../ErrorMessage";
import MenuCourses from "../MenuCourses";

const Refreshments = () => {

    const [refreshments, setRefreshments] = useState([])

    const getRefreshments = async () => {
        const data = await fetch('http://localhost:3001/dishes/refreshments')
        return await data.json()
    }

    useEffect(() => {
        getRefreshments()
            .then(json => {
                if (json.success) {
                    setRefreshments(json.data)
                }
            })
    },[])

    const displayRefreshments = () => {
        if (refreshments.length > 0) {
            return refreshments.map(refreshment => {
                return <MenuItem key={refreshment._id} name={refreshment.name} description={refreshment.description}
                                 price={refreshment.price} image={refreshment.imageURL} menuItemId={refreshment._id}/>
            })
        }
        else return ErrorMessage
    }

    return (
        <div>
            <MenuCourses/>
            <main>
                {displayRefreshments()}
            </main>
        </div>
    )

}

export default Refreshments