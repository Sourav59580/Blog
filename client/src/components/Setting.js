import React from 'react'
import {Blockloading,Semipolarloading} from './Loading'
function Setting() {
    return (
        <div className='container-fluid p-4' style={{overflowY:'scroll',height:'100vh'}}>
            <h4>Profile</h4>
            <p>Account <span className='text-danger'>setting</span></p>
            <div className='row p-2'>
                <div className='col-12 bg-white mb-3 shadow-sm d-flex flex-wrap'>
                    <div className='d-flex flex-column p-4 justify-content-center align-items-center'>
                        <div style={{ width: '100px', height: '100px', overflow: 'hidden' }} className='rounded-circle border mb-3'>
                            <img src='https://www.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg' className='w-100' alt='dp'/>
                        </div>
                        <div>
                            <button className='btn btn-danger btn-sm mr-2'>Upload</button>
                            <button className='btn btn-success btn-sm'>Save</button>
                        </div>
                    </div>
                    <div className='d-flex flex-column flex-wrap p-4'>
                        <h4>Souarv Santra <i className='mdi mdi-lead-pencil mx-1'></i></h4>
                        <p className='text-success'>Employee</p>
                        <h6 className='text-secondary'>20/04/1999 <i className='mdi mdi-lead-pencil mx-1'></i></h6>
                        <h6 className='text-secondary'>souravsantra59680@gmail.com <i className='mdi mdi-lead-pencil mx-1'></i></h6>
                        <h6 className='text-secondary'>Vill-Kalidan, Post-Kalidan, P.S.-Panskura, Dist-Purba Medinipur, 721131 <i className='mdi mdi-lead-pencil mx-1'></i></h6>
                    </div>
                </div>
            </div>

            <div className='row'>
                <div className='col-md-5 mb-3'>
                    <div className='bg-white border shadow-sm ' style={{height:'200px'}}>
                        <Semipolarloading/>
                    </div>
                </div>
                <div className='col-md-7'>
                <div className='bg-white border shadow-sm' style={{height:'200px'}}>
                    <Blockloading />
                </div>
                </div>          
            </div>




        </div>
    )
}

export default Setting
