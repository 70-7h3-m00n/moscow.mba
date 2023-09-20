import stls from './SectionCooperationVariants.module.sass'
import cn from 'classnames'
import SectionCooperationVariantsProps from './SectionCooperationVariants.props'

import { Wrapper } from '@/components/layout'
import Link from 'next/link'

export default function SectionCooperationVariants({
	data,
	className,
	...rest
}: SectionCooperationVariantsProps) {
	return (
		<section className={cn(stls.container, className)} {...rest}>
			<Wrapper classNames={[stls.wrapper]}>
				<h2 className={stls.title}>Варианты сотрудничества</h2>
				<ul className={stls.grid}>
					{data.map((variant, idx) => (
						<li key={idx}>
							<span className={stls.variantTitle}>{variant.title}</span>
							<p className={stls.variantDescription}>{variant.description}</p>
							{variant.link && (
								<Link className={stls.link} href={variant.link.url}>
									{variant.link.name}
								</Link>
							)}
						</li>
					))}
				</ul>
			</Wrapper>
		</section>
	)
}
