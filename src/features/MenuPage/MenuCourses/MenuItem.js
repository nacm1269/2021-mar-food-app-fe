import 'materialize-css';
import { Button} from 'react-materialize';
import React, { useState} from "react";
import './MenuItem.css'

const MenuItem = (props) => {

    const [menuItemId] = useState (props.menuItemId)
    const [quantity, setQuantity] = useState(0)
    const orderId = localStorage.getItem('orderId')

    const addToQuantity = () => {
        setQuantity(quantity + 1)
    }

    const removeFromQuantity = () => {
                if (quantity !== 0 ) {
                    setQuantity(quantity - 1)
                }
    }

    const order = {
        orderId: orderId,
        orderItems: [
            {
                menuItemId: menuItemId,
                quantity: quantity
            }
        ]
    }

    const addItemToOrder = (order) => {
        console.log(order)
        if (order.orderItems[0].quantity !== 0) {
            fetch('http://localhost:3001/orders/addToOrder', {
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
        }
        else {
            alert('There was an error submitting your order, please try again.')
            console.error('There was an error!');
        }
        }

    const removeFromOrder = {
        orderId: orderId,
        menuItemId: menuItemId,
    }

    const removeItemFromOrder = (order) => {
        console.log(order)
        if (removeFromOrder.menuItemId !== null) {
            fetch('http://localhost:3001/orders', {
                "method": "PUT",
                "body": JSON.stringify(removeFromOrder),
                "headers":
                    {
                        "content-type": "application/JSON"
                    }
            })
                .then(res => res.json())
                .then((data) => {
                })
        }
    }

    return (

    <div className="container center">
        <div className="row">
            <div className={"items-list"}>
            <h3>
                {props.name}
            </h3>
            <h6>
                {props.description}
            </h6>
            <p>
                £{props.price.$numberDecimal}
            </p>
                <div className={"quantityButtons"}>
            <Button id={"quantity-button"} className='waves-effect waves-light btn-small black white-text center-align' onClick={removeFromQuantity} >
                -
            </Button>
                    <div> </div>
            <p>
                {quantity}
            </p>
            <Button id={"quantity-button"} className='waves-effect waves-light btn-small white-text center-align ' onClick={addToQuantity} >

                +
            </Button>
            <Button className='waves-effect waves-light btn-small black white-text ' onClick={ () => addItemToOrder(order)}>
                Add Item To Order
            </Button>
            <Button className={'red center-align'} onClick={ () => removeItemFromOrder(removeFromOrder)}>
                <i className="material-icons">delete</i>
            </Button>
                </div>
            </div>
        </div>
    </div>
    )
}

export default MenuItem