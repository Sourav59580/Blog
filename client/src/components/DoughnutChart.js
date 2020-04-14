import React from 'react'
import { Doughnut } from 'react-chartjs-2'

function DoughnutChart() {
   const data = {
       labels : ['Jan','Feb','Mar','Apr'],
       datasets : [
           {
               label : 'Contribution activity for 2020',
               data : [3,10,4,8],
               borderColor : ['#f4e04d','#00bcd4','#ff8c94','#21bf73'],
               backgroundColor : ['#f2ed6f','#b2ebf2','pink','#baf1a1'],
               pointBackgroundColor : ['pink'],
               pointBorderColor : ['#ff8c94']
               

           }
       ]

    }
    return (
        <Doughnut data={data}/>
    )
}

export default DoughnutChart
