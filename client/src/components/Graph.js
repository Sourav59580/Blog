import React, { Component } from 'react'


export class Graph extends Component {
    render() {
        return (
            <div className='container-fluid p-4' style={{ overflowY: 'scroll', height: '100vh' }}>
                <div className='row'>
                    <div className='col-md-6 mb-3'>
                        <div className='bg-white shadow-sm'>
                            <div class="card">
                                <div class="card-body">
                                    <h4 class="card-title">Line chart</h4>
                                    <canvas id="lineChart"></canvas>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className='bg-white shadow-sm' style={{ height: '200px' }}>
                            <div class="card">
                                <div class="card-body">
                                    <h4 class="card-title">Bar chart</h4>
                                    <canvas id="barChart"></canvas>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Graph
