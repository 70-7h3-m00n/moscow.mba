import { routesBack } from '@/config/index'
import axios from 'axios'

const getBackJWTToken = async () => {
  const identifier = process.env.STRAPI_AUTH_USER_LOGIN
  const password = process.env.STRAPI_AUTH_USER_PASSWORD

  const res = await axios.post(`${routesBack.root}${routesBack.authLocal}`, {
    identifier,
    password
  })

  if (res.status === 200) return res.data.jwt
  if (res.status !== 200) {
    console.log(res)
    throw new Error('Something went wrong...')
  }
}

export default getBackJWTToken
