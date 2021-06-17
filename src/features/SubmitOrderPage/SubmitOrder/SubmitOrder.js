import React, {useEffect} from 'react'
import 'materialize-css';
import { Button} from 'react-materialize';
import { useState} from "react";

const SubmitOrder = () => {

    const [finalOrder, setFinalOrder] = useState({})
    const orderId = localStorage.getItem('orderId')
    const [isOrderSubmitted, setIsOrderSubmitted] = useState(false)

    const getFinalOrder = async () => {
        const data = await fetch('http://localhost:3001/orders/' + orderId)
        return await data.json()
    }

    useEffect(() => {
        getFinalOrder()
            .then(json => {
                console.log(json)
                setFinalOrder(json)
            })
    }, [])


    const displayFinalOrder = () => {
        setIsOrderSubmitted(true)
    }

    const orderDetails = () => {
    return (
        <div>
        <h1>Congratulations! Your order has been submitted!</h1>
        <p>Name: {finalOrder.name}</p>
        <p>Email: {finalOrder.email}</p>
        <p>Postcode: {finalOrder.postcode}</p>
        <p>Total cost: {finalOrder.totalPrice}</p>
        </div>
    )
    }

    const orderDetailButton = () => {
        return (
            <Button onClick={displayFinalOrder}>Submit Order</Button>
        )
    }

    return isOrderSubmitted ? orderDetails() : orderDetailButton()
}


export default SubmitOrder