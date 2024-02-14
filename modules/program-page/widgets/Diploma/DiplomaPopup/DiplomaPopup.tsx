import stls from './DiplomaPopup.module.sass'
import cn from 'classnames'
import { DiplomaPopupProps } from './types'

import Popup from 'reactjs-popup'
import { BtnBeta } from '@/components/btns'
import { IconCloseAlt } from '@/components/icons'
import { IconArrowAlt } from '../../components/icons/IconArrowAlt/IconArrowAlt'
import Image from 'next/image'
import { useContext, useState } from 'react'
import useAt from '@/hooks/useAt'
import { ContextStaticProps } from '@/context/index'
import { ProgramPageContext } from 'modules/program-page/fractals/context/context'

export const DiplomaPopup = ({ className, ...rest }: DiplomaPopupProps) => {
	const at = useAt()
	const { state } = useContext(ProgramPageContext)
	const { program } = state
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
		],
		course: [
			{
				title: 'Сертификат',
				src: '/assets/diplomas/courses/new/certificate-courses.jpg',
				orientation: 'horizontal'
			}
		],
		courseFRDO: [
			{
				title: 'Сертификат',
				src: '/assets/diplomas/courses/new/certificate-courses.jpg',
				orientation: 'horizontal'
			},

			{
				title: 'Удостоверение',
				src:
					'/assets/diplomas/courses/new/qualification-certificate-courses.jpg',
				orientation: 'horizontal'
			}
		]
	}
	// На этих профессиях выдаётся только сертификат
	// Цифровое образование: онлайн-инструменты, платформы и технологии		Сертификат
	// cifrovoe-obrazovanie
	// IT-технологии в управлении проектами		Сертификат
	// IT-tehnologii-v-upravlenii-proektami

	const imagesData = at.profession
		? diplomas.profession
		: at.course && program?.frdo
		? diplomas.courseFRDO
		: at.course
		? diplomas.course
		: diplomas.profession
	//todo

	const filteredImagesData = imagesData?.filter(
		element => element !== undefined
	)

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
								src={imagesData[activeIdx]?.src}
								fill
								alt={imagesData[activeIdx].title}
							/>
						</div>

						<div className={cn(stls.navigation)}>
							{filteredImagesData.length !== 1 && (
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
							{filteredImagesData.length !== 1 && (
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
