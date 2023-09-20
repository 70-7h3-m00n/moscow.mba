import stls from './SectionPartnersReviews.module.sass'
import cn from 'classnames'
import SectionPartnersReviewsProps from './SectionPartnersReviews.props'

import { Wrapper } from '@/components/layout'
import Image from 'next/image'
import { IconGeometricEllipse } from '@/components/icons'

export default function SectionPartnersReviews({
	data,
	className,
	...rest
}: SectionPartnersReviewsProps) {
	return (
		<section className={cn(stls.container, className)} {...rest}>
			<Wrapper classNames={[stls.wrapper]}>
				<h2 className={stls.title}>Отзывы партнёров</h2>
				<ul className={stls.grid}>
					{data.map((item, idx) => (
						<li className={stls.item} key={idx}>
							<div className={stls.imageWrapper}>
								<Image
									src={item.src}
									width={70}
									height={70}
									alt={'Partner image'}
								/>
							</div>
							<p className={stls.variantDescription}>{item.review}</p>
						</li>
					))}
				</ul>
				<IconGeometricEllipse
					className={cn(stls.ellipse, stls.left)}
					width={350}
					height={350}
				/>
				<IconGeometricEllipse
					className={cn(stls.ellipse, stls.right)}
					width={600}
					height={600}
				/>
			</Wrapper>
		</section>
	)
}
