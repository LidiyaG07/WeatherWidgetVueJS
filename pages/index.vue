<!-- pages/index.vue -->
<template>
  <div class="p-8 mx-auto">
    <div class="min-[900px]:flex min-[900px]:gap-3">
      <form
        class="flex flex-col gap-2 min-[900px]:w-1/2 min-[900px]:items-center min-[900px]:justify-center"
        @submit.prevent="getWeather"
      >
        <label class="text-2xl uppercase font-semibold" for="cityEnter"
          >Введите город</label
        >
        <input
          v-model="city"
          class="border p-5 text-xl rounded-2xl shadow-2xl bg-gradient-to-r from-gray-400 to-purple-500"
          type="text"
          id="cityEnter"
        />
        <!-- <button type="submit">Get</button> -->
      </form>
      <div class="mx-auto min-[900px]:w-1/3">
        <WeatherCard :weather="weather" />
      </div>
    </div>
    <div class="min-[900px]:grid min-[900px]:grid-cols-2 gap-3">
      <WeeklyCard
        v-for="(data, index) in weather?.forecast.forecastday"
        :key="index"
        :forecast="data"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useWeather } from "@/composables/useWeather";
import weatherCard from "@/components/weatherCard.vue";

const city = ref("Нижний Новгород");
const weather = ref(null);

const getWeather = async () => {
  try {
    weather.value = await useWeather(city.value);
  } catch (e) {}
};
getWeather();
</script>
