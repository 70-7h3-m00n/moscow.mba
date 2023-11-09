import stls from './ForeignAffiliates.module.sass'
import cn from 'classnames'
import { ForeignAffiliatesProps } from './types'

import Image from 'next/legacy/image'
import { base64pixel } from '@/config/index'
import { useAt } from '@/hooks/index'
import { Wrapper } from '@/components/layout'
import { globalCampuses, moscowCampuses } from './constants'

const ForeignAffiliates = ({ className }: ForeignAffiliatesProps) => {
	const at = useAt()

	const campuses = at.profession ? moscowCampuses : globalCampuses

	return (
		<section className={cn(className, stls.container)}>
			<Wrapper classNames={[stls.wrapper]}>
				{at.profession ? (
					<p className={stls.professionParagraph}>
						Процесс обучения проходит в ультрасовременных кампусах Академии в
						центре Москвы
					</p>
				) : (
					<>
						<h2>{at.en ? 'Foreign affiliates' : 'Филиалы за рубежом'}</h2>
						<p className={stls.title}>
							{at.en
								? 'MBA affiliates work in Moscow, Berlin, New-York, Tashkent, and Almaty'
								: 'У Moscow Business Academy работают филиалы в Москве, Берлине, Нью-Йорке, Ташкенте и Алматы'}
						</p>
					</>
				)}
				<div className={stls.flexContainer}>
					<ul className={stls.imagesList}>
						{campuses.map((campus, idx) => (
							<li className={stls.imagesListItem} key={idx}>
								<div className={stls.image}>
									<Image
										src={campus.src}
										alt={at.en ? 'Campus' : 'Здание кампуса'}
										width={191}
										height={191}
										placeholder='blur'
										blurDataURL={base64pixel}
									/>
								</div>
							</li>
						))}

						<li className={stls.imagesListItem}>
							<div className={stls.circle}>
								<div className={stls.number}>
									5 000 м<sup>2</sup>
								</div>
								<div className={stls.line}></div>
								<p>
									{at.en
										? 'total surface area of all campuses'
										: 'площадь всех кампусов'}
								</p>
							</div>
						</li>
					</ul>
					<div className={stls.mapContainer}>
						{/*TODO: swap fixed layout with default, fix up the css for an image */}
						<Image
							src={
								at.profession
									? '/assets/images/branches_map-moscow.png'
									: '/assets/images/branches_map-alt.png'
							}
							alt={
								at.en
									? 'MBA affiliates work in Moscow, Berlin, New-York, Tashkent, and Almaty'
									: 'У Moscow Business Academy работают филиалы в Москве, Берлине, Нью-Йорке, Ташкенте и Алматы'
							}
							width={659}
							height={394}
							// layout='fixed'
							placeholder='blur'
							blurDataURL={base64pixel}
						/>
					</div>
				</div>
			</Wrapper>
		</section>
	)
}

export default ForeignAffiliates
