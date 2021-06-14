import React from 'react'
import 'materialize-css';
import { Button, Card, Row, Col } from 'react-materialize';

const MenuItem = () => {
    return (
        <div>
            <img src={this.props.image}/>
            <h1>
                {this.props.name}
            </h1>
            <h2>
                {this.props.description}
            </h2>
            <h3>
                {this.props.price}
            </h3>
        </div>
    )
}

export default MenuItem;