import stls from './WhatWillYouLearn.module.sass'
import cn from 'classnames'
import { WhatWillYouLearnProps } from './types'

import { Wrapper } from '@/components/layout'
import { IconCheck } from '../components/icons/IconCheck/IconCheck'
import { useContext } from 'react'
import { ProgramPageContext } from 'modules/program-page/fractals/context/context'
import { TrainingPeriod } from '@/components/costs'

export const WhatWillYouLearnNew = ({
	className,
	program,
	...rest
}: WhatWillYouLearnProps) => {
	return (
		<section className={cn(className, stls.container)} {...rest}>
			<Wrapper classNames={[stls.content]}>
				<h2 className={stls.title}>
					Чему вы научитесь за&nbsp;
					<TrainingPeriod
						period={program?.duration?.minStudyMonths}
						type={program?.category?.type}
					/>
				</h2>
				<ul className={stls.list}>
					{program?.whatWillYouLearn?.map((item, idx) => (
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
