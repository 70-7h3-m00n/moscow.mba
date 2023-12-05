import stls from './WhatWillYouLearn.module.sass'
import cn from 'classnames'
import { WhatWillYouLearnProps } from './types'

import { Wrapper } from '@/components/layout'
import { IconCheck } from '../components/icons/IconCheck/IconCheck'

const data = [
	{ text: 'Актуальная программа: последнее обновление — июнь 2023' },
	{ text: 'Актуальная программа: последнее обновление — июнь 2023' },
	{ text: 'Актуальная программа: последнее обновление — июнь 2023' },
	{ text: 'Актуальная программа: последнее обновление — июнь 2023' },
	{ text: 'Актуальная программа: последнее обновление — июнь 2023' },
	{ text: 'Актуальная программа: последнее обновление — июнь 2023' }
]

export const WhatWillYouLearnNew = ({ className }: WhatWillYouLearnProps) => {
	return (
		<section className={cn(className, stls.container)}>
			<Wrapper classNames={[stls.content]}>
				<h2 className={stls.title}>Чему вы научитесь за 10 месяцев</h2>
				<ul className={stls.list}>
					{data.map((item, idx) => (
						<li className={stls.item} key={idx}>
							<IconCheck />
							<p>{item.text}</p>
						</li>
					))}
				</ul>
			</Wrapper>
		</section>
	)
}
