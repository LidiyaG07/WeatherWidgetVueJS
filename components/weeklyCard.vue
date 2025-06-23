<template>
  <div
    class="mt-6 p-4 border rounded-2xl flex flex-col items-start shadow-2xl bg-gradient-to-r from-purple-500 to-blue-500 text-lg"
  >
    <div class="">
      <div class="uppercase font-semibold">
        {{
          new Date(forecast.date).toLocaleDateString("ru-RU", {
            weekday: "long",
            day: "numeric",
            month: "long",
          })
        }}
      </div>
      <div class="flex items-center">
        <img :src="forecast.day.condition.icon" alt="" />
        <div>{{ forecast.day.condition.text }}</div>
      </div>
    </div>
    <div class="w-full flex justify-between md:flex-row sm:flex-col sm:gap-3">
      <div class="border p-3 rounded-2xl shadow-2xl">
        <div>Макс. температура: {{ forecast.day.maxtemp_c }}</div>
        <div>Мин. температура: {{ forecast.day.mintemp_c }}</div>
      </div>
      <div class="border p-3 rounded-2xl shadow-2xl">
        <div>Средняя влажность: {{ forecast.day.avghumidity }}%</div>
      </div>
      <div class="border p-3 rounded-2xl shadow-2xl">
        <div>Макс. ветер: {{ forecast.day.maxwind_kph }}км/ч</div>
      </div>
    </div>
    <!-- 
    -->
  </div>
</template>
  
<script setup>
import { defineProps } from "vue";

const props = defineProps({
  forecast: Object,
});
console.log(props.forecast);
</script>