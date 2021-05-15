import React from 'react'
import { Row, Col } from 'react-bootstrap'
import boc from './Logos/boc.png'
import cb from './Logos/cb.png'
import hatch from './Logos/hatch.png'
import icta from './Logos/Icta.png'
import jkx from './Logos/JKX.png'
import lseg from './Logos/lseg.png'
import mm from './Logos/mm.png'
import './partners.css'

export default function Partners() {
    return (
        <>
            <Row>
                <Col>
                    <img src={boc} class='logo' />
                </Col>
                <Col>
                    <img src={cb} class='logo' />
                </Col>
                <Col>
                    <img src={hatch} class='logo hatch  ' />
                </Col>
            </Row>
        </>
    )
}