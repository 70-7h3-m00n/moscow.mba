export const countProgressRange = (value, min, max) => {
	const countProgress = ((value - min) / (max - min)) * 100

	if (isNaN(countProgress)) {
		return 0
	} else {
		return countProgress
	}
}