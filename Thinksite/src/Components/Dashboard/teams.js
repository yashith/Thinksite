import { React, useState } from 'react';
import { Button, Form, Modal, Tabs, Tab } from 'react-bootstrap'
import { Formik, useFormik } from 'formik';
import { Submitteam } from '../../Services/team_service';
import './dashboard.css'

export default function Teams() {
    const [is_modal_open, setis_modal_open] = useState(false)
    const open = () => { setis_modal_open(!is_modal_open) }
    /*Submit functio*/
    async function createteam(values){
        let success=await Submitteam(values);
        if(success){
            console.log('success')
            setis_modal_open(false)
        }
        else{
            console.log('failed')
        }
    }
    /*Fomik*/
    const validate = values => {
        const errors = {};
    
        if (!values.name) {
            errors.name = 'Required';
        }
        return (errors)
    }
    const formik = useFormik({
        initialValues: {
            name: '',
        },
        validate,
        onSubmit: values => {
            createteam(values);
        }
    })

    return (
        <div className='tabswrapper'>
            <Tabs defaultActiveKey="Teams" transition={false} id="noanim-tab-example">
                <Tab eventKey="Teams" title="Teams">

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
                                <Form onSubmit={formik.handleSubmit}>
                                    <Form.Group>
                                        <Form.Label>Team Name</Form.Label>
                                        <Form.Control type='text' id='name' name='name' onChange={formik.handleChange} value={formik.values.name} />
                                        {formik.errors.name ? <small className="red"><span>{formik.errors.name}</span></small> : null}
                                    </Form.Group>
                                    <div className="btnsub">
                                        <Button type='submit' variant='success'>Create</Button>
                                    </div>
                                </Form>
                            </Modal.Body>
                        </Modal>
                    </div>
                </Tab>
                <Tab eventKey="Requests" title="Requests">
                    <div className='members'>
                        <div className='membinner'>
                            <label className='rel lab1'>You have no requests</label>
                        </div>
                    </div>
                </Tab>
            </Tabs>
        </div>

        /*

        */
    )
}