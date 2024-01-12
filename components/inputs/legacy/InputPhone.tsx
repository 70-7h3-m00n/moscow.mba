import stls from '@/styles/components/inputs/InputPhone.module.sass'
import cn from 'classnames'

import React from 'react'
import { useAt } from '@/hooks/index'

const PATTERN = /\D/g
const BACKSPACE_KEY = 'Backspace'

const InputPhone = ({ register, errors, width = '25' }) => {
	const at = useAt()

	const getInputNumbersValue = value => value.replace(PATTERN, '')

	const handlePhoneInput = event => {
		const { target } = event
		const inputNumbersValue = getInputNumbersValue(target.value)
		let formatedInputValue = ''
		const { selectionStart, value } = target

		if (!inputNumbersValue) {
			return (target.value = '')
		}

		if (value.length !== selectionStart) {
			return
		}

		const firstSymbols =
			inputNumbersValue[0] === '9'
				? '+7 (9'
				: ['8', '9'].includes(inputNumbersValue[0])
				? inputNumbersValue[0]
				: `+${inputNumbersValue[0]}`

		formatedInputValue = firstSymbols + ' '

		if (inputNumbersValue.length > 1) {
			formatedInputValue += '(' + inputNumbersValue.substring(1, 4)
		}

		if (inputNumbersValue.length >= 5) {
			formatedInputValue += ') ' + inputNumbersValue.substring(4, 7)
		}

		if (inputNumbersValue.length >= 8) {
			formatedInputValue += '-' + inputNumbersValue.substring(7, 9)
		}

		if (inputNumbersValue.length >= 10) {
			formatedInputValue += '-' + inputNumbersValue.substring(9, 11)
		}

		target.value = formatedInputValue
	}

	const hanleOnKeyDown = event => {
		const input = event.target
		if (
			event.key === BACKSPACE_KEY &&
			getInputNumbersValue(input.value).length === 1
		) {
			input.value = ''
		}
		return input
	}

	const handlePhonePaste = event => {
		const pasted = event.clipboardData ?? window['clipboardData']
		const input = event.target
		const inputNumbersValue = getInputNumbersValue(input.value)

		if (pasted) {
			const pastedText = pasted.getData('Text')
			if (PATTERN.test(pastedText)) {
				input.value = inputNumbersValue
			}
		}
	}

	return (
		<div className={`input-block width-${width}`}>
			<input
				type='tel'
				aria-label={at.en ? 'Phone number' : 'Телефон'}
				{...register('phone', {
					required: `*${
						at.en
							? 'Phone number is required'
							: 'Пожалуйста, введите Ваш номер телефона'
					}`,
					minLength: {
						value: 11,
						message: `*${
							at.en
								? 'Phone number is too short'
								: 'Номер телефона слишком короткий'
						}`
					},
					maxLength: {
						value: 18,
						message: `*${
							at.en
								? 'Phone number is too short'
								: 'Номер телефона слишком длинный'
						}`
					},
					pattern: {
						value: /^[\d\s+\-()]+$/,
						message: '* Неверный формат номера'
					}
				})}
				onFocus={e => e.target.classList.add('texted')}
				onBlur={e =>
					e.target.value === '' ? e.target.classList.remove('texted') : ''
				}
				onInput={handlePhoneInput}
				onKeyDown={hanleOnKeyDown}
				onPaste={handlePhonePaste}
			/>
			<div
				className={cn({
					'input-placeholder': true
				})}
			>
				{at.en ? 'Phone number' : 'Телефон'}
			</div>
			<p className='inpt-err-msg'>{errors.phone && errors.phone.message}</p>
		</div>
	)
}

export default InputPhone
