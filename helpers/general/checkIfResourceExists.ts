import axios from 'axios'
import { dev } from '@/config/index'

const checkIfResourceExists = async (src: string) => {
	try {
		const res = await axios.head(src)
		if (res.status === 200) return true
		return false
	} catch (err) {
		if (dev) console.error(`Error at checkIfResourceExists: ${err}`)
		return false
	}
}

export default checkIfResourceExists
