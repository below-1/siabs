<script>
  import { onMount } from 'svelte'
  import { browser } from '$app/env'

  let Highcharts = null;

  function draw_chart() {
    const chart = Highcharts.chart('overview-chart', {
      chart: {
          type: 'bar'
      },
      legend: {
        enabled: false
      },
      title: {
          text: null
      },
      xAxis: {
          categories: ['Hadir', 'Alpa', '0-10', '10 - 20', '> 30']
      },
      yAxis: {
          title: {
              text: 'Fruit eaten'
          }
      },
      series: [{
          data: [67, 5, 14, 23, 6]
      }]
    });
  }

  onMount(async () => {
    if (browser) {
      Highcharts = await import('highcharts');
      draw_chart();
    }
  })
</script>

<div id="overview-chart" style="width:100%; height:300px;"></div>