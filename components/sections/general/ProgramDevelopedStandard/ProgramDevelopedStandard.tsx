import stls from './ProgramDevelopedStandard.module.sass'
import cn from 'classnames'
import { HTMLAttributes } from 'react'

import { IconEmblem } from '@/components/icons'
import { Wrapper } from '@/components/layout'

const ProgramDevelopedStandard = ({
	className
}: HTMLAttributes<HTMLElement>) => {
	return (
		<section className={cn(className, stls.container)}>
			<Wrapper classNames={[stls.wrapper]}>
				<div className={stls.iconContainer}>
					<IconEmblem classNames={[stls.icon]} />
				</div>
				<div className={stls.content}>
					<h2 className={stls.title}>
						Программа разработана по&nbsp;профстандарту
					</h2>
					<p className={stls.p}>
						Программа разработана с учетом требований соответствующего
						профессионального стандарта, утвержденного Министерством труда и
						социальной защиты Российской Федерации
					</p>
				</div>
			</Wrapper>
		</section>
	)
}

export default ProgramDevelopedStandard
