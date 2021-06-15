import {useEffect, useState} from "react";
import MenuItem from "../MenuItem";

const Refreshments = () => {

    const [refreshments, setRefreshments] = useState([])

    const getRefreshments = async () => {
        const data = await fetch(/dishes/refreshments)
        return await data.json()
    }

    useEffect(() => {
        getRefreshments()
            .then(json => {
                if (json.success) {
                    setRefreshments(json.data.refreshments)
                }
            })
    })

    const displayRefreshments = () => {
        if (refreshments.length > 0) {
            return refreshments.map(refreshment => {
                return <MenuItem key={refreshment._id} name={refreshment.name} description={refreshment.description}
                                 price={refreshment.price} image={refreshment.imageURL}/>
            })
        }
        else return null
    }

    return (
        <main>
            {displayRefreshments()}
        </main>
    )

}

export default Refreshments