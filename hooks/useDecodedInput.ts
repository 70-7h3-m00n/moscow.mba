import keyboard from '@/config/keyboard'
import React, { useState } from 'react'

const useDecodedInput = (initialValue = '') => {
  const [decodedEnInput, setDecodedEnInput] = useState(initialValue)
  const [searchTerm, setSearchTerm] = useState(initialValue)
  const clearInput = () => {
    setSearchTerm('')
    setDecodedEnInput('')
  }
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDecodedEnInput(
      /[^а-я]/gi.test(e.target.value)
        ? e.target.value
            .toLowerCase()
            .match(/\s*[^а-я]/gi)
            .map(str =>
              keyboard.hasOwnProperty(str.length > 1 ? str.at(-1) : str)
                ? str.length > 1
                  ? ` ${keyboard[str.at(-1)]}`
                  : keyboard[str]
                : ''
            )
            .join('')
        : ''
    )
    setSearchTerm(e.target.value)
  }
  return { searchTerm, decodedEnInput, clearInput, handleInput }
}

export default useDecodedInput
