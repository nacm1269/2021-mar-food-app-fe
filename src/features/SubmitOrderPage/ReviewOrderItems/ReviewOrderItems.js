import React from 'react'
import {useEffect, useState} from "react";
import ErrorMessage from "../../MenuPage/ErrorMessage";
import EditQuantity from "../EditQuantity/EditQuantity";

const ReviewOrderItems = () => {

    const [orderItems, setOrderItems] = useState([])
    const orderId = localStorage.getItem('orderId')

    const getOrder = async () => {
        const data = await fetch("http://localhost:3001/orders/" + orderId)
        console.log(data)
        return await data.json()
    }

    useEffect(() => {
        getOrder()
            .then(json => {
                setOrderItems(json.orderItems)
            })
    }, [])

    const displayOrderItems = () => {
        // if (orderItems.length > 0) {
            return orderItems.map(orderItem => {
                return <EditQuantity key={orderItem.menuItemId} quantity={orderItem.quantity} menuItemId={orderItem.menuItemId} />
            })
        // }
        // else return ErrorMessage
    }
    return (
            <main>
                {displayOrderItems()}
            </main>
    )
}

export default ReviewOrderItems