import stls from '@/styles/components/sections/journal/SectionJournalConclusion.module.sass'
import {
	TypeClassNames,
	TypeLibJournalArticle,
	TypeLibJournalArticleConclusion
} from '@/types/index'
import cn from 'classnames'
import parse from 'html-react-parser'
import { marked } from 'marked'
import { getClassNames } from '@/helpers/index'
import SectionJournalToShare from './SectionJournalToShare'

type TypeSectionJournalConclusionProps = {
	item: TypeLibJournalArticleConclusion | null
	journalArticle: TypeLibJournalArticle
} & TypeClassNames

const SectionJournalConclusion = ({
	classNames,
	item,
	journalArticle
}: TypeSectionJournalConclusionProps) => {
	if (!item || item?.length === 0) return null

	// todo: figure out the same smart paragraph as is Paragraph section
	const itemFiltered = item.filter(part => part)

	return (
		<div
			className={
				cn(stls.container, getClassNames({ classNames })) || undefined
			}>
			<h2 className={stls.title}>
				<span>{'Резюмируем'}</span>
			</h2>
			<ol className={stls.list}>
				{itemFiltered.map((part, idx) => (
					<li key={`${part.title} ${idx}`} className={stls.item}>
						{itemFiltered.length > 1 && (
							<div className={stls.idx}>{idx + 1}</div>
						)}
						<div className={stls.subtitleBody}>
							{part?.title && <h3 className={stls.subTitle}>{part.title}</h3>}
							<div>{parse(marked(part.body))}</div>
						</div>
					</li>
				))}
			</ol>
			<SectionJournalToShare journalArticle={journalArticle} />
		</div>
	)
}

export default SectionJournalConclusion
