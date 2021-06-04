import React, { useState } from 'react';
import { Container, Col, Row, Card, Form, Button } from 'react-bootstrap'
import './loginstyle.css'
import { login } from '../Services/Login_service'
import { checkuser } from '../Services/Login_service'
import { useFormik } from 'formik'

const validate = values => {
    const errors = {};

    if (!values.username) {
        errors.username = 'Required';
    }
    if (!values.password) {
        errors.password = 'Required';
    }
    return (errors)
}

function Login() {
    const [uperror, setuperror] = useState(true)
    async function loginuser(values) {
        let res =await login(values)
        console.log(res)
        if(!res.success){
            setuperror(false)
        }
        else if(res.success){
            setuperror(true)
        }
    }
    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
        },
        validate,
        onSubmit: values => {
            // signuppost(values)
            loginuser(values)
        }
    })
    return (
        <>
            <Container className="maindiv">
                <Row className='fullrow d-flex align-items-center justify-content-center'>
                    <Col md={4} sm={10} className="justify-content-center">
                        <Card className="bg-dark sm text-white rel card-style">
                            <Card.Header className="headercenter">
                                Login
                    </Card.Header>
                            <Card.Body>
                                <Form onSubmit={formik.handleSubmit}>
                                    <Form.Group >
                                        <Form.Label className='align-left'>UserName</Form.Label>
                                        <Form.Control type="text" id='username' name='username' onChange={formik.handleChange} value={formik.values.username} />
                                        {formik.errors.username ? <small className="red"><span>{formik.errors.username}</span></small> : null}
                                       
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" id='password' name='password' onChange={formik.handleChange} value={formik.values.password} />
                                        {formik.errors.password ? <small className="red"><span>{formik.errors.password}</span></small> : null}
                                        {uperror ? null : <small className="red"><span>Username or Password is wrong</span></small>}
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Check type="checkbox" label="Remember me" />
                                    </Form.Group>
                                    
                                    <div className="btnsub">
                                        <Button type='submit' variant='success'>Login</Button>
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
export default Login