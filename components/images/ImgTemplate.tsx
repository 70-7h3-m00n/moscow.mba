import stls from '@/styles/components/images/ImgTemplate.module.sass'
import { TypeClassNames, TypeImg } from '@/types/index'
import Image from 'next/image'
import { StaticImageData } from 'next/image'
import cn from 'classnames'
import { base64pixel } from '@/config/index'
import { getClassNames } from '@/helpers/index'

type TypeImgTemplateProps = TypeClassNames &
  TypeImg & {
    readonly src: StaticImageData | string
    readonly alt: string
    readonly title?: string
    readonly faded?: boolean
    readonly filter?: boolean
    readonly filterAlt?: boolean
    readonly darken?: boolean
    readonly priority?: boolean
    readonly layout?: 'intrinsic' | 'fixed' | 'responsive' | 'fill'
    readonly objectFit?:
      | 'contain'
      | 'cover'
      | 'fill'
      | 'none'
      | 'scale-down'
      | 'inherit'
      | 'initial'
      | 'revert'
      | 'unset'
    readonly objectPosition?: any // replace any type with right one
  }

const ImgTemplate = ({
  classNames,
  width,
  height,
  src,
  alt,
  title,
  faded,
  filter,
  filterAlt,
  darken,
  priority,
  layout,
  objectFit,
  objectPosition
}: TypeImgTemplateProps) => {
  return (
    <div
      className={
        cn(
          [stls.container],
          { [stls.containerFaded]: faded },
          { [stls.containerFilter]: filter },
          { [stls.containerFilterAlt]: filterAlt },
          { [stls.containerDarken]: darken },
          getClassNames({ classNames })
        ) || undefined
      }
      // aria-label={title || alt}
      // title={title}
    >
      <div
        className={cn({
          [stls.faded]: faded,
          [stls.filter]: filter,
          [stls.filterAlt]: filterAlt,
          [stls.darken]: darken,
          [stls.isHidden]: !faded && !filter && !filterAlt && !darken
        })}></div>
      {src && (
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={stls.img}
          placeholder='blur'
          blurDataURL={base64pixel}
          priority={priority}
          layout={layout}
          objectFit={objectFit}
          objectPosition={objectPosition}
          aria-label={title || alt}
        />
      )}
    </div>
  )
}

export default ImgTemplate
