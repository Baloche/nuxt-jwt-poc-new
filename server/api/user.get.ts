export default defineEventHandler(async (event) => {
  const token = getCookie(event, 'token')
  if (!token) {
    throw createError({ statusCode: 401 })
  }
  try {
    const userId = await getUserId(token)
    return { id: userId }
  }
  catch {
    throw createError({ statusCode: 401 })
  }
})
