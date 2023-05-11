import stls from '@/styles/components/sections/ExecutiveRequirements.module.sass'
import { IconCheck } from '@/components/icons'
import Image from 'next/legacy/image'
import { Wrapper } from '@/components/layout'

const requirements = [
	{
		title: 'Управление отношениями',
		desc: 'лидерские качества, социальная уверенность, влиятельность, кооперативность, заботливость'
	},
	{
		title: 'Управление задачами',
		desc: 'аналитичность, концептуальность, широта и комплексность мышления, креативность, воображение и любознательность, методичность, нормативность'
	},
	{
		title: 'Управление собой',
		desc: 'уравновешенность, стрессоустойчивость, эмоциональный контроль, восприятие критики, жизнерадостность, гибкость, адаптивность, открытость новым задачам, энергичность'
	},
	{
		title: 'Амбициозность',
		desc: 'ориентация на результат, карьерные амбиции, степень понимания своих сильных сторон и областей для развития'
	}
]

const ExecutiveRequirements = () => {
	return (
		<section className={stls.container}>
			<Wrapper classNames={[stls.wrapper]}>
				<div className={stls.infoContainer}>
					<p className={stls.info}>
						Программа EMBA предназначена для предпринимателей и топ-менеджеров,
						которые уже достигли определенной ступени развития и теперь хотят
						выйти на международный уровень. Поэтому к участникам программы
						предъявляются особые требования.
					</p>
					<div className={stls.image}>
						<Image
							src='/assets/images/requirements_pic_1.jpg'
							alt='Студенты Executive на конференции'
							// width={1290}
							// height={293}
							layout={'fill'}
							objectFit={'cover'}
						/>
					</div>
				</div>
				<ul className={stls.list}>
					{requirements.map((req, idx) => (
						<li key={req.title + idx} className={stls.listItem}>
							<div className={stls.circle}>
								<IconCheck />
							</div>
							<div>
								<h5 className={stls.listItemTitle}>{req.title}</h5>
								<p>{req.desc}</p>
							</div>
						</li>
					))}
				</ul>
			</Wrapper>
		</section>
	)
}

export default ExecutiveRequirements
