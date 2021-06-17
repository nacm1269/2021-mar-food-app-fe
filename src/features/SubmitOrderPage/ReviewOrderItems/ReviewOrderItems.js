import React from 'react'
import {useEffect, useState} from "react";
import EditQuantity from "../EditQuantity/EditQuantity";
import SubmitOrder from "../SubmitOrder/SubmitOrder";
import { Link } from 'react-router-dom'
import './ReviewOrderItems.css'

const ReviewOrderItems = () => {

    const [orderItems, setOrderItems] = useState([])
    const orderId = localStorage.getItem('orderId')

    const getOrder = async () => {
        const data = await fetch("http://localhost:3001/orders/" + orderId)
        return await data.json()
    }

    useEffect(() => {
        getOrder()
            .then(json => {
                setOrderItems(json.orderItems)
            })
    }, [])

    const displayOrderItems = () => {
            return orderItems.map(orderItem => {
                return <EditQuantity key={orderItem.menuItemId} quantity={orderItem.quantity} menuItemId={orderItem.menuItemId} />
            })
    }
    return (
            <main className={'container center-align'}>
                <h4>Please check your order before submitting</h4>
                {displayOrderItems()}
                <Link to="/submittedOrder">
                    <button className={'btn submit-order-button'}>SUBMIT ORDER</button>
                </Link>
            </main>
    )
}

export default ReviewOrderItems