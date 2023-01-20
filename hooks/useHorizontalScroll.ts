import { useRef, useEffect } from 'react'

const useHorizontalScroll = () => {
	const ref = useRef()
	useEffect(() => {
		// TODO: figure out better types
		const refCurrent: any = ref.current
		if (refCurrent) {
			const onWheel = e => {
				if (e.deltaY == 0) return
				e.preventDefault()
				refCurrent.scrollTo({
					left: refCurrent.scrollLeft + e.deltaY,
					behavior: 'smooth'
				})
			}
			refCurrent.addEventListener('wheel', onWheel)
			return () => refCurrent.removeEventListener('wheel', onWheel)
		}
		return
	}, [])
	return ref
}

export default useHorizontalScroll
