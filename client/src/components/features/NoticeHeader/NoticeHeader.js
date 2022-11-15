import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

//import { dateToStr } from '../../utils/dateToStr';

const NoticeHeader = props => {

    return (
        <Col>
            <Card className="p-2 mt-3">
                <Card.Title>{props.title}</Card.Title>
                <Card.Text className={"m-0"}><span className={"fw-bold"}>Description:</span>{' ' + props.text}</Card.Text>
                <Card.Text className={"m-0"}><span className={"fw-bold"}>Author:</span>{' ' + props.author}</Card.Text>
                <Card.Text className={"m-0"}><span className={"fw-bold"}>Published:</span>{' ' + props.date}</Card.Text>
                <Card.Text className={"m-0"}><span className={"fw-bold"}>Price:</span> {props.price}</Card.Text>
                <Card.Text>{props.shortDescription}</Card.Text>    

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