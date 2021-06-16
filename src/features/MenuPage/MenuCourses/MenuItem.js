import 'materialize-css';
import { Button} from 'react-materialize';
import { useState} from "react";


const MenuItem = (props) => {

        const [menuItemId, setMenuItemId] = useState (props.menuItemId)
        const [quantity, setQuantity] = useState(0)

        const orderId = localStorage.getItem('orderId')

        const addQuantityAndItem = () => {
            setQuantity(quantity + 1)
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

    // const logOrder = () => {
    //     console.log(order)
    // }

    const addItemToOrder = (order) => {

        fetch('http://localhost:3000/orders', {
            "method": "PUT",
            "body": JSON.stringify(order),
            "headers":
                {
                    "content-type": "application/JSON"
                }
                    .then(res => res.json())
                    .then((data) => {
                        //do stuff with your data
                    })
        })
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
            {/*<Button className='waves-effect waves-light btn-small black white-text' onClick={decrementCount}>*/}
            {/*        /!*onClick we want to take the menu item's id from props*!/*/}
            {/*        /!*count the amount of times this button is clicked (what function?)*!/*/}
            {/*        /!*pass this number and the menu item id to the 'AddToOrder' component*!/*/}
            {/*        /!*store the menu item id and clicks as a quantity in an object that will populate the 'order items' array*!/*/}
            {/*    -*/}
            {/*</Button>*/}
            <h4 style={{
                display: 'inline'
            }}>
                {quantity}
            </h4>
            <Button className='waves-effect waves-light btn-small black white-text ' onClick={addQuantityAndItem}
                    style={{margin: '10px'}}>
                +
            </Button>
            <Button className='waves-effect waves-light btn-small black white-text ' onClick={addItemToOrder}
                    style={{margin: '10px'}}>
                Add Item To Order
            </Button>

        </div>
    )
}

export default MenuItem