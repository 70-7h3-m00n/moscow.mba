import stls from './ExpertsCard.module.sass'
import cn from 'classnames'
import { ExpertsCardProps } from './types'

import { PopupTeacherNew } from '@/components/popups'
import Image from 'next/image'
import { Tag } from '../../components'
import Popup from 'reactjs-popup'
import { BtnBeta } from '@/components/btns'
import { useState } from 'react'

export const ExpertsCard = ({
	className,
	expert,
	mainExpert = false,
	...rest
}: ExpertsCardProps) => {
	const [open, setOpen] = useState(false)
	const closeModal = () => setOpen(false)

	return (
		<div
			className={cn(className, stls.carousel__item, stls.item)}
			key={`Expert--${expert.name}`}
			{...rest}
		>
			<div className={stls.card}>
				<Image
					className={stls.item__image}
					src={expert.portrait.url}
					alt={expert.name}
					width={318}
					height={416}
					style={{
						objectFit: 'cover'
					}}
				/>
				{mainExpert && (
					<Tag className={stls.cardTag} variant='eta'>
						Ведущий автор программы
					</Tag>
				)}
				<Popup
					trigger={
						<BtnBeta className={stls.cardBtn} variant='alpha' size='s'>
							Подробнее
						</BtnBeta>
					}
					modal
					lockScroll
					nested
					closeOnDocumentClick
					open={open}
					onClose={closeModal}
				>
					{/* @ts-expect-error  */}
					{close => <PopupTeacherNew close={close} teacher={expert} />}
				</Popup>
			</div>
			<p className={stls.item__name} onClick={() => setOpen(o => !o)}>
				{expert.name}
			</p>
			<p className={stls.item__desc}>{expert.description}</p>
		</div>
	)
}
