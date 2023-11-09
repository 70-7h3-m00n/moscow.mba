export const countProgressRange = (value: number, min: number, max: number) => {
	const countProgress = ((value - min) / (max - min)) * 100

	if (isNaN(countProgress)) {
		return 0
	} else {
		return countProgress
	}
}
