import stls from './Diploma.module.sass'
import cn from 'classnames'
import { DiplomaProps } from './types'

import { useState } from 'react'
import Image from 'next/legacy/image'
import Popup from 'reactjs-popup'
import { base64pixel } from '@/config/index'
import { useAt } from '@/hooks/index'
import { Wrapper } from '@/components/layout'
import { Pagination } from '@/components/general'
import PopupImage from '@/components/popups/PopupImage'
import { DiplomaPaginationImages } from './constants'

const Diploma = ({ darkBackground = false }: DiplomaProps) => {
	const at = useAt()
	const typeOfPage = at.mini
		? 'mini'
		: at.mba
		? 'mba'
		: at.profession
		? 'profession'
		: at.course
		? 'course'
		: at.executive
		? 'executive'
		: at.promo
		? 'promo'
		: at.mba
		? 'mbl'
		: 'mba'
	const atPrograms = at.mini || at.mba || at.mbl

	const diplomaPaginationImages = DiplomaPaginationImages()

	const [currentDiploma, setCurrentDiploma] = useState(0)

	const diplomasPerPage = 1
	const numberOfPages = diplomaPaginationImages.length / diplomasPerPage

	const showNextDiplomaImage = newPage => {
		setCurrentDiploma(newPage)
	}

	const renderPaginationAndTitle = () => {
		return !at.profession && !atPrograms && !at.promo ? (
			<>
				<div className={stls.paginationContainer}>
					<Pagination
						numberOfPages={numberOfPages}
						itemsPerPage={diplomasPerPage}
						totalItems={diplomaPaginationImages.length}
						showNextPage={showNextDiplomaImage}
						onlyPagination
						semiTransparentBg
					/>
				</div>
				<h3 className={stls.imageTitle}>
					{diplomaPaginationImages[currentDiploma].title}
				</h3>
			</>
		) : null
	}

	const renderDiplomaImage = () =>
		at.profession ? (
			<div className={stls.diplomaWrapper}>
				<Popup
					trigger={
						<a>
							<Image
								src={`/assets/images/diplomas/profession-sertificate.jpg`}
								alt='Ваш будущий диплом'
								width={532}
								height={376}
								layout={'responsive'}
								placeholder='blur'
								blurDataURL={base64pixel}
							/>
						</a>
					}
					className='image-popup'
					modal
					lockScroll
					nested
					closeOnDocumentClick
				>
					{/* @ts-expect-error  */}
					{close => (
						<PopupImage
							closePopupImage={close}
							image={{
								path: '/assets/diplomas/profession/certificate-profession.jpg',
								fullWidth: 1485,
								FullHeight: 1050,
								name: 'Сертификат академии'
							}}
						/>
					)}
				</Popup>
				<Popup
					trigger={
						<a>
							<Image
								src={`/assets/diplomas/profession/qualification-diploma-profession.jpg`}
								alt='Ваш будущий диплом'
								width={532}
								height={376}
								layout={'responsive'}
								placeholder='blur'
								blurDataURL={base64pixel}
							/>
						</a>
					}
					className='image-popup'
					modal
					lockScroll
					nested
					closeOnDocumentClick
				>
					{/* @ts-expect-error  */}
					{close => (
						<PopupImage
							closePopupImage={close}
							image={{
								path: `/assets/diplomas/profession/qualification-diploma-profession.jpg`,
								fullWidth: 1485,
								FullHeight: 1050,
								name: 'Сертификат академии'
							}}
						/>
					)}
				</Popup>
				<p className={stls.professionAcademyDiploma}>Диплом Академии</p>
				<p className={stls.professionAcademyDiploma2}>
					Диплом установленного образца
				</p>
				<p className={stls.professionNote}>
					Диплом Online программ не отличается от дипломов очных программ за
					счет того, что преподают те же спикеры по тем же учебным планам
				</p>
			</div>
		) : atPrograms || at.promo ? (
			<Image
				src={`/assets/images/diplomas/mba-${typeOfPage}-diploma.jpg`}
				alt='Ваш будущий диплом'
				width={532}
				height={376}
				layout={'responsive'}
				placeholder='blur'
				blurDataURL={base64pixel}
			/>
		) : (
			diplomaPaginationImages[currentDiploma].image
		)

	return (
		<section
			className={cn(stls.container, {
				[stls.noMobileMb]: at.course,
				[stls.professionPage]: at.profession,
				[stls.darkBg]: darkBackground
			})}
		>
			<Wrapper classNames={[stls.wrapper]}>
				<div className={stls.imageContainer}>
					{renderPaginationAndTitle()}
					<div className={stls.image}>{renderDiplomaImage()}</div>
				</div>
				<div className={stls.content}>
					<h2>
						{at.profession || at.course
							? 'Ваши будущие дипломы'
							: 'Ваш будущий диплом'}
					</h2>
					<div className={stls.desc}>
						{at.mini || at.mba || at.promo || at.mbl ? (
							'Международный диплом установленного образца с присвоением степени «Мастер делового администрирования» с европейским приложением'
						) : (
							<>
								Мы производим обучение на основании государственной лицензии
								№041221. Вы получите{' '}
								{at.course
									? 'удостоверение установленного образца'
									: 'диплом о профессиональной переподготовке'}{' '}
								и сертификат академии, которые можно добавить в портфолио и
								показать работодателю
							</>
						)}
					</div>
					{at.mini
						? (at.online || at.promo || at.mbl) && (
								<div className={stls.note}>
									Ваш итоговый документ не будет отличаться от дипломов, которые
									получают студенты очной формы обучения. Основные дисциплины и
									ведущие их практикующие специалисты будут теми же, как и
									высокий уровень качества предоставляемых учебных материалов.
								</div>
						  )
						: (at.online || at.promo || at.mbl) && (
								<div className={stls.note}>
									Диплом {atPrograms ? 'MBA Online' : 'дистанционных'}{' '}
									{!atPrograms && 'программ'} не отличается от дипломов очных
									программ за счет того, что преподают те же спикеры по тем же
									учебным планам
								</div>
						  )}
				</div>
			</Wrapper>
		</section>
	)
}

export default Diploma
