import { Pie } from 'vue-chartjs'
export default {
  extends: Pie,
  props: ['chartdata',  'title', 'labels'],
  mounted () {
    this.renderPieChart(this.chartdata, this.options)
  },
  computed: {
    chartData: function() {
      return this.chartdata;
    },
    options() {
        return {
            responsive: true,
            maintainAspectRatio: false,
            title: {
                display: true,
                text: this.title,
            },
            legend: {
                position: 'bottom'
            },
            tooltip: {
                enabled: true
            },
            elements: {
                line: {
                    tension: 0
                }
            }
        }
    }
    },
  methods:{
    renderPieChart: function() {
        this.options.title.text = this.title;

        this.renderChart({
            labels: this.labels,
            datasets: [
              {
                backgroundColor: ['#02475e','#687980','#f3bda1','#fefecc'],
                data: this.chartData
              }
            ],
          },
        this.options
      );      
    }
  },
  watch: {
    chartdata: function() {
        this.chartData
      this.renderPieChart();
    }
  },
  
}
