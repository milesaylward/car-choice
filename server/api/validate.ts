export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const url = 'https://www.google.com/recaptcha/api/siteverify';
  const { recaptcha_secret } = useRuntimeConfig();
  const res = await $fetch<{ success: Boolean; }>(`${url}?secret=${recaptcha_secret}&response=${body.token}`, { method: 'POST' });
  return res;
})