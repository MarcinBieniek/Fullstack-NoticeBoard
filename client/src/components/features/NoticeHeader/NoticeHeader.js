import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { IMGS_URL } from '../../../configs/config';
import { getUser } from '../../../redux/usersReducer';

import { useSelector } from 'react-redux';

const NoticeHeader = props => {

    const user = useSelector(getUser);

    return (
        <Col>
            <Card className="p-2 mt-3">

                <Card.Img
                    variant='top'
                    src={`${IMGS_URL}/${props.photo}`}
                    alt='Apartment photo'
                >    
                </Card.Img>

                <Card.Title>{props.title}</Card.Title>      
                <Card.Text className={"m-0"}><span className={"fw-bold"}>Location:</span>{' '+ props.location}</Card.Text>
                <Card.Text className={"m-0"}><span className={"fw-bold"}>Price:</span>{' ' + props.price + '$'}</Card.Text>
                <Card.Text className={"m-0"}><span className={"fw-bold"}>Bedrooms:</span>{' ' + props.bedrooms}</Card.Text>
                <Card.Text className={"m-0"}><span className={"fw-bold"}>Bathrooms:</span>{' ' + props.bathrooms}</Card.Text>
                <Card.Text className={"m-0"}><span className={"fw-bold"}>Rooms:</span>{' ' + props.rooms}</Card.Text>
                <Card.Text className={"m-0"}><span className={"fw-bold"}>Meters:</span>{' ' + props.meters}</Card.Text>         
                
                { user && user.login === props.user &&
                    <Card.Text><a>This is your add</a></Card.Text>
                }

                <Link to={"/notice/" + props._id}>
                    <Button variant="primary">
                        Details
                    </Button>
                </Link>
            </Card>
        </Col>
    );
};

export default NoticeHeader;