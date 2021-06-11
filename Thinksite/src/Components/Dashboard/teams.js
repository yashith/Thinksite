import { React, useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap'
import './dashboard.css'

export default function Teams() {
    const [is_modal_open, setis_modal_open] = useState(false)
    const open = () => { setis_modal_open(!is_modal_open) }
    return (
        <div className='members'>
            <div className='membinner'>
                <label className='rel lab1'>You have no teams / <Button variant="outline-success" size='sm' onClick={open}> Create</Button></label>
            </div>
            <Modal
                show={is_modal_open}
                onHide={() => setis_modal_open(false)}
                className='ctmodal rel'>
                <Modal.Header closeButton className='bg-dark'>
                    <Modal.Title>Create a team</Modal.Title>
                </Modal.Header >
                <Modal.Body className='bg-dark'>
                    <Form>
                        <Form.Group>
                            <Form.Label>Team Name</Form.Label>
                            <Form.Control type='text' />
                        </Form.Group>
                        <div className="btnsub">
                            <Button type='submit' variant='success'>Login</Button>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    )
}