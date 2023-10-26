import stls from '@/styles/components/sections/general/SectionCheckPros.module.sass'
import cn from 'classnames'

import { TypeClassNames } from '@/types/index'
import { useAt } from '@/hooks/index'
import { getClassNames } from '@/helpers/index'
import { contactData } from '@/config/index'
import { Wrapper } from '@/components/layout'
import { IconCheck } from '@/components/icons'

type TypeSectionCheckProsProps = TypeClassNames

const SectionCheckPros = ({ classNames }: TypeSectionCheckProsProps) => {
	const at = useAt()
	const contactInfo = contactData()

	const pros = [
		{
			title: 'Оформите возврат',
			content: (
				<>
					Если вы передумаете учиться, мы вернем полную сумму в течение первых
					двух&nbsp;недель
				</>
			)
		},
		{
			title: 'Сэкономьте 13%',
			content: (
				<>
					Получите налоговый вычет. Все подробности у&nbsp;менеджера при записи
					на&nbsp;курс
				</>
			)
		},
		{
			title: 'Задайте нам вопрос',
			content: (
				<>
					Позвоните на: <br />
					<a className={stls.highlight} href={contactInfo.ru.tels[0].href}>
						{contactInfo.ru.tels[0].val}
					</a>{' '}
					<br />
					Звонок бесплатный
				</>
			)
		}
	]

	return (
		<section
			className={
				cn([stls.container], getClassNames({ classNames })) || undefined
			}
		>
			<Wrapper column classNames={[stls.wrapper]}>
				{/* TODO: Test, TemporarySolution: Текстовый шаблон страницы курсов MINI MBA */}
				{at.mini ? (
					<ul className={stls.pros}>
						<li className={stls.pro}>
							<div className={stls.icon}>
								<IconCheck />
							</div>
							<div className={stls.ps}>
								<p className={stls.proTitle}>Оформите возврат</p>
								<p className={stls.proContent}>
									Если вы передумаете учиться, мы вернем полную сумму в течение
									первых двух недель
								</p>
							</div>
						</li>
						<li className={stls.pro}>
							<div className={stls.icon}>
								<IconCheck />
							</div>
							<div className={stls.ps}>
								<p className={stls.proTitle}>Сэкономьте 13%</p>
								<p className={stls.proContent}>
									Оформите заявку на налоговый вычет. Все подробности у
									менеджера при записи на курс
								</p>
							</div>
						</li>
						<li className={stls.pro}>
							<div className={stls.icon}>
								<IconCheck />
							</div>
							<div className={stls.ps}>
								<p className={stls.proTitle}>Задайте нам вопрос</p>
								<p className={stls.proContent}>
									Позвоните на: <br />
									<a className={stls.highlight} href='tel:+7-800-500-27-47'>
										+7 (800) 500-27-47
									</a>{' '}
									<br />
									Звонок бесплатный
								</p>
							</div>
						</li>
					</ul>
				) : (
					<ul className={stls.pros}>
						{pros.map((pro, idx) => (
							<li key={`${pro.title}-${idx}`} className={stls.pro}>
								<div className={stls.icon}>
									<IconCheck />
								</div>
								<div className={stls.ps}>
									<p className={stls.proTitle}>{pro.title}</p>
									<p className={stls.proContent}>{pro.content}</p>
								</div>
							</li>
						))}
					</ul>
				)}
			</Wrapper>
		</section>
	)
}

export default SectionCheckPros
