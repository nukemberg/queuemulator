<template>
    <v-container>
        <v-row class="chart">
        <Chart name="queue" ylabel="Queueing latency" xlabel="ρ" :data="data"></Chart>
        </v-row>
        <v-container class="control">
            <v-row>
                <v-slider label="µ" hint="Service rate" min="1" max="10" step="0.25" v-model="mu">
                    <template v-slot:append>
                        <span>{{mu.toFixed(1)}}</span>
                    </template>
                </v-slider>
            </v-row>
            <v-row>
              <v-slider label="Workers" hint="workers" min="1" max="10" step="1" v-model="workers">
                <template v-slot:append>
                    <span>{{ workers }}</span>
                </template>
              </v-slider>
            </v-row>
        </v-container>
        <v-row class="info">
            <a href="https://en.wikipedia.org/wiki/M/M/c_queue">MMC model</a>
        </v-row>
        <v-row class="info">
            <p>\[ \mathbb E [W_q] = \frac { \text{C} (c, \lambda / \mu) } {c \mu - \lambda} \]</p>
        </v-row>
        <v-row class="info">
            <v-col>
                <p><a href="https://en.wikipedia.org/wiki/Erlang_(unit)#Erlang_C_formula">The Erlang C function</a></p>
                <p>\[ {\displaystyle {\text{ C}}(c,\lambda /\mu )={\frac {1}{1+\left(1-\rho \right)\left({\frac {c!}{(c\rho )^{c}}}\right)\sum _{k=0}^{c-1}{\frac {(c\rho )^{k}}{k!}}}}} \]</p>
            </v-col>
            <v-col>
                <h3>Legend</h3>
                <v-table>
                    <tbody>
                        <tr>
                            <td>\( \mathbb E [W_q] \)</td>
                            <td>Expectation value of wait time; Mean latency</td>
                        </tr>
                        <tr>
                            <td>\( \rho = \frac \lambda {c \mu} \)</td>
                            <td>Utilization</td>
                        </tr>
                        <tr>
                            <td>\( \mu \)</td>
                            <td>Service rate mean</td>
                        </tr>
                        <tr>
                            <td>\( \lambda \)</td>
                            <td>Arrival rate mean</td>
                        </tr>
                        <tr>
                            <td>\( c \)</td>
                            <td>Number of service centers (workers)</td>
                        </tr>
                    </tbody>
                </v-table>
            </v-col>

        </v-row>
    </v-container>
</template>

<script>
import {functionSeries, factorial, mm1} from '../common'
import Chart from './Chart.vue'

export function sumSeries(from, to, func) {
    var s = 0
    for (var i=from; i <= to; i++) {
        s += func(i)
    }
    return s
}

export function erlangC(c, r) {
    let X = r**c * c / (factorial(c) * (c - r))
    let Y = sumSeries(0, c - 1, i => r**i / factorial(i))
    return X / (X + Y)
}

export function mmcLatency(rho, mu, c) {
    let lambda = rho * mu * c
    return erlangC(c, rho*c) / (c * mu - lambda)
}

export default {
  components: {Chart},
  data: () => ({
      workers: 1,
      mu: 1
  }),
  computed: {
    data() {
        let mmcSeries = {...functionSeries(x => mmcLatency(x, this.mu, this.workers), 0, 1, 0.005, 100), name: 'mmc'}

        if (this.workers != 1) {
           let mm1Series = {...functionSeries(r => mm1(r)/this.mu, 0, 1, 0.005, 100), name: 'mm1'}
           return [mm1Series, mmcSeries]
        } else {
            return [mmcSeries]
        }
    },
  },
  mounted() {
      window.MathJax.typeset()
  },
}
</script>