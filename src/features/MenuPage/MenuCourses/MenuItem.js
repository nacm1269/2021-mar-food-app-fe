import 'materialize-css';
import { Button} from 'react-materialize';

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
            <Button className='waves-effect waves-light btn-large black white-text'>
                +
            </Button>
        </div>
    )
}

export default MenuItem;