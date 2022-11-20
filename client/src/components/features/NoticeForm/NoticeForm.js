import {useState} from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import shortid from 'shortid';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useForm } from 'react-hook-form';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const PostForm = ({
    action,
    actionText, 
    ...props}
) => {

    const _id = shortid();
    const [title, setTitle] = useState(props.title || '');
    const [author, setAuthor] = useState(props.author || '');
    const [date, setDate] = useState(props.date || '');
    const [text, setText] = useState(props.text || '');
    const [foto, setFoto] = useState('');
    const [price, setPrice] = useState(props.price || '');
    const [city, setCity] = useState(props.city || '');
    const [dateError, setDateError] = useState(false);
    const [contentError, setContentError] = useState(false);

    // handle sumbit rework start

    const handleSubmit = (e) => {
        
        setContentError(!text);
        setDateError(!date);
        if(text && date) {
            action({ _id, title, author, date, price, text, foto, city });
        }
      };

    // handle submit rework end
    // check below

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
            
            <Form.Group className="mb-3 w-50" controlId="noticeAuthor">
                <Form.Label>Author</Form.Label>
                <Form.Control 
                    {...register("author", { required: true, minLength: 3 })}
                    value={author} 
                    onChange={e => setAuthor(e.target.value)} 
                    type="text" 
                    placeholder="Enter author" 
                />
                {errors.author && <small className="d-block form-text text-danger mt-2">This field is required and must have at least 3 characters</small>}
            </Form.Group>
            
            <Form.Group className="mb-3 w-50" controlId="noticeDate">
                <Form.Label>Date</Form.Label>
                <DatePicker 
                    selected={date}
                    onChange={(date) => setDate(date)} 
                    type="date" 
                    placeholder="Enter date"
                />
                {dateError && <small className="d-block form-text text-danger mt-2">Date can't be empty</small>}
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

            <Form.Group className="mb-3 w-50" controlId="foto">
                <Form.Label>Foto</Form.Label>
                <Form.Control 
                    type='file'
                    onChange={(e) => setFoto(e.target.files[0])}
                    placeholder="Write photo name"
                />
            </Form.Group>

            <Form.Group className="mb-3 w-50" controlId="noticeCity">
                <Form.Label>City</Form.Label>
                <Form.Control 
                    {...register("city", { required: true, minLength: 1 })}
                    value={city} 
                    onChange={e => setCity(e.target.value)} 
                    placeholder="Write city name"
                />
                {errors.des && <small className="d-block form-text text-danger mt-2">This field is required</small>}
            </Form.Group>

            <Form.Group className="mb-4" controlId="noticeText">
                <Form.Label value={text}>Description</Form.Label>             
                <ReactQuill
                    theme="snow"   
                    value={text} 
                    onChange={setText}
                    placeholder="Type here" 
                />
                {contentError && <small className="d-block form-text text-danger mt-2">Content can't be empty</small>}
            </Form.Group>


            <Button as="input" type="submit" value={actionText} />
        </Form>
    )
}

export default PostForm