function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({
    behavior: "smooth"
  });
}

const ctx = document.getElementById('salesChart');

new Chart(ctx, {
  type: 'line',
  data: {
    labels: [
      'Business Understanding',
      'Data Understanding',
      'Data Preparation',
      'Modeling',
      'Evaluation',
      'Deployment'
    ],
    datasets: [{
      label: 'CRISP-DM Business Impact (%)',
      data: [15, 30, 50, 70, 85, 95],
      fill: true,
      backgroundColor: 'rgba(214,51,132,0.3)',
      borderColor: '#d63384',
      tension: 0.4
    }]
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        max: 100
      }
    }
  }
});
