
<template>
  <div class="p-8 mx-auto max-w-[1440px]">
    <div class="min-[900px]:flex min-[900px]:gap-3">
      <form
        class="flex flex-col gap-2 min-[900px]:w-1/2 min-[900px]:items-center min-[900px]:justify-center"
        @submit.prevent="getWeather"
      >
        <label class="text-2xl uppercase font-semibold" for="cityEnter"
          >Введите город</label
        >
        <input
          id="cityEnter"
          v-model="city"
          class="border p-5 text-xl rounded-2xl shadow-2xl bg-gradient-to-r from-gray-400 to-purple-500"
          type="text"
        />
        <p v-if="isLoading">Загрузка данных ...</p>
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
    <div v-if="hasError" class="mx-auto my-4">
      <p class="uppercase text-xl font-semibold">
        Нет данных по выбранному городу!
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useWeather } from "@/composables/useWeather";

const city = ref("Нижний Новгород");
const weather = ref(null);
const isLoading = ref(false);
const hasError = ref(false);

const getWeather = async () => {
  isLoading.value = true;
  hasError.value = false;
  try {
    weather.value = await useWeather(city.value);
  } catch (e) {
    weather.value = null;
    hasError.value = true;
  } finally {
    isLoading.value = false;
  }
};
getWeather();

const config = useRuntimeConfig();
console.log("🌐 Публичный runtimeConfig:", config.public);
</script>
