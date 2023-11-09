import stls from './DiplomaProjectSection.module.sass'
import cn from 'classnames'
import { DiplomaProjectSectionProps } from './types'

import { Wrapper } from '@/components/layout'
import { IconDiplomaProject } from '@/components/icons'

export const DiplomaProjectSection = ({
	className
}: DiplomaProjectSectionProps) => {
	return (
		<section className={cn(className, stls.section)}>
			<Wrapper classNames={[stls.wrapper]}>
				<div className={stls.mainBox}>
					<h3>Дипломный проект</h3>
					<p>
						Мы предложим на выбор три дипломных проекта — ваше решение будет
						зависеть от того, в какой специальности вы хотите развиваться
					</p>
				</div>
				<IconDiplomaProject />
			</Wrapper>
		</section>
	)
}
