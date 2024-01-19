import stls from './Details.module.sass'
import cn from 'classnames'
import { DetailsProps } from './types'

import { useContext } from 'react'
import { ProgramPageContext } from 'modules/program-page/fractals/context/context'
import { GetDetailsData } from './fractals/GetDetailsData'
import { Partnership } from '../../HeroSection/widgets/Partnership/Partnership'
import { Sale } from '../../HeroSection/widgets/Sale/Sale'

export const Details = ({ className }: DetailsProps) => {
	const { state } = useContext(ProgramPageContext)
	const { program } = state

	const detailsData = GetDetailsData().filter(item => item)

	const isPartnership = program?.partnership && program?.partnership?.url

	return (
		<div className={cn(className, stls.details)}>
			{isPartnership && (
				<Partnership className={stls.details__banner} program={program} />
			)}
			<Sale className={stls.sale} program={program} />
			<ul className={stls.list}>
				{detailsData.map((item, idx) => (
					<li className={stls.item} key={idx}>
						<div className={stls.item__title}>{item.title}</div>
						<div className={stls.item__description}>{item.description}</div>
					</li>
				))}
			</ul>
		</div>
	)
}
