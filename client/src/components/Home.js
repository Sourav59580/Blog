import React from 'react'

function Home() {
    return (
        <div className='container-fluid p-4' style={{overflowY:'scroll',height:'100vh'}}>
            <div className='row'>
                <div className='col-12'>
                    <h2>Welcome back,</h2>
                    <p>Your blog analytics dashboard.<span className='ml-4 text-secondary'><i class="mdi mdi-home menu-icon mr-1"></i>/ Dashboard /<span className='text-primary'> Analytics</span></span></p>
                </div>
            </div>
            <div class="d-flex align-items-end flex-wrap">
                <button className='btn btn-white btn-sm shadow-sm mr-3' type='button'>
                    <i class="mdi mdi-download text-muted"></i>
                </button>
                <button className='btn btn-primary'>Download report</button>
            </div>
            <div className='row pt-4'>
                <div className='col-12 bg-white border'>
                    <h6 className='my-3'>Overview : </h6>
                    <hr className='m-0'/>
                    <div className='row'>
                        <div className='col-md-6 d-flex'>

                            <div className='d-flex align-items-center   justify-content-center p-3 border-md-right'>
                               <i class="mdi mdi-currency-usd mr-3 icon-lg text-danger"></i>
                                <div class="d-flex flex-column justify-content-around">
                                   <small class="mb-1 text-muted">Revenue</small>
                                   <h5 class="mr-2 mb-0">$577545</h5>
                                </div>  
                            </div>

                            <div class="d-flex border-md-right         flex-grow-1 align-items-center justify-content-center p-3 item">
                              <i class="mdi mdi-eye mr-3 icon-lg text-success"></i>
                              <div class="d-flex flex-column justify-content-around">
                                 <small class="mb-1 text-muted">Total views</small>
                                 <h5 class="mr-2 mb-0">9833550</h5>
                              </div>
                            </div>                         
                        </div>
                        <div className='col-md-6 d-flex'>

                            <div className='d-flex align-items-center   justify-content-center p-3 border-md-right'>
                               <i class="mdi mdi-download mr-3 icon-lg text-danger"></i>
                                <div class="d-flex flex-column justify-content-around">
                                   <small class="mb-1 text-muted">Downloads</small>
                                   <h5 class="mr-2 mb-0">577545</h5>
                                </div>  
                            </div>

                            <div class="d-flex flex-grow-1 align-items-center justify-content-center p-3 item">
                              <i class="mdi mdi-flag mr-3 icon-lg text-danger"></i>
                              <div class="d-flex flex-column justify-content-around">
                                 <small class="mb-1 text-muted">Flagged</small>
                                  <h5 class="mr-2 mb-0">3497843</h5>
                               </div>
                            </div>
                            
                        </div>
                    </div>

                </div>
            </div>
         
         {/* Recent view pepole */}

            <div className='row mt-4'>
                <div className='col-12 bg-white border' style={{height:'120px'}}>
                <h6 className='my-3'>RECENT COMMENTS : </h6>
                <hr/>


                </div>
            </div>

          {/* Recent communication between admin and Employee */}

           <div className='row mt-4' style={{height:'300px'}}>
               <div className='col-md-6 pl-md-0 p-1 mb-3'>
                   <div className='bg-white border p-3'>
                      <small>To</small>
                      <h6 className='my-3'>ADMIN : </h6>
                      <hr/> 


                   </div>                
               </div>
               <div className='col-md-6 pr-md-0 p-1 mb-3'>
               <div className='bg-white border p-3'>
                      <small>To</small>
                      <h6 className='my-3'>ADMIN : </h6>
                      <hr/> 


                   </div>  


               </div>
           </div>

            



        </div>
    )
}

export default Home
