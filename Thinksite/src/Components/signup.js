import React from 'react';
import { Container, Col, Row, Card, Form, Button } from 'react-bootstrap'
import './signupstyle.css'
function Signup() {

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
                                <Form>
                                    <Form.Group >
                                        <Form.Label className='align-left'>UserName</Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>Re-Enter Password</Form.Label>
                                        <Form.Control type="password" />
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