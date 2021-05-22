import React from 'react'
import { Row, Col } from 'react-bootstrap'
import './timeline.css'

export default function Timeline() {
    return (
        <Row>
            {/* <Col>
            <div className="line">
                <hr className="linew"/>
            </div>
            <div className="circle"></div>
        </Col> */}
            <Col>
                <div id="content">
                    <ul class="timeline">
                        <li class="event" data-date="12:30 - 1:00pm">
                            <h3>Registration</h3>
                            <p>Get here on time, it's first come first serve. Be late, get turned away.</p>
                        </li>
                        <li class="event" data-date="2:30 - 4:00pm">
                            <h3>Opening Ceremony</h3>
                            <p>Get ready for an exciting event, this will kick off in amazing fashion with MOP & Busta Rhymes as an opening show.</p>
                        </li>
                        <li class="event" data-date="5:00 - 8:00pm">
                            <h3>Main Event</h3>
                            <p>This is where it all goes down. You will compete head to head with your friends and rivals. Get ready!</p>
                        </li>
                        <li class="event" data-date="8:30 - 9:30pm">
                            <h3>Closing Ceremony</h3>
                            <p>See how is the victor and who are the losers. The big stage is where the winners bask in their own glory.</p>
                        </li>
                    </ul>
                </div>
            </Col>
            <Col>
                <div id="content">                  
                    <ul class="timeline">
                        <li class="event" data-date="12:30 - 1:00pm">
                            <h3>Registration</h3>
                            <p>Get here on time, it's first come first serve. Be late, get turned away.</p>
                        </li>
                        <li class="event" data-date="2:30 - 4:00pm">
                            <h3>Opening Ceremony</h3>
                            <p>Get ready for an exciting event, this will kick off in amazing fashion with MOP & Busta Rhymes as an opening show.</p>
                        </li>
                        <li class="event" data-date="5:00 - 8:00pm">
                            <h3>Main Event</h3>
                            <p>This is where it all goes down. You will compete head to head with your friends and rivals. Get ready!</p>
                        </li>
                        <li class="event" data-date="8:30 - 9:30pm">
                            <h3>Closing Ceremony</h3>
                            <p>See how is the victor and who are the losers. The big stage is where the winners bask in their own glory.</p>
                        </li>
                    </ul>
                </div>
            </Col>
        </Row>
    )
}