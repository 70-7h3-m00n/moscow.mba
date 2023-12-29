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
	TypeLibJournalReadMoreArticles & {
		currentJournalArticleSlug: TypeLibJournalArticle['slug']
	}

const SectionJournalReadMoreArticles = ({
	classNames,
	title,
	articles,
	currentJournalArticleSlug
}: TypeSectionJournalReadMoreArticlesProps) => {
	if (!articles || !articles?.length) return null

	const translations = {
		title: title || 'Читайте также'
	}

	return (
		<div
			className={cn(stls.container, getClassNames({ classNames })) || undefined}
		>
			<p className={stls.title}>{translations.title}</p>
			<CardsJournalArticles articles={articles} />
		</div>
	)
}

export default SectionJournalReadMoreArticles
