var barData = {
    labels: ["México", "República Dominicana", "Colombia", "Argentina", "Brasil" ],
    datasets: [
      {
        label: "Millones de turista",
        backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850", "#00BFFF", "#FFD700", "#800000", "#FF69B4", "#1E90FF"],
        data: [38.33, 7.16, 4.40, 3.89, 3.63]
      }
    ]
  };
  
  new Chart(document.getElementById("bar-chart"), {
    type: 'bar',
    data: barData,
    options: {
      responsive: true,
      legend: { display: false },
      title: {
        display: true,
        text: 'Porcentaje del turismo en Latino America'
      },
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
  
  var pieData = [
    {
      label: "México",
      value: 38.33,
      color: "#3e95cd"
    },
    {
      label: "República Dominicana",
      value: 7.16,
      color: "#8e5ea2"
    },
    {
      label: "Colombia",
      value: 4.4,
      color: "#3cba9f"
    },
    {
      label: "Argentina",
      value: 3.89,
      color: "#e8c3b9"
    },
   
    {
      label: "Brasil",
      value: 3.63,
      color: "#00BFFF"
    },
   
  ];
  
  new Chart(document.getElementById("pie-chart"), {
    type: 'pie',
    data: {
      labels: pieData.map(function(item){ return item.label }),
      datasets: [{
        data: pieData.map(function(item){ return item.value }),
        backgroundColor: pieData.map(function(item){ return item.color })
      }]
    },
    options: {
      responsive: true,
      title: {
        display: true,
        text: 'Porcentaje del turismo en Latino America'
      }
    }
  });
  