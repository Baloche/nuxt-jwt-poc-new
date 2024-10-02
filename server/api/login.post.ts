import { getUserId } from '../utils/auth'

export default defineEventHandler<{ body: { token: string } }, Promise<{ userId: string }>>(async (event) => {
  const { token } = await readBody(event)
  const userId = await getUserId(token)
  setCookie(event, 'token', token, { httpOnly: true, sameSite: 'strict', secure: true })
  return { userId }
})
