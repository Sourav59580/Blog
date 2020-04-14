import React, { Component } from 'react'
import LineChart from './LineChart'
import BarChart from './BarChart'
import DoughnutChart from './DoughnutChart'

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
                                    <LineChart/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6 mb-3'>
                        <div className='bg-white shadow-sm' style={{ height: '200px' }}>
                            <div class="card">
                                <div class="card-body">
                                    <h4 class="card-title">Bar chart</h4>
                                    <BarChart />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row mb-5'>
                    <div className='col-md-6 mb-3'>
                    <div className='bg-white shadow-sm'>
                            <div class="card">
                                <div class="card-body">
                                    <h4 class="card-title">Doughnut chart</h4>
                                    <DoughnutChart/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6'></div>
                </div>
            </div>
        )
    }
}

export default Graph
