import stls from '@/styles/components/sections/journal/SectionJournalArticleContents.module.sass'
import { TypeLibJournalArticle, TypeClassNames } from '@/types/index'
import Link from 'next/link'
import { useState } from 'react'
import cn from 'classnames'
import slugify from 'slugify'
import { getClassNames } from '@/helpers/index'

type TypeJournalArticleContentsProps = {
	journalArticle: TypeLibJournalArticle
	isPopupCoursesOnTopicDesktop: boolean
	isPopupDownloadMaterials: boolean
} & TypeClassNames

const SectionJournalArticleContents = ({
	journalArticle,
	isPopupCoursesOnTopicDesktop,
	isPopupDownloadMaterials,
	classNames
}: TypeJournalArticleContentsProps) => {
	const [isList, setIsList] = useState(false)

	const handleShowList = () => {
		setIsList(isList => !isList)
	}

	const textLinkTitle = journalArticle?.articleBody
		?.filter(title => title.__typename === 'journal.title')
		.map(item =>
			item.title.titleBodyParts.map(content => content.text).join(' ')
		)

	if (journalArticle?.articleBody.length === 0) return null

	const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
		e.preventDefault()
		const href = e.currentTarget.href
		const targetId = href.replace(/.*\#/, '')
		const elem = document.getElementById(targetId)
		elem?.scrollIntoView({
			behavior: 'smooth'
		})
	}

	return (
		<section
			className={
				cn(
					stls.container,
					!isPopupCoursesOnTopicDesktop && !isPopupDownloadMaterials
						? stls.notPopup
						: stls.popup,
					getClassNames({ classNames })
				) || undefined
			}
		>
			<div className={stls.accordion}>
				<div className={stls.accordionTitle} onClick={handleShowList}>
					<span className={stls.title}>Содержание</span>
					<div className={stls.arrow}>
						{/* icons should be put in ./components/icons */}
						<svg
							className={isList ? stls.isArrow : stls.isNotArrow}
							width='14'
							height='8'
							viewBox='0 0 14 8'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M13 7L7 1L1 7'
								stroke={isList ? '#FF3535' : '#262626'}
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
						</svg>
					</div>
				</div>
				<div className={cn(stls.accordionList, { [stls.isShown]: isList })}>
					<ul>
						{textLinkTitle?.map((item, idx) => (
							<li key={`${item}_${idx}`} className={stls.item}>
								<Link href={`#${slugify(item)}`} onClick={handleScroll}>
									{item}
								</Link>
							</li>
						))}
					</ul>
				</div>
			</div>
		</section>
	)
}

export default SectionJournalArticleContents
