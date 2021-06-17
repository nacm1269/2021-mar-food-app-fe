import React from 'react'
import {useEffect, useState} from "react";
import {Button} from "react-materialize";

const EditQuantity = () => {
    const [menuItemId, setMenuItemId] = useState ('')
    const [quantity, setQuantity] = useState(0)
    const orderId = localStorage.getItem('orderId')

    const getStarters = async () => {

        const data = await fetch(`http://localhost:3001/orders/{orderId}`)
        return await data.json()
    }

    useEffect(() => {
        getStarters()
            .then(json => {
                setMenuItemId(data.data[0].orderItems[0].menuItemId)
                setQuantity(data.data[0].orderItems[0].quantity)
            })
    }, [])


    const incrementQuantity = () => {
        setQuantity(quantity + 1)
    }

    const decrementQuantity = () => {
        if (quantity !== 0 ) {
            setQuantity(quantity - 1)
        }
    }

     const editedOrder = {
        "orderId": orderId,
        "orderItems": [
        {
            "menuItemId": menuItemId,
            "quantity": quantity
        }
                    ]
    }

    const editOrderQuantity = async (editedOrder) => {
        console.log(editedOrder)
        if (editedOrder.orderItems[0].quantity !== 0) {
            await fetch('http://localhost:3001/orders/editQuantity', {
                "method": "PUT",
                "body": JSON.stringify(editedOrder),
                "headers":
                    {
                        "content-type": "application/JSON"
                    }
            })
                .then(res => res.json())
                .then((data) => {
                })
        }
        else {
            alert('There was an error submitting your order, please try again.')
            console.error('There was an error!');
        }
    }
    return (
        <div>
    <Button className='waves-effect waves-light btn-small black white-text ' onClick={incrementQuantity}
            style={{margin: '10px'}}>
        +
    </Button>

        <h4 style={{
            display: 'inline'
        }}>
            {quantity}
        </h4>

        <Button className='waves-effect waves-light btn-small black white-text ' onClick={decrementQuantity}
                style={{margin: '10px'}}>
            -
        </Button>

    <Button className='waves-effect waves-light btn-small black white-text ' onClick={ () => editOrderQuantity(editedOrder)}
            style={{margin: '10px'}}>
        Confirm new quantity
    </Button>
        </div>
    )

}


export default EditQuantity