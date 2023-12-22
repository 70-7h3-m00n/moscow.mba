import stls from './Faq.module.sass'
import cn from 'classnames'

import { useRouter } from 'next/router'
import { useAt } from '@/hooks/index'

import { Wrapper } from '@/components/layout'
import { faqMba, faqMini, faqProfession } from './constants'
import { Accordion } from '../Accordion/Accordion'
import { FaqProps } from './types'

export const Faq = ({ className }: FaqProps) => {
	const at = useAt()
	const router = useRouter()

	return (
		<section className={cn(className, stls.container)}>
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
						{faqProfession.map((item, idx) => (
							<Accordion key={idx} item={item} />
						))}
					</div>
				</div>
			</Wrapper>
		</section>
	)
}
