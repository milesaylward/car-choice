export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { formspark_url } = useRuntimeConfig();
  const res = await $fetch(formspark_url, {
    method: 'POST',
    body,
  });
  return res;
})