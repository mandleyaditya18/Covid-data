<template>
  <div>
      <button @click="load">Load</button>
      <table v-if="hasValue">
          <tr>
              <th>S.No</th>
              <th>States</th>
              <th>Confirmed</th>
              <th>Deceased</th>
              <th>Recovered</th>
              <th>Tested</th>
              <th>Vaccinated1</th>
              <th>Vaccinated2</th>
          </tr>
          <tr v-for="(data,key,index) in covid" :key="index">
              <td>{{++index}}</td>
              <td>{{key}}</td>
              <td>{{data.total.confirmed}}</td>
              <td>{{data.total.deceased}}</td>
              <td>{{data.total.recovered}}</td>
              <td>{{data.total.tested}}</td>
              <td>{{data.total.vaccinated1}}</td>
              <td>{{data.total.vaccinated2}}</td>
          </tr>
      </table>
  </div>
</template>

<script>
import axios from 'axios';
export default {
data() {
    return {
      covid: [],
      hasValue: false,
    };
  },
  methods: {
    async load() {
      const resp = await axios.get('https://api.covid19india.org/v4/min/data.min.json');
      const data = await resp.data;
      this.covid = data;
      this.hasValue = true
    }
  }
}
</script>

<style scoped>
table, td, th {
  border: 1px solid black;
}

table {
  width: 100%;
  border-collapse: collapse;
}
</style>