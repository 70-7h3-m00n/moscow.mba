import truncate from 'truncate'
import slugify from 'slugify'
import cn from 'classnames'

import { TypeClassNames, TypeLibJournalArticleTitleBody } from '@/types/index'

import { getClassNames } from '@/helpers/index'

import stls from '@/styles/components/sections/journal/SectionJournalTitle.module.sass'

type TypeSectionJournalTitleProps = TypeClassNames & {
	title: {
		titleBodyParts: TypeLibJournalArticleTitleBody | null
		hType: 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
	}
	idx: number
}

const SectionJournalTitle = ({
	classNames,
	title,
	idx
}: TypeSectionJournalTitleProps) => {
	if (!title.titleBodyParts) return null

	const body = title.titleBodyParts.filter(part => part)

	const Title = title.hType || 'h2'

	const idSection = slugify(body?.map(item => item.text).join(' '))

	if (!body || !body?.length) return null

	return (
		<div
			id={idSection}
			className={
				cn(stls.container, getClassNames({ classNames })) || undefined
			}>
			<Title className={stls.title}>
				{body
					?.filter(part => part)
					.map((part, pidx) => (
						<span
							key={
								part.text
									? `${truncate(part.text, 21)} ${idx}-${pidx}`
									: `SectionJournalTitle ${idx}-${pidx}`
							}
							className={cn({
								[stls.isHighlighted]: part.isHighlighted
							})}>
							{part.text}{' '}
						</span>
					))}
			</Title>
		</div>
	)
}

export default SectionJournalTitle
