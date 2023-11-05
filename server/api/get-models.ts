export default defineEventHandler(async (event) => {
  const { car_query_url } = useRuntimeConfig();
  const { year, make } = getQuery(event);
  const data = await $fetch<{ Models: Array<CarModel> }>
    (`${car_query_url}?cmd=getModels&make=${make}&year=${year}&sold_in_us=1`);
  return { models: data.Models };
});