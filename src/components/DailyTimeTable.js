import React from 'react';
import { Pie } from 'react-chartjs-2';
import "chartjs-plugin-piechart-outlabels";

export default function DailyTimeTable() {

  return (


<Pie
  data={{
    labels: [
      '23-08    κΏλλΌπππ',
      '08-09    κΈ°μ λ° κ³΅λΆμ€λΉπ΅βπ« ',
      '09-13    Studyπ©π»βπ»π©π»βπ»π©π»βπ»',
      '13-14    μ΄λ gogoπͺπ»',
      'πRESTπ         ',
      '15μ~19μ π₯λ³΅μ΅π₯',
      '19μ~21μ νλ‘μ νΈπ©π»βπ»π©π»βπ»π©π»βπ»',
      'πRESTπ'
    ],

    datasets: [{
      label: 'My First Dataset',
      data: [400, 100, 100, 100, 100, 100, 100,100],
      borderWidth: 2,
      fill: true,
      backgroundColor: [
        'rgba(30, 76, 148,1.0)',
      'rgba(130, 100, 230,1.0)',
      'rgba(250, 177, 160,1.0)',
      'rgba(253, 121, 168,1.0)',
      'rgba(0, 184, 148,1.0)',
      'rgba(55, 120, 222,1.0)',
      'rgba(255, 118, 117,1.0)',
      'rgba(0, 184, 148,1.0)'
    ]

    }]
  }}

  options={{ maintainAspectRatio: true,

    plugins: {
      legend: true,
      outlabels: {
        text: '%l',
        borderRadius: 10,
        color: 'white',
        padding: 13,
        stretch: 50,
        lineWidth: 5, 
        font: {
            resizable: true,
            minSize: 10,
            maxSize:40
        },
        textAlign: "center"
    }
    
      },
  //   showAllTooltips: true,// tooltip ν­μνμ
  //   tooltips: {
  //     enabled: true, // tooltip νμ(κΈ°λ³Έμ λ§μ°μ€ hover)
  // },
    layout: {
      padding: {
          left: 20,
          right: 10,
          top: 90,
          bottom: 90
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
    },


  }
}



/>
 
  )
}


