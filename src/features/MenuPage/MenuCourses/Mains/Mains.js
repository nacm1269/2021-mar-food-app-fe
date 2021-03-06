import React, {useEffect, useState} from "react";
import MenuItem from "../MenuItem";
import ErrorMessage from "../../ErrorMessage";
import MenuCourses from "../MenuCourses";
import {Button} from "react-materialize";
import {Link} from "react-router-dom";

const Mains = () => {

    const [mains, setMains] = useState([])

    const getMains = async () => {
        const data = await fetch('http://localhost:3001/dishes/mains')
        return await data.json()
    }

    useEffect(() => {
        getMains()
            .then(json => {
                    setMains(json.data)
            })
    },[])

    const displayMains = () => {
        if (mains.length > 0) {
            return mains.map(main => {
                return <MenuItem key={main._id} name={main.name} description={main.description}
                                 price={main.price} image={main.imageURL} menuItemId={main._id}/>
            })
        }
        else return ErrorMessage
    }

    return (
        <div>
            <MenuCourses/>
            <main className={"container center"}>
                <h1>Mains</h1>
                {displayMains()}
                <div className={'row'}>
                    <Link className={"waves-light btn-small center-align review-order-button"} to={'/reviewOrder'}>REVIEW ORDER</Link>
                </div>
            </main>
        </div>
    )
}

export default Mains