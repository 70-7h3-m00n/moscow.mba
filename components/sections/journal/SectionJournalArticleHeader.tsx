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
		timestamp: journalArticle?.publicationDate ?? journalArticle?.createdAt,
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
					timestamp={
						journalArticle?.publicationDate ?? journalArticle?.createdAt
					}
				/>
			</div>
		</div>
	)
}

export default SectionJournalArticleHeader
