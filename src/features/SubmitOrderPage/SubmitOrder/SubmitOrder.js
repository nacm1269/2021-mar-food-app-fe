import React from 'react'
import 'materialize-css';
import { Button} from 'react-materialize';
import { useState, useEffect } from "react";

const SubmitOrder = () => {

    const [finalOrder, setFinalOrder] = useState('')
    const orderId = localStorage.getItem('orderId')

    const order = {
        "orderId": orderId
    }

    useEffect(() => {
        async function updatePost() {
            const requestOptions = {
                method: 'PUT',
                headers: { 'Content-Type': 'application/JSON' },
                body: JSON.stringify(order)
            };
            const response = await fetch('http://localhost:3001/orders/submitOrder', requestOptions);
            const data = await response.json();
            setFinalOrder(data.data)
        }
        updatePost();
    }, []);

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


export default SubmitOrder