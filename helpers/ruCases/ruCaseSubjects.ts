const ruCaseSubjects = (qty: number) => {
	const num = qty % 10

	if (qty === 0) return 'дисциплин'

	if (qty === 1) return 'дисциплина'

	if (qty > 1 && qty < 5) return 'дисциплины'

	if (qty >= 5 && qty < 20) return 'дисциплин'

	if (qty > 20 && num === 0) return 'дисциплин'

	if (qty > 20 && num === 1) return 'дисциплина'

	if (qty > 20 && num > 1 && num < 5) return 'дисциплины'

	if (qty > 20 && num >= 5) return 'дисциплин'

	return ''
}

export default ruCaseSubjects
