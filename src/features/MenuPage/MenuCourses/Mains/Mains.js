import {useEffect, useState} from "react";
import MenuItem from "../MenuItem";

const Mains = () => {

    const [mains, setMains] = useState([])

    const getMains = async () => {
        const data = await fetch(/dishes/mains)
        return await data.json()
    }

    useEffect(() => {
        getMains()
            .then(json => {
                if (json.success) {
                    setMains(json.data.mains)
                }
            })
    })

    const displayMains = () => {
        if (mains.length > 0) {
            return mains.map(main => {
                return <MenuItem key={main._id} name={main.name} description={main.description}
                                 price={main.price} image={main.imageURL}/>
            })
        }
        else return null
    }

    return (
        <main>
            {displayMains()}
        </main>
    )

}

export default Mains