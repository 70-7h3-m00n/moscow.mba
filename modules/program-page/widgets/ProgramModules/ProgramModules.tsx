import stls from './ProgramModules.module.sass'
import cn from 'classnames'
import { ProgramModulesProps } from './types'
import { Wrapper } from '@/components/layout'
import ProfessionAccordion from '@/components/general/AccordionsContainer/components/ProfessionAccordion/ProfessionAccordion'
import { Tag } from '../components'
import { useContext } from 'react'
import { ProgramPageContext } from 'modules/program-page/fractals/context/context'
import { TrainingPeriod } from '@/components/costs'

export const ProgramModules = ({ className, ...rest }: ProgramModulesProps) => {
	const { state } = useContext(ProgramPageContext)
	const { program } = state

	const data = [
		{
			number: (
				<TrainingPeriod
					period={program?.duration?.minStudyMonths}
					type={program?.category?.type}
					justNumbers
				/>
			),
			desc: 'Месяцев обучения'
		},
		{
			number: program?.duration?.videomaterials,
			desc: 'Видеоматериалов'
		},
		{
			number: program?.duration?.workshops,
			desc: 'Воркшопов'
		}
	]

	return (
		<section className={cn(className, stls.container)} {...rest}>
			<Wrapper classNames={[stls.content]}>
				<div className={stls.titleBlock}>
					<div className={stls.left}>
						<h2 className={stls.left__title}>Программа обучения</h2>
						<p className={stls.left__desc}>
							{program?.duration?.modulesDescription}
						</p>
						<ul className={stls.left__list}>
							{data.map((item, idx) => (
								<li className={stls.left__item} key={idx}>
									<p className={stls.number}>{item.number}</p>
									<p className={stls.desc}>{item.desc}</p>
								</li>
							))}
						</ul>
					</div>
					<div className={stls.right}>
						<h3 className={stls.right__title}>Результат</h3>
						<p className={stls.right__desc}>
							{program?.duration?.modulesResult}
						</p>
						{program?.duration?.modulesTools &&
							program?.duration?.modulesTools?.length > 0 && (
								<>
									<h3 className={stls.right__title}>
										Научитесь работать с инструментами
									</h3>
									<ul className={stls.tagList}>
										{program?.duration?.modulesTools?.map(skill => (
											<Tag variant='gamma' key={skill.id}>
												{skill.tool}
											</Tag>
										))}
									</ul>
								</>
							)}
					</div>
				</div>
				<div className={stls.accordionBlock}>
					{/* <ProfessionAccordion /> */}
				</div>
			</Wrapper>
		</section>
	)
}
