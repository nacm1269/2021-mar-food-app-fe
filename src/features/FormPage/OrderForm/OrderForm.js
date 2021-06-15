import React, { useState } from "react";

const OrderForm = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');

    console.log(address)

    const formData = {
        'name': name,
        'email': email,
        'address': address
    }

    const resetForm = () => {
        setName(''),
        setEmail(''),
        setAddress('')
    }

    const handleSubmit = (e) => {
        fetch('http://localhost:3002/send', {
            method: "POST",
            body: JSON.stringify(formData),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        }).then(
            (response) => (response.json())
        ).then((response)=> {
            if (response.status === 'success') {
                alert("Message Sent.");
                resetForm()
            } else if(response.status === 'fail') {
                alert("Message failed to send.")
            }
        })

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