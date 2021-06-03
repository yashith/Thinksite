import React, { useState } from 'react';
import { Container, Col, Row, Card, Form, Button } from 'react-bootstrap'
import './loginstyle.css'
import { signuppost, checkemail, checkuser } from '../Services/Signup_service'
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
    const [eu, seteu] = useState({ email: false, username: false })
    async function checkandsignup(values) {
        let e = await checkemail(values.email)
        let u = await checkuser(values.username)
        if (e & u) {
            seteu({ email: 'Email already exist', username: 'Username already exist' })
            return (null)
        }
        else if (e) {
            seteu({ email: 'Email already exist', username: false })
        }
        else if (u) {
            seteu({ email: false, username: 'Username already exist' })

        }
        else {
            seteu({ email: false, username: false })
            await signuppost(values)
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
            checkandsignup(values)
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
                                        {eu.username ? <small className="red"><span>{eu.username}</span></small> : null}
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" id='password' name='password' onChange={formik.handleChange} value={formik.values.password} />
                                        {formik.errors.password ? <small className="red"><span>{formik.errors.password}</span></small> : null}
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Check type="checkbox" label="Remember me" />
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
export default Login