import { useEffect, useState, FC } from 'react'
import axios from 'axios'
import { dev } from '@/config/index'

const useCheckIfResourseExists = (src: string) => {
    const [isData, setIsData] = useState(false)
    useEffect(() => {
        const getData = async () => {
            try {
                const res = await axios.head(src)
                if (res.status === 200) setIsData(true)
            } catch (err) {
                if (dev) {
                    console.error(`Error at useCheckIfResourseExists: ${err}`)
                }
            }
        }
        getData()
    }, [])

    return isData
}

export default useCheckIfResourseExists