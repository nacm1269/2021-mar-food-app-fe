import React from 'react'
import {useEffect, useState} from "react";
import {Button} from "react-materialize";

const EditQuantity = (props) => {
    const menuItemId = props.menuItemId
    const [quantity, setQuantity] = useState(props.quantity)
    const [orderItem, setOrderItem] = useState('')
    const orderId = localStorage.getItem('orderId')

    const getDish = async () => {
        const data = await fetch("http://localhost:3001/dishes/individualDishes/" + menuItemId)
        return await data.json()
    }

    useEffect(() => {
        getDish()
            .then(json => {
                setOrderItem(json.data)
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
         "menuItemId": menuItemId,
         "quantity": quantity
    }

    const editOrderQuantity = async (editedOrder) => {
        console.log(editedOrder)
        if (editedOrder.quantity !== 0) {
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
            <h1>{orderItem.name}</h1>
            <Button className='waves-effect waves-light btn-small black white-text ' onClick={decrementQuantity}
                    style={{margin: '10px'}}>
                -
            </Button>
            <h4 style={{
                display: 'inline'
            }}>
                {quantity}
            </h4>
            <Button className='waves-effect waves-light btn-small black white-text ' onClick={incrementQuantity}
                    style={{margin: '10px'}}>
                +
            </Button>

            <Button className='waves-effect waves-light btn-small black white-text ' onClick={ () => editOrderQuantity(editedOrder)}
                    style={{margin: '10px'}}>
                Confirm new quantity
            </Button>
        </div>
            )

}


export default EditQuantity