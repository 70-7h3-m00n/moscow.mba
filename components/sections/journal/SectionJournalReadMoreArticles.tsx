import stls from '@/styles/components/sections/journal/SectionJournalReadMoreArticles.module.sass'
import {
	TypeClassNames,
	TypeLibJournalArticle,
	TypeLibJournalReadMoreArticles
} from '@/types/index'
import Link from 'next/link'
import cn from 'classnames'
import { routesFront } from '@/config/index'
import { getClassNames } from '@/helpers/index'
import { CardJournalArticle, CardsJournalArticles } from '@/components/cards'

type TypeSectionJournalReadMoreArticlesProps = TypeClassNames &
	TypeLibJournalReadMoreArticles

const SectionJournalReadMoreArticles = ({
	title,
	articles,
	classNames
}: TypeSectionJournalReadMoreArticlesProps) => {
	// console.log(articles)
	if (!articles || !articles?.length) return null

	const translations = {
		title: title || 'Читайте также'
	}

	return (
		<div
			className={
				cn(stls.container, getClassNames({ classNames })) || undefined
			}>
			<h2 className={stls.title}>{translations.title}</h2>
			<CardsJournalArticles articles={articles} />
		</div>
	)
}

export default SectionJournalReadMoreArticles
