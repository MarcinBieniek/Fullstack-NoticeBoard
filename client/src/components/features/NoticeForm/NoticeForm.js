import {useState} from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import { useForm } from 'react-hook-form';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const PostForm = ({
    action,
    actionText, 
    ...props}
) => {

    const actualTime = Date.now();
    const actualTime2 = new Date(actualTime);
    const publicationDate = actualTime2.toLocaleDateString(); 

    const [title, setTitle] = useState(props.title || '');
    const [description, setDescription] = useState(props.description || '');
    const [location, setLocation] = useState(props.locatoion || '');
    const [price, setPrice] = useState(props.price || '');
    const [bedrooms, setBedrooms] = useState(props.bedrooms || '');
    const [bathrooms, setBathrooms] = useState(props.bathrooms || '');
    const [rooms, setRooms] = useState(props.rooms || '');
    const [meters, setMeters] = useState(props.meters || '');
    const [photo, setPhoto] = useState(props.image || '');
    const [user, setUser] = useState(props.user || '');
    const [date, setDate] = useState(props.date || publicationDate)
    
    console.log('date is', date)

    const [dateError, setDateError] = useState(false);
    const [contentError, setContentError] = useState(false);

    const handleSubmit = (e) => {
        
        setContentError(!description);
        setDateError(!date);
        if(description && date) {
            action({ title, description, location, price, bedrooms, bathrooms, rooms, meters, photo, user, date });
        }
      };

    const { register, handleSubmit: validate, formState: { errors } } = useForm();

    return (
        <Form onSubmit={validate(handleSubmit)}>
            
            <Form.Group className="mb-3 w-50" controlId="noticeTitle">
                <Form.Label>Title</Form.Label>
                <Form.Control 
                    {...register("title", { required: true, minLength: 3 })}
                    value={title} 
                    onChange={e => setTitle(e.target.value)} 
                    type="text" 
                    placeholder="Enter title" 
                />
                {errors.title && <small className="d-block form-text text-danger mt-2">This field is required and must have at least 3 characters</small>}
            </Form.Group>
            
            <Form.Group className="mb-3 w-50" controlId="noticeLocation">
                <Form.Label>Location</Form.Label>
                <Form.Control 
                    {...register("location", { required: true, minLength: 1 })}
                    value={location} 
                    onChange={e => setLocation(e.target.value)} 
                    placeholder="Write city name"
                />
                {errors.des && <small className="d-block form-text text-danger mt-2">This field is required</small>}
            </Form.Group>
            
            <Form.Group className="mb-3 w-50" controlId="noticePrice">
                <Form.Label>Price</Form.Label>
                <Form.Control 
                    {...register("price", { required: true, minLength: 1 })}
                    value={price} 
                    onChange={e => setPrice(e.target.value)} 
                    placeholder="Write short description"
                />
                {errors.des && <small className="d-block form-text text-danger mt-2">This field is required</small>}
            </Form.Group>

            <Form.Group className="mb-3 w-50" controlId="noticeBedrooms">
                <Form.Label>Bedrooms</Form.Label>
                <Form.Control 
                    {...register("bedrooms", { required: true, minLength: 1 })}
                    value={bedrooms} 
                    onChange={e => setBedrooms(e.target.value)} 
                    placeholder="Write number of bedrooms"
                />
                {errors.des && <small className="d-block form-text text-danger mt-2">This field is required</small>}
            </Form.Group>

            <Form.Group className="mb-3 w-50" controlId="noticeBathrooms">
                <Form.Label>Bathrooms</Form.Label>
                <Form.Control 
                    {...register("bathrooms", { required: true, minLength: 1 })}
                    value={bathrooms} 
                    onChange={e => setBathrooms(e.target.value)} 
                    placeholder="Write number of bathrooms"
                />
                {errors.des && <small className="d-block form-text text-danger mt-2">This field is required</small>}
            </Form.Group>

            <Form.Group className="mb-3 w-50" controlId="noticeRooms">
                <Form.Label>Rooms</Form.Label>
                <Form.Control 
                    {...register("rooms", { required: true, minLength: 1 })}
                    value={rooms} 
                    onChange={e => setRooms(e.target.value)} 
                    placeholder="Write number of rooms"
                />
                {errors.des && <small className="d-block form-text text-danger mt-2">This field is required</small>}
            </Form.Group>

            <Form.Group className="mb-3 w-50" controlId="noticeMeters">
                <Form.Label>Meters</Form.Label>
                <Form.Control 
                    {...register("meters", { required: true, minLength: 1 })}
                    value={meters} 
                    onChange={e => setMeters(e.target.value)} 
                    placeholder="Write number of quadratmeters"
                />
                {errors.des && <small className="d-block form-text text-danger mt-2">This field is required</small>}
            </Form.Group>

            <Form.Group className="mb-3 w-50" controlId="photo">
                <Form.Label>Photo</Form.Label>
                <Form.Control 
                    type='file'
                    onChange={(e) => setPhoto(e.target.files[0])}
                    placeholder="Add photo"
                />
            </Form.Group>

            <Form.Group className="mb-3 w-50" controlId="noticeUser">
                <Form.Label>User</Form.Label>
                <Form.Control 
                    {...register("user", { required: true, minLength: 3 })}
                    value={user} 
                    onChange={e => setUser(e.target.value)} 
                    type="text" 
                    placeholder="Enter username" 
                />
                {errors.author && <small className="d-block form-text text-danger mt-2">This field is required and must have at least 3 characters</small>}
            </Form.Group>   

            <Form.Group className="mb-4" controlId="noticeDescription">
                <Form.Label value={description}>Description</Form.Label>             
                <ReactQuill
                    theme="snow"   
                    value={description} 
                    onChange={setDescription}
                    placeholder="Type here" 
                />
                {contentError && <small className="d-block form-text text-danger mt-2">Content can't be empty</small>}
            </Form.Group>

            <Button as="input" type="submit" value={actionText} />
        </Form>
    )
}

export default PostForm