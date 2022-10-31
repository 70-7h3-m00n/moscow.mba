import { MutableRefObject, useEffect, useRef, useState } from 'react'

export const useScrollObserver = (parentRef = null, childRefs: Element[]) => {
  const observer = useRef<IntersectionObserver>()
  const [isScroll, setIsScroll] = useState({})
  useEffect(() => {
    const options = {
      root: parentRef?.current || parentRef,
      rootMargin: '-40% 0px',
      threshold: Array.from({ length: 10 }, (_v, i) =>
        Number(((i + 1) * 0.1).toFixed(2))
      )
    }
    observer.current = new IntersectionObserver(entries => {
      entries.map(entry => {
        if (entry.isIntersecting)
          setIsScroll(prev => {
            const prevValue = prev[entry.target.textContent]
            const result = !prevValue
              ? 0.1
              : prevValue < 1
              ? prevValue + 0.1
              : 1
            return {
              ...prev,
              [entry.target.textContent]: result
            }
          })
      })
    }, options)
    childRefs?.map?.((childRef: Element) => observer.current.observe(childRef))
    return () =>
      childRefs?.forEach?.((childRef: Element) =>
        observer.current.unobserve(childRef)
      )
  }, [childRefs, parentRef])
  return Object.values(isScroll)
}

export default useScrollObserver
