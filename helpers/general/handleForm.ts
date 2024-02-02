import { ClipboardEvent, FormEvent, KeyboardEvent } from 'react'

export const handlePhoneInput = (event: FormEvent<HTMLInputElement>): void => {
	const target = event.target as HTMLInputElement
	const { selectionStart, value } = target

	const inputNumbersValue = target.value.replace(/\D/g, '')
	let formatedInputValue = ''

	if (!inputNumbersValue) {
		target.value = ''
		return
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

export const hanleOnKeyDown = (
	event: KeyboardEvent<HTMLInputElement>
): void => {
	const target = event.target as HTMLInputElement
	if (
		event.key === 'Backspace' &&
		target.value.replace(/\D/g, '').length === 1
	) {
		target.value = ''
	}
	return
}

export const handlePhonePaste = (
	event: ClipboardEvent<HTMLInputElement>
): void => {
	const target = event.target as HTMLInputElement
	const pasted = event.clipboardData ?? window['clipboardData']
	const inputNumbersValue = target.value.replace(/\D/g, '')

	if (pasted) {
		const pastedText = pasted.getData('Text')
		if (/\D/g.test(pastedText)) {
			target.value = inputNumbersValue
		}
	}
}
