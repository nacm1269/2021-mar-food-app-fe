import React, { useState } from "react";
import {Link} from 'react-router-dom'
import './OrderForm.css'
import 'materialize-css';
import { Button} from 'react-materialize';

const OrderForm = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [firstLineAddress, setFirstLineAddress] = useState('');
    const [postcode, setPostcode] = useState('');

    const formData = {
        'name': name,
        'firstLineOfAddress': firstLineAddress,
        'postcode': postcode,
        'email': email
    }

    // const resetForm = () => {
    //     setName('')
    //     setEmail('')
    //     setFirstLineAddress('')
    //     setPostcode('')
    // }

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch('http://localhost:3001/orders', {
                "method": "POST",
                "body": JSON.stringify(formData),
                "headers":
                    {
                        "content-type": "application/JSON"
                    }
            }
        )
            .then(res => res.json())
            .then((data) => {
                if (data.data) {
                    localStorage.setItem("orderId", data.data[0]._id)
                } else {
                    alert('There was an error submitting your order, please try again.')
                    console.error('There was an error!');
                }
            })
            // .catch(() => {
            //     alert('There was an error submitting your order, please try again.')
            //     console.error('There was an error!');
            // })
    }

    const onNameChange = (e) => {
        setName(e.target.value)
    }

    const onEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const onFirstLineAddressChange = (e) => {
        setFirstLineAddress(e.target.value)
    }
    const onPostcodeChange = (e) => {
        setPostcode(e.target.value)
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
                First Line of Address:
                <input type="text" value={firstLineAddress} onChange={onFirstLineAddressChange}/>
            </label>
            <label>
            Postcode:
                <input type="text" value={postcode} onChange={onPostcodeChange}/>
            </label>
            <Link to="/menu">
            <Button type="submit" value="Submit">Confirm Order</Button>
            </Link>
        </form>
    );
}

export default OrderForm