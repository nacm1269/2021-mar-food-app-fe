import 'materialize-css';
// import { Button, Card, Row, Col } from 'react-materialize';

const MenuItem = (props) => {
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
        </div>
    )
}

export default MenuItem;