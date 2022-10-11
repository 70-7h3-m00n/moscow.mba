import axios from 'axios'
import { routesFront } from '@/config/index'

const hitContactRoute = async data => {
  try {
    const res = await fetch(`${routesFront.root}/api/contact`, {
      method: 'post',
      body: JSON.stringify(data)
    })
    
    if (!res.ok) throw res

    return res.status
  } catch (err) {
    return err.status
  }
}

export default hitContactRoute
