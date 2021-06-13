import { React, useState, useEffect } from 'react';
import { Button, Form, Modal, Tabs, Tab, Table } from 'react-bootstrap'
import { Formik, useFormik } from 'formik';
import { Submitteam, getTeamdetails } from '../../Services/team_service';
import './dashboard.css'

export default function Teams() {
    const [is_modal_open, setis_modal_open] = useState(false)
    const [team_details, setteam_details] = useState(0)
    const test = 1;
    const open = () => { setis_modal_open(!is_modal_open) }
    /*Submit function*/
    async function createteam(values) {
        let success = await Submitteam(values);
        if (success) {
            console.log('success')
            setis_modal_open(false)
            getTeams();
        }
        else {
            console.log('failed')
        }
    }
    /* Team detaials function*/
    async function getTeams() {
        const details = await getTeamdetails();
        await setteam_details(details[0])
        
        
    }
    /*render teamfunction*/
    function Renderwithoutdetails() {
        return (
            <Table variant='dark' className="membertable">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {team_details.members.map(member=>{
                        return(
                            <tr>
                                <td>{member._id}</td>
                                <td>{member.name}</td>-
                            </tr>
                        )
                    })}
                    <tr>
                        
                        
                    </tr>
                </tbody>
            </Table>
        )

    }
    function Renderwithdetails() {
        return (
            <div className='members'>
                <div className='membinner'>
                    <label className='rel lab1'>You have no teams / <Button variant="outline-success" size='sm' onClick={open}> Create</Button></label>
                </div>
                
            </div>
        )

    }
    /*useEffect*/
    useEffect(() => {
        getTeams();
       
    }, [])
    useEffect(() => {
        console.log(team_details)
    }, [team_details])

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
                    {team_details?<Renderwithoutdetails/>:<Renderwithdetails/>}
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