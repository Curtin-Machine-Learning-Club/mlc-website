import {useHistory} from 'react-router-dom';
import {Button} from "react-bootstrap";


const LinkButton = (props) => {
    const history = useHistory();
    const handleClick = () => history.push({pathname: props.route, state: {component: props.component}});

    return (
        <Button onClick = {handleClick}>{props.name}</Button>
    );
}

export default LinkButton;