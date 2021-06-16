import React, { useState,useEffect } from 'react';
import { Card, Form } from 'react-bootstrap';
import API from '../../Services/Base';

export default function MemberSearch() {
    const [searchval, setsearchval] = useState([])
    async function handleChange(event){
        let sr =event.target.value
        const conf = {
            "Content-type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
        await API.get('user/search/'+sr, { headers: conf })
        .then(res =>  setsearchval(res.data))
        
       
    }
    function Renderlist(){
        if(searchval){
            return(
                <ul>
                    {searchval.map(member=>{
                        return(<li key={member.id}>{member.name}-{member.institute}</li>)
                    })}
                </ul>
            )
        }
        else{
            return(null)
        }
    }
    useEffect(() => {
        console.log(searchval)
    }, [searchval])
    return (
        <Card>
            <Card.Header>
                <Form>
                    <Form.Control type='text' placeholder="search by name" onChange={handleChange} />
                </Form>
            </Card.Header>
            <Card.Body>
                <Renderlist/>
            </Card.Body>
        </Card>
    )
}