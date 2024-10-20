// Define the data for old and new RPNs manually
const failureModesData = [
    { mode: 'Overheating', oldRPN: 592, newRPN: 160 },
    { mode: 'Vibration', oldRPN: 576, newRPN: 225 },
    { mode: 'Wear and Tear', oldRPN: 729, newRPN: 378 },
    { mode: 'Corrosion', oldRPN: 810, newRPN: 108 },
    { mode: 'Electrical Failure', oldRPN: 680, newRPN: 81 },
    { mode: 'Software Glitch', oldRPN: 380, newRPN: 168 },
    { mode: 'Human Error', oldRPN: 596, newRPN: 126 },
    { mode: 'Mechanical Failure', oldRPN: 700, newRPN: 105 },
    { mode: 'Leakage', oldRPN: 812, newRPN: 160 },
    { mode: 'Overloading', oldRPN: 504, newRPN: 200 },
];

// Extract labels and data from the above array
const labels = failureModesData.map(item => item.mode);
const oldRPNData = failureModesData.map(item => item.oldRPN);
const newRPNData = failureModesData.map(item => item.newRPN);

// Radar chart configuration
const ctx = document.getElementById('fmeaRadarChart').getContext('2d');
const fmeaRadarChart = new Chart(ctx, {
    type: 'radar',
    data: {
        labels: labels,
        datasets: [
            {
                label: 'Old RPN',
                data: oldRPNData,
                fill: true,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                pointBackgroundColor: 'rgba(255, 99, 132, 1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(255, 99, 132, 1)',
                pointRadius: 4,
                pointHoverRadius: 6
            },
            {
                label: 'New RPN',
                data: newRPNData,
                fill: true,
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                pointBackgroundColor: 'rgba(54, 162, 235, 1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(54, 162, 235, 1)',
                pointRadius: 4,
                pointHoverRadius: 6
            }
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: true,
        scales: {
            r: {
                angleLines: {
                    display: true,
                    color: '#ccc',
                },
                min: 0,
                max: 900,  // Adjusted max value to accommodate the highest RPN
                ticks: {
                    stepSize: 100,
                    backdropColor: 'rgba(255, 255, 255, 0.75)',
                    color: '#333',
                },
                grid: {
                    color: '#ccc',
                },
                pointLabels: {
                    color: '#333',
                    font: {
                        size: 14,
                    },
                },
            }
        },
        plugins: {
            legend: {
                position: 'top',
                labels: {
                    usePointStyle: true,
                    boxWidth: 10,
                }
            },
            tooltip: {
                enabled: true,
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                titleColor: '#fff',
                bodyColor: '#fff',
                callbacks: {
                    label: function(tooltipItem) {
                        return `${tooltipItem.dataset.label}: ${tooltipItem.raw}`;
                    }
                }
            },
            hover: {
                mode: 'nearest',
                intersect: true
            }
        },
        interaction: {
            mode: 'nearest',
            intersect: true
        }
    }
});
