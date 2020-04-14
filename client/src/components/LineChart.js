import React from 'react'
import { Line } from 'react-chartjs-2'

function LineChart() {
   const data = {
       labels : ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
       datasets : [
           {
               label : 'Contribution activity for 2020',
               data : [3,10,4,8],
               borderColor : ['#ff8c94'],
               backgroundColor : ['pink'],
               pointBackgroundColor : ['pink'],
               pointBorderColor : ['#ff8c94']
               

           }
       ]

    }
    return (
        <Line data={data}/>
    )
}

export default LineChart
