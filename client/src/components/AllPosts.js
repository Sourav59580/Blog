import React, { Component } from 'react'

export default class AllPosts extends Component {
    render() {
        return (
            <div className='container-fluid p-4' style={{ overflowY: 'scroll', height: '100vh' }}>
                <div className='row px-2 py-3'>
                    <div className='col-12 bg-white shadow-sm'>
                        <h5 className='m-3'>ALL POSTS</h5>
                        <p className='m-3 text-secondary'>All of your blog <span className='text-danger'>post</span>.</p>
                        <div class="table-responsive">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>BlogNo.</th>
                                        <th>Published</th>
                                        <th>Views</th>
                                        <th>Status</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>53275531</td>
                                        <td>12 May 2020</td>
                                        <td>5531</td>
                                        <td><label class="badge badge-danger">Pending</label></td>
                                        <td><button className='btn btn-sm btn-primary'>Details</button></td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>53275532</td>
                                        <td>15 May 2020</td>
                                        <td>531</td>
                                        <td><label class="badge badge-warning">In progress</label></td>
                                        <td><button className='btn btn-sm btn-primary'>Details</button></td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>53275533</td>
                                        <td>14 May 2020</td>
                                        <td>4531</td>
                                        <td><label class="badge badge-info">Fixed</label></td>
                                        <td><button className='btn btn-sm btn-primary'>Details</button></td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>53275534</td>
                                        <td>16 May 2020</td>
                                        <td>3531</td>
                                        <td><label class="badge badge-success">Completed</label></td>
                                        <td><button className='btn btn-sm btn-primary'>Details</button></td>
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td>53275535</td>
                                        <td>20 May 2020</td>
                                        <td>531</td>
                                        <td><label class="badge badge-warning">In progress</label></td>
                                        <td><button className='btn btn-sm btn-primary'>Details</button></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
