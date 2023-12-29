import stls from './Details.module.sass'
import cn from 'classnames'
import { DetailsProps } from './types'

import { useContext } from 'react'
import { ProgramPageContext } from 'modules/program-page/fractals/context/context'
import Image from 'next/image'
import { Tag } from '../Tag/Tag'
import { PlacesLeft } from '@/components/costs'
import { GetDetailsData } from './fractals/GetDetailsData'
import Until from '@/components/costs/Until'

export const Details = ({ className }: DetailsProps) => {
	const { state } = useContext(ProgramPageContext)
	const { program } = state

	const detailsData = GetDetailsData()

	return (
		<div className={cn(className, stls.details)}>
			{program?.partnership && program?.partnership?.url && (
				<div className={stls.details__banner}>
					<Image
						src={program?.partnership?.url}
						width={40}
						height={40}
						alt={program?.partnership?.string}
					/>
					<p>{program?.partnership?.string}</p>
				</div>
			)}
			<div>
				<p className={stls.details__title}>
					{/* //TODO discount & until date */}
					Участвует в&nbsp;распродаже <span className='red'>-45%</span> до{' '}
					<Until />
				</p>
				<Tag className={stls.details__tag} variant='gamma'>
					Осталось мест: <PlacesLeft uniqueKey={program?.id} />
				</Tag>
			</div>
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
