import stls from '@/styles/components/sections/HowProcessGoes.module.sass'
import Image from 'next/image'
import React, {
	useCallback,
	useEffect,
	useMemo,
	useRef,
	useContext,
	useState
} from 'react'
import cn from 'classnames'
import { useAt, useScrollObserver } from '@/hooks/index'
import { Wrapper } from '@/components/layout'
import studentPhoto from '@/public/assets/images/student-using-laptop.jpg'

const Advantages = () => {
	const at = useAt()
	const processSteps = useMemo(
		() => [
			{
				tabTitle: 'Продолжительность обучения составляет от 2 до 18 месяцев',
				stepTitle: '',
				listItems: ['Продолжительность обучения составляет от 2 до 18 месяцев']
			},
			{
				tabTitle:
					'Мы не только оставляем доступ к курсам, чтобы вы могли вернуться к знаниям, когда возникает потребность, но и обновляем контент, чтобы у вас была самая актуальная информация',
				stepTitle: '',
				listItems: [
					'Мы не только оставляем доступ к курсам, чтобы вы могли вернуться к знаниям, когда возникает потребность, но и обновляем контент, чтобы у вас была самая актуальная информация'
				]
			},
			{
				tabTitle:
					'Рассказываем как внедрить техники и инструменты из обучения в свою сферу. Помогаем с трудоустройством',
				stepTitle: '',
				listItems: [
					'Рассказываем как внедрить техники и инструменты из обучения в свою сферу. Помогаем с трудоустройством'
				]
			},
			{
				tabTitle:
					'По окончании обучения выдается диплом международного образца, который признается в Европе и заносится в ФРДО',
				stepTitle: '',
				listItems: [
					'По окончании обучения выдается диплом международного образца, который признается в Европе и заносится в ФРДО'
				]
			},
			{
				tabTitle:
					'Благодаря онлайн-формату вы можете пройти программу с экспертами сразу из нескольких топовых бизнес-школ, не мешая текущей занятости',
				stepTitle: '',
				listItems: [
					'Благодаря онлайн-формату вы можете пройти программу с экспертами сразу из нескольких топовых бизнес-школ, не мешая текущей занятости'
				]
			}
		],
		[at.profession]
	)

	const [activeStep, setActiveStep] = useState<number>(null)
	const [scrolledData, setScrolledData] = useState<number[]>(
		Array.from({ length: processSteps.length }, () => 0)
	)
	const stepsRefs = useRef(
		processSteps?.map(() => React.createRef<HTMLDivElement>())
	)
	const tabsRefs = useRef(
		processSteps?.map(() => React.createRef<HTMLLIElement>())
	)

	const scrollIntoViewTabs = (idx: number) =>
		tabsRefs.current[idx]?.current.scrollIntoView({
			inline: 'center',
			block: 'nearest'
		})
	const scrollIntoViewSteps = (idx: number) =>
		stepsRefs.current[idx].current.scrollIntoView({
			behavior: 'smooth',
			block: 'nearest',
			inline: 'center'
		})

	const handleIntersectDesktopSteps: IntersectionObserverCallback = useCallback(
		entries => {
			entries?.map(entry => {
				if (entry.isIntersecting) {
					const stepIdx = processSteps.findIndex(
						step => step.stepTitle === entry.target.children.item(2).textContent
					)
					const increment = 0.1
					setScrolledData(prevArray =>
						prevArray?.map((prevValue, idx) =>
							idx === stepIdx
								? !prevValue
									? increment
									: prevValue < 1
									? prevValue + increment
									: 1
								: prevValue
						)
					)
				}
			})
		},
		[processSteps]
	)

	const handleIntersectPhoneSteps: IntersectionObserverCallback = useCallback(
		entries => {
			entries?.map(entry => {
				if (entry.isIntersecting) {
					const stepTitle = entry.target.children.item(2).textContent
					const currentActiveStep = processSteps.findIndex(
						step => step.stepTitle === stepTitle
					)
					scrollIntoViewTabs(currentActiveStep)
					setActiveStep(currentActiveStep)
				}
			})
		},
		[processSteps]
	)

	const desktopIntersectOptions = useMemo(
		() => ({
			rootMargin: '-40% 0px',
			threshold: Array.from({ length: 10 }, (_v, i) =>
				Number(((i + 1) * 0.1).toFixed(2))
			)
		}),
		[]
	)

	const phoneIntersectOptions = useMemo(
		() => ({
			rootMargin: '0px',
			threshold: 1
		}),
		[]
	)

	useScrollObserver(
		stepsRefs.current,
		handleIntersectDesktopSteps,
		desktopIntersectOptions
	)

	useScrollObserver(
		stepsRefs.current,
		handleIntersectPhoneSteps,
		phoneIntersectOptions
	)

	return (
		<section className={stls.container}>
			<Wrapper classNames={[stls.content]}>
				<div className={stls.titleContainer}>
					<h2 className={stls.title}>Преимущества</h2>

					<div className={stls.studentPhoto}>
						<Image
							src={studentPhoto}
							height={337}
							width={506}
							alt={'Студент академии сидит перед ноутбуком'}
						/>
					</div>
				</div>
				<div className={stls.infoContainer}>
					<ul className={stls.tabsList}>
						{processSteps?.map((step, idx) => (
							<li
								key={step.tabTitle + idx}
								ref={tabsRefs.current[idx]}
								className={stls.tabItem}
								onClick={() => {
									setActiveStep(idx)
									scrollIntoViewTabs(idx)
									scrollIntoViewSteps(idx)
								}}>
								<a
									className={cn(
										stls.tabLink,
										idx === activeStep && stls.activeTabLink
									)}>
									{step.tabTitle}
								</a>
							</li>
						))}
					</ul>
					<div className={stls.stepsWrap}>
						{processSteps?.map((step, idx) => (
							<div
								key={idx + step.tabTitle}
								ref={stepsRefs.current[idx]}
								className={cn(
									stls.processStep,
									idx === activeStep && stls.activeProcessStep
								)}>
								<span
									className={stls.redStick}
									style={{
										height: `calc(${Number(scrolledData[idx]) * 100}% - 48px)`
									}}
								/>
								<div className={stls.processStepNumber}>{idx + 1}</div>
								<div className={stls.processStepTitle}>{step.stepTitle}</div>
								<ul className={stls.list}>
									{step.listItems?.map((item, idx) => (
										<li key={item + idx} className={stls.listItem}>
											{item}
										</li>
									))}
								</ul>
							</div>
						))}
					</div>
				</div>
			</Wrapper>
		</section>
	)
}

export default Advantages
