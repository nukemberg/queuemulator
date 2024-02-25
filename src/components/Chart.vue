<template>
    <div class="chart">
        <canvas :id="id" ref="canvas"></canvas>
    </div>
</template>

<style scoped>
canvas {    
    margin: auto;
    height: 100% !important;
    width: 100% !important;
}
div.chart {
    display: inline-block;
    position: relative;
    width: 100vh;
    height: 70vh;
    min-height: 100px;
    min-width: 800px;
    margin: auto;
}
</style>
<script>
// import c3 from 'c3'
import {CategoryScale, Chart, Colors, Legend, LineController, LineElement, LinearScale, PointElement} from 'chart.js'
import _ from 'lodash'

Chart.register(CategoryScale, LineController, LinearScale, PointElement, LineElement, Colors, Legend);

function dataToGraph(data) {
    return _.map(data, ({name, x, y}) => {
        return {label: name, data: _.zip(x, y).map(([x, y]) => ({x, y}))}
    });
}

export default {
    props: ['data', 'name', 'xlabel', 'ylabel'],
    computed: {
        id() {
            return `chart-${this.name}`
        },
        datasets: (vm) => {
            return dataToGraph(vm.data)
        }
    },
    mounted() {
        this._chart = new Chart(this.$refs.canvas.getContext('2d'),
        {
            type: 'line',
            data: {
                datasets: this.datasets
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: true
                    }
                },
                scales: {
                    x: {
                        type: 'linear',
                        title: {
                            text: this.xlabel
                        },
                        min: 0,
                        max: 1,
                        ticks: {
                            callback: x => `${x.toPrecision(2)}`,
                            count: 10
                        }
                    },
                    y: {
                        title: {
                            text: this.ylabel
                        },
                        max: 100
                    }
                }
            }
        });
    },
    watch: {
        data(_data) {
            if (!_.isEmpty(_data)) {
                this._chart.data.datasets = dataToGraph(_data);
                this._chart.update('none');
            }
        }
    }
}
</script>