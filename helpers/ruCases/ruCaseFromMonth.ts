const ruCaseFromMonth = (qty: number) => {
	const num = qty % 10

	if (qty === 0) return 'месяцев'

	if (qty === 1) return 'месяцa'

	if (qty > 1 && qty < 20) return 'месяцев'

	if (qty > 20 && num === 0) return 'месяцев'

	if (qty > 20 && num === 1) return 'месяца'

	if (qty > 20 && num > 1) return 'месяцев'

	return ''
}

export default ruCaseFromMonth
