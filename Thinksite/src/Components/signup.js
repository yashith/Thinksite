import React,{useState} from 'react';
import { Container, Col, Row, Card, Form, Button } from 'react-bootstrap'
import './signupstyle.css'
import {signuppost,checkemail,checkuser} from '../Services/Signup_service'
import { useFormik } from 'formik'

const validate = values => {
    const errors = {};
    if (!values.name) {
        errors.name = 'Required';
    }
    if (!values.username) {
        errors.username = 'Required';
    }
    if (!values.password) {
        errors.password = 'Required';
    }
    else if (values.password.length <= 8) {
        errors.password = 'Password must be more then 8 characters'
    }
    if (!values.institute) {
        errors.institute = 'Required';
    }
    if (!values.email) {
        errors.email = 'Required';
    }
    if (!values.category) {
        errors.category = 'Required';
    }

    return(errors)
}

function Signup() {
    const [eu, seteu] = useState({email:false,username:false})
    async function checkandsignup(values){
        let e=await checkemail(values.email)
        let u=await checkuser(values.username)
        if(e & u ){
            seteu({email:'Email already exist',username:'Username already exist'})
            return(null)
        }
        else if(e){
            seteu({email:'Email already exist',username:false})
        }  
        else if(u){
            seteu({email:false,username:'Username already exist'})
            
        }
        else{
            seteu({email:false,username:false})
            await signuppost(values)
        }
        
    }
    const formik = useFormik({
        initialValues: {
            username: '',
            name: '',
            password: '',
            institute: '',
            email: '',
            category: '',
        },
        validate,
        onSubmit: values => {
            // signuppost(values)
            checkandsignup(values)
        }
    })
    return (
        <>
            <Container className="maindiv">
                <Row className='fullrow d-flex align-items-center justify-content-center'>
                    <Col md={4} sm={12} className="justify-content-center">
                        <Card className="bg-dark sm text-white rel card-style">
                            <Card.Header className="headercenter">
                                Signup
                    </Card.Header>
                            <Card.Body>
                                <Form onSubmit={formik.handleSubmit}>
                                    <Form.Group >
                                        <Form.Label className='align-left'>UserName</Form.Label>
                                        <Form.Control type="text" id='username' name='username' onChange={formik.handleChange} value={formik.values.username} />
                                        {formik.errors.username?<small className="red"><span>{formik.errors.username}</span></small>:null}
                                        {eu.username?<small className="red"><span>{eu.username}</span></small>:null}
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control type="text" id='name' name='name' onChange={formik.handleChange} value={formik.values.name} />
                                        {formik.errors.name?<small className="red"><span>{formik.errors.name}</span></small>:null}
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type="email" aria-describedby="emailHelp" id='email' name='email' onChange={formik.handleChange} value={formik.values.email} />
                                        {formik.errors.email?<small className="red"><span>{formik.errors.email}</span></small>:null}
                                        {eu.email?<small className="red"><span>{eu.email}</span></small>:null}
                                        
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" id='password' name='password' onChange={formik.handleChange} value={formik.values.password} />
                                        {formik.errors.password?<small className="red"><span>{formik.errors.password}</span></small>:null}
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>Institute</Form.Label>
                                        <Form.Control type="text" id='institute' name='institute' onChange={formik.handleChange} value={formik.values.institute} />
                                        {formik.errors.institute?<small className="red"><span>{formik.errors.institute}</span></small>:null}
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>Category</Form.Label>
                                        <Form.Control as="select" id='category' name='category' onChange={formik.handleChange} value={formik.values.category} >
                                            <option value="School">School</option>
                                            <option value="University">University</option>
                                        </Form.Control>
                                        {formik.errors.category?<small className="red"><span>{formik.errors.category}</span></small>:null}
                                    </Form.Group>
                                    <div className="btnsub">
                                        <Button type='submit' variant='success'>Signup</Button>
                                    </div>

                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default Signup