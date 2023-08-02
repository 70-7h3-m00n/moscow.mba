import stls from '@/styles/components/general/GeneralJournalArticleCreatedAt.module.sass'
import {
	TypeClassNames,
	TypeLessThan,
	TypeLessThanNonLiniar
} from '@/types/index'
import cn from 'classnames'
import { getClassNames, getRenderTime } from '@/helpers/index'

// TODO: figure out better time types, it should be timestamp type
type TypeGeneralJournalArticleCreatedAtProps = TypeClassNames & {
	timestamp: string
}

const GeneralJournalArticleCreatedAt = ({
	classNames,
	timestamp
}: TypeGeneralJournalArticleCreatedAtProps) => {
	if (!timestamp) return null

	const lessThan: TypeLessThan = [
		{
			type: 'liniar',
			sec: 10,
			label: 'Только что'
		},
		{
			type: 'liniar',
			sec: 60,
			label: 'Менее минуты назад'
		},
		{
			type: 'liniar',
			sec: 60 * 5,
			label: 'Менее пяти минут назад'
		},
		{
			type: 'liniar',
			sec: 3600,
			label: 'Менее часа назад'
		},
		{
			type: 'liniar',
			sec: 3600 * 2,
			label: 'Менее двух часов назад'
		},
		{
			type: 'liniar',
			sec: 3600 * 3,
			label: 'Менее трех часов назад'
		},
		{
			type: 'nonLiniar',
			days: 0,
			label: 'Сегодня'
		},
		{
			type: 'nonLiniar',
			days: -1,
			label: 'Вчера'
		},
		{
			type: 'nonLiniar',
			days: -2,
			label: 'Менее двух дней назад'
		}
	]

	const options = lessThan.filter(
		item => item.type === 'nonLiniar'
	) as Array<TypeLessThanNonLiniar>

	const getTime = () => getRenderTime({ timestamp, options })

	const time = getTime()

	return (
		<div
			className={
				cn(stls.container, getClassNames({ classNames })) || undefined
			}>
			<time className={stls.time} dateTime={timestamp}>
				{time}
			</time>
		</div>
	)
}

export default GeneralJournalArticleCreatedAt
