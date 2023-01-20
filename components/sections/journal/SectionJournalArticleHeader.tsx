import cn from 'classnames'

import { getClassNames } from '@/helpers/index'

import {
	TypeLibJournalArticle,
	TypeLessThan,
	TypeLessThanLiniar,
	TypeClassNames
} from '@/types/index'

import { getRenderTime } from '@/helpers/index'

import { GeneralJournalArticleCreatedAtLegacy } from '@/components/general'

import stls from '@/styles/components/sections/journal/SectionJournalArticleHeader.module.sass'

type TypeJournalArticleProps = {
	journalArticle: TypeLibJournalArticle
} & TypeClassNames

const lessThan: TypeLessThan = [
	{
		type: 'liniar',
		sec: 10,
		label: 'Только что'
	},
	{
		type: 'liniar',
		sec: 60,
		label: 'Меньше минуты назад'
	},
	{
		type: 'liniar',
		sec: 60 * 5,
		label: 'Меньше пяти минут назад'
	},
	{
		type: 'liniar',
		sec: 3600,
		label: 'Меньше часа назад'
	},
	{
		type: 'liniar',
		sec: 3600 * 2,
		label: 'Меньше двух часов назад'
	},
	{
		type: 'liniar',
		sec: 3600 * 3,
		label: 'Меньше трех часов назад'
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
		label: 'Меньше двух дней назад'
	}
]

const pageOptions = lessThan.filter(
	item => item.type === 'liniar'
) as Array<TypeLessThanLiniar>

const SectionJournalArticleHeader = ({
	journalArticle,
	classNames
}: TypeJournalArticleProps) => {
	if (!journalArticle?.createdAt || !journalArticle?.journalCategory)
		return null

	const time = getRenderTime({
		timestamp: journalArticle?.createdAt,
		options: pageOptions
	})

	return (
		<div
			className={
				cn([stls.container], getClassNames({ classNames })) || undefined
			}>
			<div className={stls.wrapper}>
				<button className={stls.category} disabled>
					{journalArticle?.journalCategory?.title}
				</button>
				<GeneralJournalArticleCreatedAtLegacy
					time={time}
					timestamp={journalArticle?.createdAt}
				/>
			</div>
		</div>
	)
}

export default SectionJournalArticleHeader
