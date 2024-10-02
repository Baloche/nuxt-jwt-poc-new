import jwt from 'jsonwebtoken'

const getPublicKey = defineCachedFunction(() => $fetch<string>(useRuntimeConfig().auth.keyUrl))

function verify<T>(token: string, publicKey: string) {
  return new Promise<T>((resolve, reject) => {
    jwt.verify(token, publicKey, (err, decoded) => err ? reject(err) : resolve(decoded as T))
  })
}

export async function getUserId(token: string) {
  const publicKey = await getPublicKey()
  const { userId } = await verify<{ userId: string }>(token, publicKey)
  return userId
}
