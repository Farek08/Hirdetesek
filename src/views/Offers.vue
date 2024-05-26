<script setup>
import { ref } from 'vue';
import DataService from "../services/dataservice"

  const ingatlanok = ref([])

  DataService.getIngatlanok()
    .then((resp) => {
      ingatlanok.value = resp;
      console.log(ingatlanok.value);
    })
    .catch((err) => {
      console.log(err);
    });
</script>

<template>
  <h1>Ajánlataink</h1>
  <table class="table">
    <tr>
      <th class="text-center">Kategória</th>
      <th class="text-center">Leírás</th>
      <th class="text-center">Hirdetás dátuma</th>
      <th class="text-center">Tehermentes</th>
      <th class="text-center">Fénykép</th>
    </tr>
    <tr v-for="ingatlan in ingatlanok">
      <td class="text-center">{{ ingatlan.kategoriaNev }}</td>
      <td class="text-center">{{ ingatlan.leiras }}</td>
      <td class="text-center">{{ ingatlan.hirdetesDatuma }}</td>
      <td class="text-center" v-if="ingatlan.tehermentes">Igen</td>
      <td class="text-center" v-else>Nem</td>
      <td class="text-center"><img height="150" :src="ingatlan.kepUrl"></td>
    </tr>
  </table>
</template>

<style scoped>
  tr {
    border: 1px solid lightgray;
  }
</style>