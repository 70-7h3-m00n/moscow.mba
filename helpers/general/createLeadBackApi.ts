import { routesBack } from '@/config/index'
import { getBackJWTToken } from '@/helpers/index'
import axios from 'axios'

const createLeadBackApi = async ({ data }) => {
  process.env.TZ = 'Europe/Moscow'
  const token = await getBackJWTToken()
  try {
    const backAPIRes = await axios.post(
      `${routesBack.root}${routesBack.leads}`,
      data,
      {
        headers: { Authorization: `Bearer ${token}` }
      }
    )
    return backAPIRes.data
  } catch (err) {
    console.log(err)
    return err
  }
}

export default createLeadBackApi
