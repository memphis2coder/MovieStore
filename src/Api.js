import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Jumbotron, Button, Form} from 'react-bootstrap';

const apiKey = process.env.REACT_APP_API_KEY

export default function Api() {
    const [post, setPost] = useState({})
    const [id, setId] = useState("");
    const [idFromButtonClick, setIdFormButtonClick] = useState("")

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${idFromButtonClick}&page=1&include_adult=false`)
            .then(res => {
                setPost(res.data.results[0])
                console.log(res.data.results)
            })
            .catch(err => {
                console.log(err)
            })
    }, [idFromButtonClick])

    function handleSubmit(e) {
        e.preventDefault();
        console.log("its working");
    };

    function handleClick() {
        setIdFormButtonClick(id);
    }

    return (
        <div>
            <Jumbotron className="text-center bg-transparent">
                <Form onSubmit={handleSubmit}>
                    <Form.Control 
                        type="text" 
                        placeholder="search for a movie"
                        value={id}
                        onChange={e => setId(e.target.value)}
                    />
                    <br></br>
                    <Button 
                        variant="primary" 
                        type="submit"
                        onClick={handleClick}
                    >
                        Search
                    </Button>
                </Form>
            </Jumbotron>

            <ul>
                <li key={post.id}>
                    {post.title}
                </li>
                <p>{post.release_date}</p>
            </ul>
            

            
        </div>
    )
}


