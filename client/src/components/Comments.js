import React from 'react'

function Comments() {
    return (
        <div className='container-fluid p-4' style={{overflowY:'scroll',height:'100vh'}}>
            <div className='row'>
                <div className='col-12 bg-white px-4 pb-4'>
                    <h5 className='my-4'>ALL COMMENTS</h5>
                    <p className='text-secondary mb-4'>All of your blog <span className='text-danger'>comments</span>.</p>
                    <div id="accordion">
                        <div class="card rounded">
                            <div class="card-header" id="headingOne">
                                <h5 class="mb-0">
                                    <button class="btn btn-link text-dark" data-toggle="collapse" data-target="#1" aria-expanded="true" aria-controls="collapseOne">
                                        <h5>UI Display</h5>
                                    </button>
                                </h5>
                            </div>
                            <div id="1" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                                <div class="card-body">
                                    <ul class="list-group list-group-flush">
                                        <li class="list-group-item flex-column align-items-start">
                                            <div class="d-flex w-100 justify-content-between">
                                                <div className='d-flex justify-content-center          align-items-center mb-1'>
                                                    <div style={{ width: '40px', height: '40px' }} className='mr-2 rounded-circle shadow-sm'>
                                                        <img src='https://bramdejager.files.wordpress.com/2019/05/bramdejager-600x600.png?w=300' className='w-100' alt='public' />
                                                    </div>
                                                    <h6 class="mb-1">James</h6>
                                                </div>
                                                <small>3 days ago</small>
                                            </div>
                                            <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                                            <div className='float-right'>
                                                <button className='btn btn-sm btn-success mr-2'>Like</button>
                                                <button className='btn btn-sm btn-danger mr-2'>Reply</button>
                                                <button className='btn btn-sm btn-warning'>Delete</button>
                                            </div>
                                        </li>
                                        <li class="list-group-item flex-column align-items-start">
                                            <div class="d-flex w-100 justify-content-between">
                                                <div className='d-flex justify-content-center          align-items-center mb-1'>
                                                    <div style={{ width: '40px', height: '40px' }} className='mr-2 rounded-circle shadow-sm'>
                                                        <img src='https://bramdejager.files.wordpress.com/2019/05/bramdejager-600x600.png?w=300' className='w-100' alt='public' />
                                                    </div>
                                                    <h6 class="mb-1">James</h6>
                                                </div>
                                                <small>3 days ago</small>
                                            </div>
                                            <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                                            <div className='float-right'>
                                                <button className='btn btn-sm btn-success mr-2'>Like</button>
                                                <button className='btn btn-sm btn-danger mr-2'>Reply</button>
                                                <button className='btn btn-sm btn-warning'>Delete</button>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-header" id="headingTwo">
                                <h5 class="mb-0">
                                    <button class="btn btn-link collapsed text-dark" data-toggle="collapse" data-target="#2" aria-expanded="false" aria-controls="collapseTwo">
                                        <h6>COMMENTS GROUP #2</h6>
                                    </button>
                                </h5>
                            </div>
                            <div id="2" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                                <div class="card-body">
                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                 </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-header" id="headingThree">
                                <h5 class="mb-0">
                                    <button class="btn btn-link collapsed text-dark" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        <h6>COMMENTS GROUP #3</h6>
                                    </button>
                                </h5>
                            </div>
                            <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                                <div class="card-body">
                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Comments
