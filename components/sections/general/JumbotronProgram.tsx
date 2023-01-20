import stls from '@/styles/components/sections/JumbotronProgram.module.sass'
import cn from 'classnames'
import Popup from 'reactjs-popup'
import Image from 'next/image'
import Until from '@/components/costs/Until'
import {
	Breadcrumbs,
	JumbotronLabel,
	InfoRectangle
} from '@/components/general'
import PopupForm from '@/components/popups/PopupForm'
import Discount from '@/components/costs/Discount'
import { useAt } from '@/hooks/index'
import { IconCheckCircleAlt } from '@/components/icons'
import Loan from '@/components/costs/Loan'
import { useContext } from 'react'
import { DigitalTransformationContext } from '@/context/index'

const JumbotronProgram = ({ program }) => {
	const at = useAt()
	const isDiscounted =
		(at.mini && at.online) ||
		(at.mba && at.online) ||
		(at.profession && at.online) ||
		(at.course && at.online) ||
		at.mbl

	const studyFieldIsAccounting =
		program?.study_field?.slug?.trim() === 'accounting-analysis-and-audit'

	{
		/* TODO: Test, TemporarySolution: Текстовый шаблон страницы курсов MINI MBA */
	}
	const isDigitalTransformation = useContext(DigitalTransformationContext)

	return (
		<section className={stls.container}>
			<div className={stls.image}>
				{program?.picture?.url && (
					<Image
						src={program?.picture.url}
						alt='Студенты обучаются'
						layout='fill'
						priority
					/>
				)}
			</div>
			<div className={stls.generalContainer}>
				<div className={stls.content}>
					<Breadcrumbs programChunkData={program} />
					<div className={stls.contentTop}>
						{(at.online || at.mbl) && (
							<div className={cn(stls.discountSticker, stls.leftCorner)}>
								<div className={stls.discountAmount}>
									<Discount />
								</div>
								<span>
									<Until />
								</span>
							</div>
						)}
						<div className={stls.label}>
							<JumbotronLabel />
						</div>
					</div>
					<div className={stls.flexContainer}>
						<div className={stls.descContainer}>
							<h1
								className={cn({
									[stls.smallerTitle]: at.profession || at.course
								})}>
								{program?.title}
							</h1>
							<div className={stls.desc}>
								{/* TODO: Test, TemporarySolution: Текстовый шаблон страницы курсов MINI MBA */}
								{isDigitalTransformation
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
									closeOnDocumentClick>
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
												programPrice={
													studyFieldIsAccounting ? 59000 : program?.price
												}
											/>{' '}
											на 12 мес.
										</p>
									</div>
								)}
							</div>
						</div>
						<ul className={stls.list}>
							<li className={stls.item}>
								<div className={stls.number}>2022</div>
								<p>Новейшая программа 2022 года</p>
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
								<div className={stls.number}>1000+</div>
								<p>студентов по всему миру</p>
							</li>
						</ul>
					</div>
					<InfoRectangle
						type={program?.category?.type ?? 'executive'}
						format={program?.studyFormat}
						studyDurationMonths={program?.duration?.minStudyMonths}
					/>
				</div>
			</div>
		</section>
	)
}

export default JumbotronProgram
