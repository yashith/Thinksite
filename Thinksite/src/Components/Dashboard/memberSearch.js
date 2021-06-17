import React, { useState, useEffect } from 'react';
import { Card, Form, ListGroup, Button } from 'react-bootstrap';
import API from '../../Services/Base';
import './dashboard.css'

export default function MemberSearch(props) {
    const [searchval, setsearchval] = useState([])
    const conf = {
        "Content-type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("token")}`
    }
    async function handleChange(event) {
        let sr = event.target.value
        await API.get('user/search/' + sr, { headers: conf })
            .then(res => setsearchval(res.data))
    }
    async function sendReq(id){
        await API.post('requests/',{to:id,team:props.teamid},{ headers: conf })
        .then(res=>console.log(res))
        props.reload();
 
    }
    function Renderlist() {
        if (searchval) {
            return (
                <ListGroup>
                    {searchval.map(member => {
                        return (
                            <ListGroup.Item key={member._id} className='listgroup-flex'>
                                <div className="listgroip-details">
                                    <div className="detail-div"> {member.name}</div>
                                    <div>{member.institute}</div>
                                </div>
                                <div><Button variant='success' onClick={()=>{sendReq(member._id)}}>Send request</Button></div>
                            </ListGroup.Item>)
                    })}
                </ListGroup>
            )
        }
        else {
            return (null)
        }
    }
    useEffect(() => {
        
    }, [searchval])
    return (
        <Card>
            <Card.Header>
                <Form>
                    <Form.Control type='text' placeholder="search by name" onChange={handleChange} />
                </Form>
            </Card.Header>
            <Card.Body>
                <Renderlist />
            </Card.Body>
        </Card>
    )
}