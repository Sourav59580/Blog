import React from 'react'

function Earnings() {
    return (
        <div className='container-fluid p-4' style={{overflowY:'scroll',height:'100vh'}}>
             <div className='row px-2 py-3'>
                    <div className='col-12 bg-white shadow-sm'>
                        <h5 className='m-3'>EARNINGS</h5>
                        <p className='m-3 text-secondary'>All of your blog's <span className='text-danger'>earning</span>.</p>
                        <div class="table-responsive">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>BlogNo.</th>
                                        <th>Blog Title</th>
                                        <th>Amount</th>
                                        <th>Status</th>
                                        <th>Deadline</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>53275531</td>            
                                        <td>5531</td>
                                        
                                        <td> ₹ 800</td>
                                        <td><label class="badge badge-danger">Pending</label></td>
                                        <td>12 May 2020</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>53275532</td>                                       
                                        <td>531</td>
                                        
                                        <td> ₹ 700</td>
                                        <td><label class="badge badge-warning">In progress</label></td>
                                        <td>15 May 2020</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>53275533</td>                                        
                                        <td>4531</td>
                                        
                                        <td> ₹ 2000</td>
                                        <td><label class="badge badge-info">Fixed</label></td>
                                        <td>14 May 2020</td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>53275534</td>                                        
                                        <td>3531</td>
                                        
                                        <td> ₹ 500</td>
                                        <td><label class="badge badge-success">Completed</label></td>
                                        <td>16 May 2020</td>
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td>53275535</td>                                        
                                        <td>531</td>
                                        
                                        <td> ₹ 1120</td>
                                        <td><label class="badge badge-warning">In progress</label></td>
                                        <td>20 May 2020</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Earnings
