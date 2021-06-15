import React, { useState } from "react";

const OrderForm = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');

    console.log(address)

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch('http://localhost:3001/orders', {
            "method": "POST",
            "body": JSON.stringify(name),
            "headers":
                {
                    "content-type": "application/JSON"
                }
                    .then (res => res.json())
                    .then ((data) => {
                        //do stuff with your data
                    })
        })
    }

    const onNameChange = (e) => {
        setName(e.target.value)
    }

    const onEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const onAddressChange = (e) => {
        setAddress(e.target.value)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" value={name} onChange={onNameChange}/>
            </label>
            <label>
                Email:
                <input type="email" value={email} onChange={onEmailChange}/>
            </label>
            <label>
                Postcode:
                <input type="text" value={address} onChange={onAddressChange}/>
            </label>
            <button type="submit" value="Submit">Confirm Order</button>
        </form>
    );
}

export default OrderForm