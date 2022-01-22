import React from 'react';
import { Pie } from 'react-chartjs-2'


export default function DailyTimeTable() {

  return (


<Pie
  data={{
    labels: [
      '23-08    꿈나라💤💤💤',
      '08-09    기상 및 공부준비😵‍💫 ',
      '09-13    리액트 강의',
      '13-14    운동 gogo💪🏻',
      '🌈REST🌈         ',
      '15시~19시 🔥복습🔥',
      '19시~21시 프로젝트👩🏻‍💻👩🏻‍💻',
      '🌈REST🌈'
    ],

    datasets: [{
      label: 'My First Dataset',
      data: [400, 100, 100, 100, 100, 100, 100,100],
      borderWidth: 2,
      fill: true,
      backgroundColor: [
        'rgba(30, 76, 148,1.0)',
      'rgba(130, 100, 230,1.0)',
      'rgba(148, 200, 222,1.0)',
      'rgba(116, 185, 255,1.0)',
      'rgba(0, 184, 148,1.0)',
      'rgba(255, 234, 167,1.0)',
      'rgba(255, 118, 117,1.0)',
      'rgba(0, 184, 148,1.0)'
    ]

    }]
  }}

  options={{ maintainAspectRatio: true,
 
    layout: {
      padding: {
          left: 0,
          right: 70,
          top: 0,
          bottom: 50
      }
  },
    hoverBorderWidth: 20,
    responsive: true,
    legend: {
      position: "right",
      display: true,
      labels: {
        padding:30,
        fontColor: 'rgb(255, 99, 132)',
        fontFamily:'S-CoreDream-5Medium',
        fontWeight: '400',
        fontSize:30,
        boxWidth:14,
        usePointStyle:true
    }
    }


  
  
  }
}



/>
 
  )
}


