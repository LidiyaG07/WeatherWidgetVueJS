export default defineEventHandler(async (event) => {
  console.log(1);

  const config = useRuntimeConfig();
  const apiKey = config.public.weatherApiKey;
  const baseUrl = config.public.weatherApiBaseUrl;
  const query = getQuery(event);
  const city = query.q ? query.q : "Нижний Новгород";

  const res = await $fetch(`${baseUrl}/forecast.json`, {
    params: {
      key: apiKey,
      q: city,
      days: 5,
      lang: "ru",
    },
  });
  return res;
});
