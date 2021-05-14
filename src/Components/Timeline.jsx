import React from 'react'
import {Row,Col} from 'react-bootstrap'
import './timeline.css'

export default function Timeline(){
    return(
    <Row>
        <Col>
            <div className="line">
                <hr className="linew"/>
            </div>
            <div className="circle"></div>
        </Col>
    </Row>
    )
}