import stls from './SectionHero.module.sass'
import cn from 'classnames'
import SectionHeroProps from './SectionHero.props'

import Image from 'next/image'
import { Wrapper } from '@/components/layout'
import useAt from '@/hooks/useAt'

export default function SectionHero({
	data,
	className,
	...rest
}: SectionHeroProps) {
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
