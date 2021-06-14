import {useEffect, useState} from "react";

const Starters = () => {
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
                return <StarterItem key={starter._id} name={starter.name} description={starter.description}
                                    price={starter.price}/>
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