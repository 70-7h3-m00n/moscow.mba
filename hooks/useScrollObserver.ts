import { MutableRefObject, RefObject, useEffect, useRef } from 'react'

type Options = {
  root?: Element | Document | null
  rootMargin?: string
  threshold?: number | number[]
}

export const useScrollObserver = (
  childRefs: RefObject<Element>[],
  callBack: IntersectionObserverCallback,
  options?: Options
) => {
  const observer = useRef<IntersectionObserver>()
  useEffect(() => {
    observer.current = new IntersectionObserver(callBack, options)
    childRefs.map(({ current }) => observer.current.observe(current))
    return () =>
      childRefs.forEach?.(({ current }) => observer.current.unobserve(current))
  }, [callBack, childRefs, options])
}

export default useScrollObserver
