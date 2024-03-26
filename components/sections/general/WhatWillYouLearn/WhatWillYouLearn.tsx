import stls from './WhatWillYouLearn.module.sass'
import cn from 'classnames'
import { WhatWillYouLearnProps } from './types'

import { Wrapper } from '@/components/layout'
import { IconCheck } from '../../../../modules/program-page/widgets/components/icons/IconCheck/IconCheck'
import { TrainingPeriod } from '@/components/costs'
import { advantagesData } from './constants'

export const WhatWillYouLearnNew = ({
	className,
	program = null,
	...rest
}: WhatWillYouLearnProps) => {
	const advantages = program ? program?.whatWillYouLearnNew : advantagesData

	return (
		<section className={cn(className, stls.container)} {...rest}>
			<Wrapper classNames={[stls.content]}>
				{program ? (
					<h2 className={stls.title}>
						Чему вы научитесь за&nbsp;
						<TrainingPeriod
							period={program?.duration?.minStudyMonths}
							type={program?.category?.type}
						/>
					</h2>
				) : (
					<h2 className={cn(stls.title, stls.left)}>
						Преимущества Moscow Business Academy
					</h2>
				)}
				<ul className={stls.list}>
					{advantages.map((item, idx) => (
						<li className={stls.item} key={idx}>
							<IconCheck color='#FF3535' />
							<p className={stls.item__p}>{item.string}</p>
						</li>
					))}
				</ul>
			</Wrapper>
		</section>
	)
}
