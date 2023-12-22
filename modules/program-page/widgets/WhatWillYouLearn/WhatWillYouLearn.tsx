import stls from './WhatWillYouLearn.module.sass'
import cn from 'classnames'
import { WhatWillYouLearnProps } from './types'

import { Wrapper } from '@/components/layout'
import { IconCheck } from '../components/icons/IconCheck/IconCheck'
import { useContext } from 'react'
import { ProgramPageContext } from 'modules/program-page/fractals/context/context'
import { ruCase } from '@/helpers/index'
import { TrainingPeriod } from '@/components/costs'

const data = [
	{ text: 'Актуальная программа: последнее обновление — июнь 2023' },
	{ text: 'Актуальная программа: последнее обновление — июнь 2023' },
	{ text: 'Актуальная программа: последнее обновление — июнь 2023' },
	{ text: 'Актуальная программа: последнее обновление — июнь 2023' },
	{ text: 'Актуальная программа: последнее обновление — июнь 2023' },
	{ text: 'Актуальная программа: последнее обновление — июнь 2023' }
]

export const WhatWillYouLearnNew = ({ className }: WhatWillYouLearnProps) => {
	const {
		state: { program }
	} = useContext(ProgramPageContext)
	const duration = program?.duration

	return (
		<section className={cn(className, stls.container)}>
			<Wrapper classNames={[stls.content]}>
				<h2 className={stls.title}>
					Чему вы научитесь за{' '}
					<TrainingPeriod
						period={program?.duration?.minStudyMonths}
						type={program?.category?.type}
					/>
				</h2>
				<ul className={stls.list}>
					{data.map((item, idx) => (
						<li className={stls.item} key={idx}>
							<IconCheck color='#FF3535' />
							<p>{item.text}</p>
						</li>
					))}
				</ul>
			</Wrapper>
		</section>
	)
}
