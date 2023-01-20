import { RefObject, useEffect, useRef } from 'react'

type Options = {
	root?: Element | Document | null
	rootMargin?: string
	threshold?: number | number[]
}

export const useScrollObserver = (
	childRefs: RefObject<HTMLElement>[],
	callBack: IntersectionObserverCallback,
	options?: Options
) => {
	const observer = useRef<IntersectionObserver>()
	useEffect(() => {
		observer.current = new IntersectionObserver(callBack, options)
		childRefs.map?.(
			({ current }) => current && observer.current.observe(current)
		)
		return () => {
			childRefs.map?.(
				({ current }) => current && observer.current.unobserve(current)
			)
		}
	}, [callBack, childRefs, options])
}

export default useScrollObserver
