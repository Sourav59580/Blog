import React from 'react'
import { Bar } from 'react-chartjs-2'

function BarChart() {
   const data = {
       labels : ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
       datasets : [
           {
               label : 'Contribution activity for 2020',
               data : [3,10,4,8],
               borderColor : ['#00bcd4','#00bcd4','#00bcd4','#00bcd4','#00bcd4'],
               backgroundColor : ['#b2ebf2','#b2ebf2','#b2ebf2','#b2ebf2','#b2ebf2'],
               pointBackgroundColor : ['#b2ebf2','#b2ebf2','#b2ebf2','#b2ebf2','#b2ebf2'],
               pointBorderColor : ['#00bcd4','#00bcd4','#00bcd4','#00bcd4','#00bcd4']
               

           }
       ]

    }
    return (
        <Bar data={data}/>
    )
}

export default BarChart
