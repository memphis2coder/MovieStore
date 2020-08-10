import React from 'react'
import {Jumbotron, Button, Form} from 'react-bootstrap';

export default function search() {

    function handleSubmit(e) {
        e.preventDefault();
    };

    

    return (
        <div>
            <Jumbotron className="text-center bg-transparent">
                <h1>Search for movies</h1>
                <br></br>
                <Form onSubmit={handleSubmit}>
                    <Form.Control 
                        type="email" 
                        placeholder="search for a movie"
                        

                        />
                    <br></br>
                    <Button variant="primary" type="submit">
                        Search
                    </Button>
                </Form>
            </Jumbotron>
        </div>
    )
}
