import axios from 'axios'
import { routesFront } from '@/config/index'

// ! do not change this ever
// * 2022.10.18 we've expirienced a week of lost leads, this is critical and should never accure ever again
const hitContactRoute = async values => {
  try {
    const res = await axios.post(`${routesFront.root}/api/contact`, values)
    let output
    res.status === 200 && (output = 200)
    res.status === 500 && (output = 500)
    return output
  } catch (err) {
    console.log(err)
    return err
  }
}

export default hitContactRoute
