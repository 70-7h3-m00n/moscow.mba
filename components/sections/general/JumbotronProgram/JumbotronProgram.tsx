import stls from './JumbotronProgram.module.sass'
import cn from 'classnames'

import Popup from 'reactjs-popup'
import Image from 'next/legacy/image'
import { Until, PlacesLeft } from '@/components/costs/'
import {
	Breadcrumbs,
	JumbotronLabel,
	InfoRectangle
} from '@/components/general'
import PopupForm from '@/components/popups/PopupForm'
import Discount from '@/components/costs/Discount'
import { useAt } from '@/hooks/index'
import {
	IconCheckCircleAlt,
	IconCrossThin,
	IconPatrikeev
} from '@/components/icons'
import Loan from '@/components/costs/Loan'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { DisabledProgram } from './DisabledProgram/DisabledProgram'
import { JumbotronProgramProps } from './types'

const JumbotronProgram = ({
	program,
	programs = null
}: JumbotronProgramProps) => {
	const router = useRouter()
	const at = useAt()

	const isDigitalLaw = router.query.slug === 'zifrovoe-pravo'

	const backgrondPicture =
		program?.picture?.url || '/assets/images/jumbotron_2.jpg'

	const isDiscounted =
		(at.mini && at.online) ||
		(at.mba && at.online) ||
		(at.profession && at.online) ||
		(at.course && at.online) ||
		at.mbl

	{
		/* TODO: Test, TemporarySolution: Текстовый шаблон страницы курсов MINI MBA */
	}

	// Toggle Switch
	const [toggleSwitch, setToggleSwitch] = useState(at.mini)

	const currentSlug = router.query.slug

	const alternativeType = at.mba ? 'mini' : at.mini ? 'mba' : null
	const alternativeStydyFormat = at.online ? 'online' : 'blended'

	const alternativeProgram =
		programs &&
		programs?.filter(
			prog =>
				prog.slug === currentSlug &&
				prog.category.type === alternativeType &&
				prog.studyFormat === alternativeStydyFormat &&
				prog.isActive
		)

	const alternativeLink =
		alternativeProgram &&
		alternativeProgram[0] &&
		`/programs/${alternativeType}/${alternativeStydyFormat}/${currentSlug}`

	const handleToggleSwitch = event => {
		setToggleSwitch(event.target.checked)
		router.push(alternativeLink)
	}

	return (
		<section className={stls.container}>
			{!program?.isActive && <DisabledProgram />}
			<div className={stls.image}>
				<Image
					src={backgrondPicture}
					alt='Студенты обучаются'
					layout='fill'
					priority
				/>
			</div>
			<div className={stls.generalContainer}>
				<div className={stls.content}>
					<Breadcrumbs programChunkData={program} />
					<div className={stls.contentTop}>
						{(at.online || at.mbl) && (
							<div className={cn(stls.discountSticker)}>
								<div className={stls.discountAmount}>
									<Discount />
								</div>
								<span>
									до <Until />
								</span>
							</div>
						)}
						<div className={stls.label}>
							<div className={stls.leftContainer}>
								<JumbotronLabel />
								<div className={stls.placesLeft}>
									Осталось мест: <PlacesLeft uniqueKey={program?.id} />
								</div>
							</div>
							{!!alternativeLink && (
								<label className={stls.switch}>
									<input
										className={stls.input}
										type='checkbox'
										defaultChecked={toggleSwitch}
										onChange={handleToggleSwitch}
									/>
									<span className={stls.slider}></span>
								</label>
							)}
						</div>
					</div>
					<div className={stls.flexContainer}>
						<div className={stls.descContainer}>
							<h1
								className={cn({
									[stls.smallerTitle]: at.profession || at.course,
									[stls.digitalLaw]: isDigitalLaw
								})}
							>
								{program?.title}
							</h1>
							{isDigitalLaw && (
								<div className={stls.digitalLawContainer}>
									<IconCrossThin />
									<IconPatrikeev />
								</div>
							)}
							<div className={stls.desc}>
								{isDigitalLaw && (
									<p className={cn(stls.paragraph, stls.digitalLaw)}>
										Курс разработан в партнерстве с дистанционным юридическим
										сервисом “ПАТРИКЕЕВ И ПАРТНЕРЫ”
									</p>
								)}
								{/* TODO: Test, TemporarySolution: Текстовый шаблон страницы курсов MINI MBA */}
								{at.mini
									? 'Оставьте заявку на консультацию по программе, чтобы узнать возможные варианты скидок и требования к поступлению'
									: at.profession || at.course
									? program?.description
									: 'Оставьте заявку и получите консультацию по программе, а также узнайте возможные варианты скидок и требования к поступлению'}
							</div>
							<div className={stls.btnLoanGroup}>
								<Popup
									trigger={<a className={stls.button}>Оставить заявку</a>}
									modal
									lockScroll
									nested
									closeOnDocumentClick
								>
									{/* @ts-expect-error  */}
									{close => (
										<PopupForm
											programId={program?._id}
											programTitle={program?.title}
											title={'Получите консультацию'}
											closePopUpForm={close}
											formName={`Заявка с модальной формы первого экрана${
												program?.title
													? ` программы ${program?.category?.type || ''} ${
															program?.studyFormat || ''
													  } ${program.title}`
													: ''
											}`}
										/>
									)}
								</Popup>
								{!at.executive && (
									<div className={stls.loanContainer}>
										<IconCheckCircleAlt />
										<p className={stls.loanDesc}>
											Можно учиться в рассрочку за{' '}
											<Loan
												discount={isDiscounted}
												type={program?.category?.type}
												format={program?.studyFormat}
												notComparingPrices
												programPrice={+program?.price}
											/>{' '}
											на 12 мес
										</p>
									</div>
								)}
							</div>
						</div>
						<ul className={stls.list}>
							<li className={stls.item}>
								<div className={stls.number}>2023</div>
								<p>Новейшая программа 2023 года</p>
							</li>
							<li className={stls.separator}></li>

							<li className={stls.item}>
								<div className={stls.number}>150+</div>
								<p>
									{at.profession || at.course
										? 'экспертов формируют программы'
										: 'международных экспертов'}
								</p>
							</li>
							<li className={stls.separator}></li>

							<li className={stls.item}>
								<div className={stls.number}>9000+</div>
								<p>студентов по всему миру</p>
							</li>
						</ul>
					</div>
					{program?.isActive && (
						<InfoRectangle
							type={program?.category?.type ?? 'executive'}
							format={program?.studyFormat}
							studyDurationMonths={program?.duration?.minStudyMonths}
							studyDurationHours={program?.duration?.studyHours}
							programPrice={program?.price}
						/>
					)}
				</div>
			</div>
		</section>
	)
}

export default JumbotronProgram
