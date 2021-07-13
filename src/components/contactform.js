import React from 'react';
import {Form, Button} from 'react-bootstrap'


function Contact(){

    function renderSubmit(event) {
        event.preventDefault();
      };

    return (
        <div>
            <Form>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Name:</Form.Label>
                    <Form.Control id='nameInput' type="text" placeholder="Enter your name" />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email:</Form.Label>
                    <Form.Control type="email" placeholder="Enter your email" />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Message:</Form.Label>
                    <Form.Control placeholder='Enter your message' as="textarea" rows={3} />
                </Form.Group>
                <Form.Group controlId="formBasicRange" >
                    <Form.Label>How are you satisfied with our application?</Form.Label>
                    <Form.Control type="range" />
                </Form.Group>
                <Button variant="warning" type="submit">
                    Submit
                </Button>
            </Form> 
        </div>
    )
}
export default Contact;