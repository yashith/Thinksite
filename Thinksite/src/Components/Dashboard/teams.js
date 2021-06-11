import React from 'react';
import {Button} from 'react-bootstrap'
import './dashboard.css'

export default function Teams() {
    return (
        <div className='members'>
            <div className='membinner'>
                <label className='rel lab1'>You have no teams / <Button variant="outline-success" size='sm'> Create</Button></label>
            </div>
        </div>
    )
}