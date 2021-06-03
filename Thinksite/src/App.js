import { React, useState, useEffect } from 'react';
import { Link, Route, BrowserRouter as Router, Switch, useHistory } from 'react-router-dom'
import './App.css';
import { Container, Row, Col, Card, CardDeck, Button } from 'react-bootstrap';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Twlogo from './Twlogo.png';
import PP from './PP.jpg'
import Speakers from './Components/Speakers'
import Partners from './Components/Partners'
import Timeline from './Components/Timeline'
import dots from './dots.png'
import tpattern from './tpattern.png'
import { Parallax, Background } from 'react-parallax';
import Signup from './Components/signup.js'

function App() {
  const [y, sety] = useState()
  const testparralex = () => {
    sety(window.pageYOffset)
    console.log(y)
  }
  useEffect(() => {
    window.addEventListener('scroll', testparralex)
    return () => {
      window.removeEventListener('scroll', testparralex)
    }
  }, [])

  window.addEventListener('scroll', testparralex)
  const history=useHistory();
  const signuphandle=()=>{history.push('/signup')}
  return (
    <div className="App" >
      <div style={
        {
          position: 'absolute',
          transform: `translateY(${y * 0.5}px)`
        }
      }>

      </div>

      <div className='bg dot'></div>
      <div style={{
        position: 'absolute',
        transform: `translateY(${y * 0.1}px)`

      }} className='tria4'></div>
      <div style={{
        position: 'absolute',
        transform: `translateY(${y * 0.1}px)`

      }} className='tria5'></div>
      <Container fluid className='con' >
        <Row className='sec1'>
          <Col md-12 className='vercenter'>
            <Row className='alcenter'>
              <Col className='sldiv' md-5>
                <h1 className='sl1 rel w100'>SRI LANKA'S</h1>
                <h1 className='sl1 rel w100'>BIGGEST</h1>
                <h1 className='sl1 rel w800 twyellow'>IDEATHON</h1>
              </Col>
              <Col md-2>
                <h1 className='midline rel w300'>|</h1>
              </Col>
              <Col md-5>
                <fadeIn><img src={Twlogo} className='imglogo' alt='imagelogo'></img></fadeIn>

              </Col>
            </Row>
            <Row className='sec1-1'>
              <Col md-12>
                <div className='rel w200 date'>
                  <h1>ON</h1>
                  <h1>28 Nov - 15 Oct.</h1>
                </div>
              </Col>
            </Row>
            <Row className='sec1-1'>
              <Col md-12 className="pt-5">
                <Button variant='warning' ><span className='rel w700' style={{ fontSize: '3vh', padding: '10px' }} onClick={signuphandle}>Register</span></Button>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className='sec2 mt-5'>
          <Col>
            <Row className='mb-5'>
              <Col>
                <h1><span style={{ fontSize: '6vh' }}>Guest Speakers</span></h1>
              </Col>
            </Row>
            <Speakers />
          </Col>
        </Row>
        <Row className='sec3'>
          <Col>
            <Row>
              <Col className='mb-5'>
                <h1><span style={{ fontSize: '6vh' }}>Timeline</span></h1>
              </Col>
            </Row>
            <Timeline />
          </Col>
        </Row>
        <Row className='sec4'>
          <Col>
            <Row>
              <Col className='mb-5'>
                <h1>Our Partners</h1>
              </Col>
            </Row>
            <Partners />
          </Col>
        </Row>
      </Container>

    </div>
  );
}

export default App;
