export const useWeather = async (city) => {
  const config = useRuntimeConfig();
  const apiKey = config.public.weatherApiKey;
  const baseUrl = config.public.weatherApiBaseUrl;

  const url = `${baseUrl}/forecast.json`;
  const res = await $fetch(url, {
    params: {
      key: apiKey,
      q: city,
      days: 5,
      lang: "ru",
    },
  });

  return res;
};
