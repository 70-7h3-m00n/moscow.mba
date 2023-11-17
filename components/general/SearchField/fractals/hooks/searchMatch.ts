export const checkMatchAtBeginning = (title: string, searchTerm: string) => {
	const formattedTitle = title?.toLowerCase()?.replace(/-/g, ' ')

	if (!formattedTitle) {
		return 1
	}

	const firstWordStartsWithSearchTerm = formattedTitle.startsWith(searchTerm)
	const anyWordStartsWithSearchTerm = formattedTitle.includes(` ${searchTerm}`)

	return firstWordStartsWithSearchTerm
		? -1
		: anyWordStartsWithSearchTerm
		? 0
		: 1
}
