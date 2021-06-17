import 'materialize-css';
import { Button} from 'react-materialize';
import { useState} from "react";

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
        <div>
            <img src={props.image} alt={props.name}/>
            <h1>
                {props.name}
            </h1>
            <h2>
                {props.description}
            </h2>
            <h3>
                £{props.price.$numberDecimal}
            </h3>
            <Button className='waves-effect waves-light btn-small black white-text' onClick={removeFromQuantity}>
                -
            </Button>
            <h4 style={{
                display: 'inline'
            }}>
                {quantity}
            </h4>
            <Button className='waves-effect waves-light btn-small black white-text ' onClick={addToQuantity}
                    style={{margin: '10px'}}>
                +
            </Button>
            <Button className='waves-effect waves-light btn-small black white-text ' onClick={ () => addItemToOrder(order)}
                    style={{margin: '10px'}}>
                Add Item To Order
            </Button>
            <Button onClick={ () => removeItemFromOrder(removeFromOrder)}
                    style={{margin: '10px'}}>
                <i className="material-icons">delete</i>
            </Button>
        </div>
    )
}

export default MenuItem