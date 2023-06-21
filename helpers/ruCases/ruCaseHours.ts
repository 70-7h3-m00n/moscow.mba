const ruCaseMonth = (qty: number) => {
	const num = qty % 10

	if (qty === 0) return 'часов'

	if (qty === 1) return 'час'

	if (qty > 1 && qty < 5) return 'часа'

	if (qty >= 5 && qty < 20) return 'часов'

	if (qty > 20 && num === 0) return 'часов'

	if (qty > 20 && num === 1) return 'час'

	if (qty > 20 && num > 1 && num < 5) return 'часа'

	if (qty > 20 && num >= 5) return 'часов'

	return ''
}

export default ruCaseMonth
