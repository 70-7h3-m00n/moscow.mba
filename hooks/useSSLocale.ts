import { useState, useEffect } from 'react'

const useSSLocale = () => {
  const [SSLocale, setSSLocale] = useState('')

  useEffect(() => {
    const ssLocale = sessionStorage.getItem('locale')
    if (ssLocale) {
      setSSLocale(ssLocale)
    }
  }, [])

  return SSLocale
}

export default useSSLocale
