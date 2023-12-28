import stls from './ProgramModules.module.sass'
import cn from 'classnames'
import { ProgramModulesProps } from './types'
import { Wrapper } from '@/components/layout'
import ProfessionAccordion from '@/components/general/AccordionsContainer/components/ProfessionAccordion/ProfessionAccordion'
import { Tag } from '../components'

const skills = ['Python', 'Git', 'Flask', 'Tableau', 'Power Block', 'Chat GPT']

const data = [
	{
		number: '485',
		desc: 'Видеоматериалов'
	},
	{
		number: '1200',
		desc: 'Воркшопов'
	},
	{
		number: '07',
		desc: 'Месяцев обучения'
	}
]

export const ProgramModules = ({ className, ...rest }: ProgramModulesProps) => {
	return (
		<section className={cn(className, stls.container)} {...rest}>
			<Wrapper classNames={[stls.content]}>
				<div className={stls.titleBlock}>
					<div className={stls.left}>
						<h2 className={stls.left__title}>Программа обучения</h2>
						<p className={stls.left__desc}>
							Познакомитесь с современными методами и системами проектного
							управления. Научитесь применять эти методы на практике, а также
							самостоятельно выстраивать системы управления проектами
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
							Умеете автоматизировать работу и использовать в работе
							искусственный интеллект. Интерпретируете данные с помощью
							математики. Делаете верные выводы о бизнес-процессах и переводите
							цифры в понятные и наглядные дашборды. Умеете автоматизировать
							работу и использовать в работе искусственный интеллект.{' '}
						</p>
						<h3 className={stls.right__title}>
							Научитесь работать с инструментами
						</h3>
						<ul className={stls.tagList}>
							{skills.map((skill, idx) => (
								<Tag variant='gamma' key={idx}>
									{skill}
								</Tag>
							))}
						</ul>
					</div>
				</div>
				<div className={stls.accordionBlock}>
					{/* <ProfessionAccordion /> */}
				</div>
			</Wrapper>
		</section>
	)
}
