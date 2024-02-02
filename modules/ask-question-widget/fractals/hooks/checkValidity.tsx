export const checkValidity = ({
	enteredContactData,
	way
}: {
	enteredContactData: string
	way: 'email' | 'phone'
}) => {
	const validationPatterns = {
		phone: /^[0-9\s+\-()]{11,18}$/,
		email: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
	}

	const isValid = validationPatterns[way].test(enteredContactData)
	return isValid
}
