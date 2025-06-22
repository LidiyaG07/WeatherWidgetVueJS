export const useWeather = async (city) => {
  const res = await $fetch(`/api/weather`, {
    params: { q: city },
  });

  return res;
};
