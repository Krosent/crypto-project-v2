export function createChart() {
    var ctx = document.getElementById('line-chart').getContext('2d')
    return new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',

        // The data for our dataset
        data: {
            labels: [],
            datasets: [
                {
                  label: 'BTC',
                  data: [],
                  borderColor: 'rgba(255, 206, 86, 0.2)', 
                  backgroundColor: 'rgba(255, 206, 86, 0.2)',
                  yAxisID: 'y',
                },
                /*{
                  label: 'ETH',
                  data: [],
                  borderColor: 'rgba(255, 99, 132, 0.2)',
                  backgroundColor: 'rgba(255, 99, 132, 0.2)',
                  yAxisID: 'y',
                },
                {
                    label: 'LTC',
                    data: [],
                    borderColor: 'rgba(153, 102, 255, 1)',
                    backgroundColor: 'rgba(153, 102, 255, 1)',
                    yAxisID: 'y',
                  },
                  {
                    label: 'DOGE',
                    data: [],
                    borderColor: 'rgba(75, 192, 192, 0.2)',
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    yAxisID: 'y',
                  } */
              ]
        },
        // Configuration options go here
        options: {}
    })
}

export function getDatasetByCurrencyName(chart, currencyName) {
    return chart.data.datasets.find(ds => ds.label == currencyName)
}

export function updateChart(chart, dataset, newPrice) {
    chart.data.labels.push(getCurrentTime())
    dataset.data.push(newPrice)
    chart.data.labels = chart.data.labels.slice(-30)
    chart.data.datasets.map(dataset => dataset.data =  dataset.data.slice(-30))
    chart.update()
}

function getCurrentTime() {
    const date = new Date()
    return date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()
}