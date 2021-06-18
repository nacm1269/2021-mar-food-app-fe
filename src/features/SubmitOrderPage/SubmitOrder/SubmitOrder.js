import React from 'react'
import 'materialize-css';
import { Card } from 'react-materialize';
import { useState, useEffect } from "react";
import './SubmitOrder.css'

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
        <div className={"container"}>
            <div className={'card v-align center-align'}>
                <h3>Your order has been submitted.</h3>
                <h5>We hope you enjoy your food.</h5>
                <div>
                    <p>Name: {finalOrder.name}</p>
                    <p>Email: {finalOrder.email}</p>
                    <p>Postcode: {finalOrder.postcode}</p>
                    <p>Total cost: £{finalOrder.totalPrice}</p>
                </div>
            </div>
        </div>
    )
}


export default SubmitOrder