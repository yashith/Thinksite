import React from 'react';
import {Row,Col,Card} from 'react-bootstrap'
import PP from '../PP.jpg'

function Speakers() {
    return(
        <Row className='justify-content-center'>
        <Col className='col-md-auto'>
          <Card className='speakers rel' style={{ width: '15rem' }}>
            <Card.Img variant="top" src={PP} className='speaker img' />
            <Card.Body>
              <Card.Title ><span className="w700">Unknown</span></Card.Title>
              <Card.Text>Incididunt mollit ex labore nostrud in pariatur ex mollit excepteur ad exercitation pariatur. </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className='col-md-auto'>
          <Card className='speakers rel' style={{ width: '15rem' }}>
            <Card.Img variant="top" src={PP} className='speaker img' />
            <Card.Body>
              <Card.Title ><span className="w700">Unknown2</span></Card.Title>
              <Card.Text>Incididunt mollit ex labore nostrud in pariatur ex mollit excepteur ad exercitation pariatur. </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className='col-md-auto'>
          <Card className='speakers rel' style={{ width: '15rem' }}>
            <Card.Img variant="top" src={PP} className='speaker img' />
            <Card.Body>
              <Card.Title ><span className="w700">Unknown2</span></Card.Title>
              <Card.Text>Incididunt mollit ex labore nostrud in pariatur ex mollit excepteur ad exercitation pariatur. </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className='col-md-auto'>
          <Card className='speakers rel' style={{ width: '15rem' }}>
            <Card.Img variant="top" src={PP} className='speaker img' />
            <Card.Body>
              <Card.Title ><span className="w700">Unknown2</span></Card.Title>
              <Card.Text>Incididunt mollit ex labore nostrud in pariatur ex mollit excepteur ad exercitation pariatur. </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    )
}

export default Speakers;