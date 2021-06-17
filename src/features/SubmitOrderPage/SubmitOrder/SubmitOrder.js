import React, {useEffect} from 'react'
import 'materialize-css';
import { Button} from 'react-materialize';
import { useState} from "react";

const SubmitOrder = () => {

    const [finalOrder, setFinalOrder] = useState('')
    const orderId = localStorage.getItem('orderId')

    const order = {
        "orderId": orderId
    }

    const sendFinalOrder = () => {
        fetch('http://localhost:3001/orders/submitOrder', {
            "method": "PUT",
            "body": JSON.stringify(order),
            "headers":
                {
                    "content-type": "application/JSON"
                }
        })
                    .then(res => res.json())
                    .then((data) => {
                    })
        return data
        }

        const clickOrder = () => {
            sendFinalOrder()
            setFinalOrder(data)
            console.log(finalOrder)

        }

    const orderDetails = () => {
    return (
        <div>
        <h1>Congratulations! Your order has been submitted!</h1>
        <p>Name: {finalOrder.name}</p>
        <p>Email: {finalOrder.email}</p>
        <p>Postcode: {finalOrder.deliveryAddress}</p>
        <p>Total cost: {finalOrder.totalPrice}</p>
        </div>
    )
    }

    const orderDetailButton = () => {
        return (
            <Button onClick={clickOrder}>Submit Order</Button>
        )
    }


    return finalOrder.isOrderSubmitted ? orderDetails() : orderDetailButton()
}


export default SubmitOrder