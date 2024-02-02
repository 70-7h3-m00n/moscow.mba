import stls from './DiplomaPopup.module.sass'
import cn from 'classnames'
import { DiplomaPopupProps } from './types'

import Popup from 'reactjs-popup'
import { BtnBeta } from '@/components/btns'
import { IconCloseAlt } from '@/components/icons'
import { IconArrowAlt } from '../../components/icons/IconArrowAlt/IconArrowAlt'
import Image from 'next/image'
import { useState } from 'react'

export const DiplomaPopup = ({ className, ...rest }: DiplomaPopupProps) => {
	const [activeIdx, setActiveIdx] = useState(0)

	const diplomas = {
		profession: [
			{
				title: 'Диплом',
				src:
					'/assets/diplomas/profession/new/qualification-diploma-profession.jpg',
				orientation: 'horizontal'
			},
			{
				title: 'Приложение к диплому',
				src: '/assets/diplomas/profession/new/diploma-addendum-profession.jpg',
				orientation: 'horizontal'
			},
			{
				title: 'Диплом',
				src: '/assets/diplomas/profession/new/certificate-profession.jpg',
				orientation: 'horizontal'
			}
		]
	}

	const imagesData = diplomas.profession

	const onlyImage = imagesData.length === 1

	const prev = () => {
		if (activeIdx > 0) setActiveIdx(prev => prev - 1)
	}

	const next = () => {
		if (activeIdx < imagesData.length - 1) setActiveIdx(prev => prev + 1)
	}

	return (
		<>
			<Popup
				trigger={
					<BtnBeta className={stls.btn} variant='beta'>
						Посмотреть дипломы
					</BtnBeta>
				}
				modal
				lockScroll
				nested
				closeOnDocumentClick
			>
				{/* @ts-expect-error  */}
				{close => (
					<div className={cn(className, stls.content)} {...rest}>
						<div className={stls.imageWrapper}>
							<button className={stls.close} onClick={close}>
								<IconCloseAlt fill='#fff' crossColor='#000' />
							</button>
							<Image
								className={stls.image}
								src={imagesData[activeIdx].src}
								fill
								alt={imagesData[activeIdx].title}
							/>
						</div>

						<div className={cn(stls.navigation)}>
							{!onlyImage && (
								<button className={stls.navigation__btn} onClick={prev}>
									<IconArrowAlt
										className={cn(stls.iconModules)}
										status={activeIdx > 0 ? 'default' : 'disabled'}
										direction='left'
										variant='alpha'
									/>
								</button>
							)}
							<p className={stls.navigation__name}>
								{imagesData[activeIdx].title}
							</p>
							{!onlyImage && (
								<button className={stls.navigation__btn} onClick={next}>
									<IconArrowAlt
										className={cn(stls.iconModules)}
										status={
											activeIdx < imagesData.length - 1 ? 'default' : 'disabled'
										}
										direction='right'
										variant='alpha'
									/>
								</button>
							)}
						</div>
					</div>
				)}
			</Popup>
		</>
	)
}
