export default defineEventHandler(async (event) => {
  const { car_query_url } = useRuntimeConfig();
  const query = getQuery(event);
  const data = await $fetch<{ Makes: Array<CarMake> }>
    (`${car_query_url}?cmd=getMakes&year=${query.year}&sold_in_us=1`);
  return { makes: data.Makes };
})