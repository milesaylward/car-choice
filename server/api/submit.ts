export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const res = await $fetch('https://submit-form.com/tZ3imieq', {
    method: 'POST',
    body,
  })
  return res;
})