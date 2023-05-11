import stls from '@/styles/components/images/ImgTemplate.module.sass'
import { TypeClassNames, TypeImg } from '@/types/index'
import Image from 'next/legacy/image'
import cn from 'classnames'
import { base64pixel } from '@/config/index'
import { getClassNames } from '@/helpers/index'
import { ComponentPropsWithRef } from 'react'

type TypeImgTemplateProps = TypeClassNames & {
	readonly faded?: boolean
	readonly filter?: boolean
	readonly filterAlt?: boolean
	readonly darken?: boolean
} & ComponentPropsWithRef<typeof Image>

const ImgTemplate = ({
	src,
	title,
	alt,
	classNames,
	faded,
	filter,
	filterAlt,
	darken,
	...imageProps
}: TypeImgTemplateProps) => {
	return (
		<span
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
			title={title}>
			<span
				className={cn({
					[stls.faded]: faded,
					[stls.filter]: filter,
					[stls.filterAlt]: filterAlt,
					[stls.darken]: darken,
					[stls.isHidden]: !faded && !filter && !filterAlt && !darken
				})}></span>
			{src && (
				<Image
					src={src}
					alt={alt}
					title={title}
					className={stls.img}
					placeholder='blur'
					blurDataURL={base64pixel}
					aria-label={title || alt}
					{...imageProps}
				/>
			)}
		</span>
	)
}

export default ImgTemplate
