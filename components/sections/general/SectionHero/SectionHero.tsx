import stls from './SectionHero.module.sass'
import cn from 'classnames'
import { SectionHeroProps } from './types'

import Image from 'next/image'
import { Wrapper } from '@/components/layout'
import useAt from '@/hooks/useAt'

export const SectionHero = ({ data, className, ...rest }: SectionHeroProps) => {
	const at = useAt()

	return (
		<section className={cn(stls.container, className)} {...rest}>
			<div className={stls.image}>
				<Image src={data.src} alt={data.title} fill priority />
			</div>
			<Wrapper classNames={[stls.wrapper, { [stls.partner]: at.partner }]}>
				<h2 className={cn(stls.title, { [stls.partner]: at.partner })}>
					{data.title}
				</h2>
				<p className={stls.paragraph}>{data.description}</p>
			</Wrapper>
		</section>
	)
}
