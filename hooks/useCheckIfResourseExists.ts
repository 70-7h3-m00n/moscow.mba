import axios from 'axios'
import { dev } from '@/config/index'

const useCheckIfResourseExists = async (src: string) => {
    try {
        const res = await axios.head(src)
        if (res.status === 200) return true
    } catch (err) {
        if (dev) console.error(`Error at useCheckIfResourseExists: ${err}`)
        return false
    }
}

export default useCheckIfResourseExists