import stls from '@/styles/components/sections/journal/SectionJournalHistoryArticle.module.sass'
import { TypeClassNames, TypeLibJournalArticle } from '@/types/index'
import Link from 'next/link'
import cn from 'classnames'
import { routesFront } from '@/config/index'
import { getClassNames } from '@/helpers/index'
import { useAt } from '@/hooks/index'
import { Wrapper } from '@/components/layout'

type TypeJournalArticleProps = {
	journalArticle?: TypeLibJournalArticle
	atArticlesPage?: boolean
} & TypeClassNames

// todo: generalize this to make it into reusable component
const SectionJournalHistoryArticle = ({
	journalArticle,
	classNames,
	atArticlesPage
}: TypeJournalArticleProps) => {
	const at = useAt()

	if (atArticlesPage)
		return (
			<section
				className={
					cn([stls.container], getClassNames({ classNames })) || undefined
				}>
				<Wrapper column>
					<div className={stls.row}>
						<Link legacyBehavior href={routesFront.home}>
							<a className={stls.title}>{'Главная'}</a>
						</Link>
						<span className={cn(stls.slug, stls.withDot)}>{'Журнал'}</span>
					</div>
				</Wrapper>
			</section>
		)

	if (!journalArticle?.title) return null

	return (
		<section
			className={
				cn([stls.container], getClassNames({ classNames })) || undefined
			}>
			<Wrapper column>
				<div className={stls.row}>
					<Link legacyBehavior href={routesFront.home}>
						<a className={cn(stls.title, stls.item)}>{'Главная'}</a>
					</Link>
					<Link legacyBehavior href={routesFront.journal}>
						<a className={cn(stls.title, stls.withDot, stls.item)}>
							{'Журнал'}
						</a>
					</Link>
					<span className={cn(stls.slug, stls.withDot, stls.item)}>
						{journalArticle?.title}
					</span>
				</div>
			</Wrapper>
		</section>
	)
}
export default SectionJournalHistoryArticle
