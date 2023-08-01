type TypeMonth = {
	id: number | null
	First: number | null
	Second: number | null
	Third: number | null
	Month: string | null
	FirstOneMoreDay: boolean | null
	SecondOneMoreDay: boolean | null
	ThirdOneMoreDay: boolean | null
}

type TypeLibUntil = TypeMonth[]

export default TypeLibUntil
