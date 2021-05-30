import React from 'react';
import {Container,Col,Row, Card,Form} from 'react-bootstrap'
function Signup(){
    
    return(
        <>
        <Container className="maindiv">
            <Row className='fullrow'>
                <Col>
                <Card className="bg-dark sm text-white rel">
                    <Card.Header className="headercenter">
                        Signup
                    </Card.Header>
                    <Card.Body>
                        <Form>
                            <Form.Group >
                                <Form.Label className='align-left'>UserName</Form.Label>
                                <Form.Control type="text"/>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text"/>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password"/>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Re-Enter Password</Form.Label>
                                <Form.Control type="password"/>
                            </Form.Group>
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