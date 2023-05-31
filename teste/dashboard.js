(function () {
  'use strict'
//----------------



const x = [0, 10, 50, 60, 70, 40, 80]
const y = [15, 32, 54, 78, 10, 50]

const labels = y;
const data = {
  labels: labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: x,
    
    },
  
  ]
};




const ctx = document.getElementById('myChart');
new Chart(ctx, {
  type: 'line',
  data: data,
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Line Chart'
      }
    }
  },






















//------------------------
});
})()































/* other type
(function () {
  'use strict'

  const ctx = document.getElementById('myChart');

  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: 'pratico',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 3
      },


      {
        label: 'teorico',
        data: [89, 30, 3, 105, 1, 10],
        borderWidth: 3
      }
    ]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
})()*/






