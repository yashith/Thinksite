import React from 'react';
import {Button} from 'react-bootstrap'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import './dashboard.css'
import Teams from '../Dashboard/teams'


export default function Dashboard(){
    return(
        <>
            <div className='maindiv rel'>
                <div className="navtop">
                    <div className='logo'>
                    </div>
                    <div className='account_details'></div>
                </div>
                <div className='contentbar'>
                    <div className='sidebar'>
                    <div className='tabs'><h6>Teams</h6></div>
                    <div  className='tabs'><h6>Score-Board</h6></div>
                    </div>
                    
                    <div className='content'>
                        <Router>
                            <Route component={Teams}/>
                        </Router>
                        
                    </div>
                </div>
            </div>
        </>
    )
}