<template>
  <table>
    <thead>
      <tr>
        <th>State</th>
        <th v-for="(obj, ind) in config" :key="ind">{{obj.title}}</th>
      </tr>
    </thead>
    <tbody>
        <!-- {{covidData[0]['AN']['total']}} -->
      <!-- <tr v-for="(row, key, index) in covidData" :key="index">
        <td>{{key}}</td>
        <td v-for="(obj, ind) in config" :key="ind">{{row['total'][obj.key]}}</td>
      </tr> -->
    </tbody>
  </table>
</template>

<script>
export default {
  props: ["covidData", "config"],
};
</script>

<style></style>

