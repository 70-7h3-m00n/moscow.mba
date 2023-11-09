import stls from '@/styles/components/sections/journal/SectionJournalList.module.sass'
import { TypeClassNames, TypeLibJournalArticleList } from '@/types/index'
import cn from 'classnames'
import { createSmartParagraph, getClassNames } from '@/helpers/index'

// todo: fix __typename types
type TypeSectionJournalListProps = {
	list: {
		items: TypeLibJournalArticleList | null
		tag: 'ul' | 'ol' | null
	}
} & TypeClassNames

const SectionJournalList = ({
	classNames,
	list
}: TypeSectionJournalListProps) => {
	if (!list.items) return null

	const tag = list.tag || 'ul'

	const List = tag

	const listItems = list.items
		.filter(item => item && item.body)
		.map(item => ({
			...item,
			text: item.body
		}))

	const smartlistItems = createSmartParagraph<typeof listItems>({
		paragraph: listItems,
		className: stls.br
	})

	return (
		<div
			className={cn(stls.container, getClassNames({ classNames })) || undefined}
		>
			<List className={cn(stls.list, stls[tag])}>
				{smartlistItems.map((item, idx) => (
					<li
						key={`${item.text.toString()} ${idx}`}
						className={cn(stls.item, stls[tag])}
					>
						{tag === 'ol' && <span className={stls.idx}>{idx + 1}</span>}
						<div className={stls.text}>{item.text}</div>
					</li>
				))}
			</List>
		</div>
	)
}

export default SectionJournalList
