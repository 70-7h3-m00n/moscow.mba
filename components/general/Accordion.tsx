import stls from '@/styles/components/general/Accordion.module.sass'
import cn from 'classnames'
import ImageContainer from '@/components/general/ImageContainer'
import { RefObject, useRef } from 'react'

const Accordion = ({
  accordionItem,
  accordionIndex = null,
  activeAccordion = null,
  setActiveAccordion = null,
  scrollableIntoView
}) => {
  const { title, content, isList, isImage } = accordionItem
  const accordion = useRef<HTMLDivElement>(null)
  let accordionContent

  if (typeof content === 'string') {
    accordionContent = <p className={stls.mb}>{content}</p>
  }

  if (!isList && Array.isArray(content)) {
    accordionContent = content.map((item, idx) => (
      <p key={idx} className={stls.mb}>
        {item}
      </p>
    ))
  }

  if (isList) {
    accordionContent = (
      <ol>
        {content.map((item, idx) => (
          <li key={idx} className={stls.olItem}>
            {item}
          </li>
        ))}
      </ol>
    )
  }

  if (isImage) {
    accordionContent = content.map((image, idx) => (
      <ImageContainer
        key={idx}
        image={image}
        imageWidth={image.smallWidth}
        imageHeight={image.smallHeight}
      />
    ))
  }

  const handleAccordionClick = () => {
    accordion.current.scrollIntoView({ block: 'center' })

    if (activeAccordion) setActiveAccordion(-1)

    if (!activeAccordion && setActiveAccordion)
      setActiveAccordion(accordionIndex)
  }

  return (
    <div
      ref={accordion}
      className={cn(stls.container, {
        [stls.equalPadding]: isImage,
        [stls.opened]: activeAccordion
      })}
      onClick={handleAccordionClick}>
      <div className={stls.plus}>
        <i></i>
        <i></i>
      </div>
      <div className={stls.title}>{title}</div>
      <div
        className={cn(stls.content, {
          [stls.imageContent]: isImage
        })}>
        {accordionContent}
      </div>
    </div>
  )
}

export default Accordion
