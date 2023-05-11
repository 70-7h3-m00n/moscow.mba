import stls from '@/styles/components/cards/CardJournalArticle.module.sass'
import {
	TypeClassNames,
	TypeLibJournalReadMoreArticlesArticle
} from '@/types/index'
import Link from 'next/link'
import cn from 'classnames'
import { routesFront } from '@/config/index'
import { getClassNames, getImageHeight } from '@/helpers/index'
import { GeneralJournalArticleCreatedAt } from '@/components/general'
import { ImgJournalArticle } from '@/components/images'

type TCardJournalArticleProps = TypeClassNames & {
	article: TypeLibJournalReadMoreArticlesArticle
}

const CardJournalArticle = ({
	classNames,
	article
}: TCardJournalArticleProps) => {
	if (!article || !article?.title || !article?.slug) return null

	// TODO: generalize these options to clean up this component
	const imgSrc = article.picture.url || undefined
	const imgWidth = article.picture.width
		? article.picture.width > 425
			? 425
			: article.picture.width
		: undefined
	const imgHeight = article.picture.height
		? getImageHeight({
				width: imgWidth,
				widthInitial: article.picture.width,
				heightInitial: article.picture.height
		  })
		: undefined

	return (
		<div
			className={
				cn(stls.container, getClassNames({ classNames })) || undefined
			}>
			<Link legacyBehavior href={`${routesFront.journal}/${article.slug}`}>
				<a className={cn(stls.link)}>
					<ImgJournalArticle
						src={imgSrc}
						width={imgWidth}
						height={imgHeight}
						alt={article.picture.alt || undefined}
					/>
					<div className={stls.bottom}>
						{article.journalCategory?.title && (
							<div className={stls.category}>
								{article.journalCategory.title}
							</div>
						)}
						<p className={stls.title}>{article.title}</p>
						<GeneralJournalArticleCreatedAt
							classNames={[stls.GeneralJournalArticleCreatedAt]}
							timestamp={article.createdAt}
						/>
					</div>
				</a>
			</Link>
		</div>
	)
}

export default CardJournalArticle
