<template>
  <div
    v-if="weather"
    class="mt-6 p-4 border rounded-2xl flex flex-col items-start shadow-2xl"
  >
    <div class="">
      <div class="uppercase font-semibold">{{ weather.location.name }}</div>

      <div class="flex items-center">
        <img :src="weather.current.condition.icon" alt="" />
        {{ weather.current.condition.text }}
      </div>
    </div>
    <div>Температура: {{ weather.current.temp_c }}</div>
    <div>Влажность: {{ weather.current.humidity }}%</div>
    <div>Напрвление ветра: {{ weather.current.wind_dir }}</div>
    <div>Ветер: {{ weather.current.wind_kph }} км/ч</div>
  </div>
</template>

<script setup>
import { useWeather } from "~/composables/useWeather";

const props = defineProps({
  weather: Object,
});
</script>