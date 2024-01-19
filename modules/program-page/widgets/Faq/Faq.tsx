import stls from './Faq.module.sass'
import cn from 'classnames'

import { useAt } from '@/hooks/index'
import { Wrapper } from '@/components/layout'
import { faqCourse, faqMba, faqMini, faqProfession } from './constants'
import { Accordion } from '../Accordion/Accordion'
import { FaqProps } from './types'
import { useContext, useState } from 'react'
import { ProgramPageContext } from 'modules/program-page/fractals/context/context'

export const Faq = ({ className, ...rest }: FaqProps) => {
	const at = useAt()
	const { state } = useContext(ProgramPageContext)
	const { program } = state

	const [activeIdx, setActiveIdx] = useState(0)

	const faqData =
		program?.faq && program?.faq?.length > 0
			? program?.faq
			: at.mba
			? faqMba
			: at.mini
			? faqMini
			: at.profession
			? faqProfession
			: at.course
			? faqCourse
			: faqMba

	return (
		<section className={cn(className, stls.container)} {...rest}>
			<Wrapper classNames={[stls.wrapper]}>
				<div className={stls.flexContent}>
					<div className={stls.descContainer}>
						<h2 className={stls.descTitle}>Отвечаем на вопросы</h2>
						<p className={stls.desc}>
							Если у вас остались вопросы по программе, вы можете оставить
							заявку и наш координатор поможет вам
						</p>
					</div>
					<div className={stls.content}>
						{faqData?.map((item, idx) => (
							<Accordion
								className={stls.accordion}
								key={idx}
								active={activeIdx === idx}
								item={item}
								idx={idx}
								handler={() => setActiveIdx(activeIdx === idx ? null : idx)}
								variant='faq'
							>
								{typeof item?.string === 'string' && (
									<p className={stls.answer}>{item?.string}</p>
								)}
								{Array.isArray(item?.string) &&
									item?.string?.map(el => (
										<p
											className={cn(stls.answer, {
												[stls.isList]: item?.isList
											})}
											key={el}
										>
											{el}
										</p>
									))}
							</Accordion>
						))}
					</div>
				</div>
			</Wrapper>
		</section>
	)
}
