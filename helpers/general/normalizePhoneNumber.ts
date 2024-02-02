export const normalizePhoneNumber = phoneNumber => {
	// Удалить все символы, кроме цифр
	const cleanedNumber = phoneNumber.replace(/\D/g, '')

	// Если номер начинается с "8", заменить его на "7"
	const normalizedNumber = cleanedNumber.startsWith('8')
		? '7' + cleanedNumber.slice(1)
		: cleanedNumber

	return normalizedNumber
}
