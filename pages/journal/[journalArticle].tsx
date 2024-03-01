import stls from '@/styles/pages/PageJournalArticles.module.sass'
import {
	TypeLibJournalArticle,
	TypeLibJournalReadMoreArticlesArticles
} from '@/types/index'
import type { GetServerSideProps, NextPage } from 'next'
import { GetStaticPaths, GetStaticProps } from 'next'
import { Fragment, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { NextSeo } from 'next-seo'
import cn from 'classnames'
import truncate from 'truncate'
import {
	useScroll,
	useWindowWidth,
	useCheckIfResourseExists
} from '@/hooks/index'
import { routesFront, companyName, preview } from '@/config/index'
import { handleGetStaticProps, handleGetStaticPaths } from '@/lib/index'
import { checkIfResourceExists } from '@/helpers/index'
import { useAt } from '@/hooks/index'
import { Wrapper } from '@/components/layout'
import {
	SectionJournalHistoryArticle,
	SectionJournalArticleHeader,
	SectionJournalArticleTitle,
	SectionJournalArticleContents,
	SectionJournalParagraph,
	SectionJournalTitle,
	SectionJournalPicture,
	SectionJournalEmphasis,
	SectionJournalQuote,
	SectionJournalReadMoreArticles,
	SectionJournalList,
	SectionJournalConclusion,
	SectionJournalRecommendedProgram,
	SectionJournalRecommendedArticles,
	SectionJournalRecommendedPrograms,
	SectionJournalTitlePicture,
	SectionJournalToShare,
	SectionJournalForm,
	SectionJournalTable
} from '@/components/sections'
import {
	PopupCoursesOnTopic,
	PopupDownloadMaterials,
	PopupPreviewCoursesOnTopic,
	PopupGetMaterials
} from '@/components/popups'
import { SeoOrganizationJsonLd } from '@/components/seo'
import { BtnScrollTop } from '@/components/btns'

type TypeJournalArticleProps = {
	journalArticle: TypeLibJournalArticle
}

const PageJournalArticle: NextPage<TypeJournalArticleProps> = ({
	journalArticle
}) => {
	// console.log(props?.journalArticle)
	// const { journalArticle } = props

	// ScrollBar
	const [pageYOffset, setPageYOffset] = useState(0)
	const [scollHeight, setScrollHeight] = useState(0)
	const [clientHeight, setClientHeight] = useState(0)

	// ! bug with too many rerenders on scroll, has to be fixed
	const handleScroll = () => {
		setPageYOffset(window.pageYOffset)
		setScrollHeight(document.body.scrollHeight)
		setClientHeight(
			window.innerHeight ||
				document.documentElement.clientHeight ||
				document.body.clientHeight
		)
	}

	useEffect(() => {
		document.addEventListener('scroll', handleScroll)
		return () => {
			document.removeEventListener('scroll', handleScroll)
		}
	}, [])

	// Is mounting the component on the client
	const [mounted, setMounted] = useState(false)

	useEffect(() => {
		setMounted(true)

		return () => setMounted(false)
	}, [])

	// Popup is show  (PopupCoursesOnTopicDesktop)
	const [isPopupCoursesOnTopicDesktop, setIsPopupCoursesOnTopicDesktop] =
		useState(true)
	const [isPopupCoursesOnTopicPhone, setIsPopupCoursesOnTopicPhone] =
		useState(false)

	const handlePopupCoursesOnTopicDesktop = () => {
		setIsPopupCoursesOnTopicDesktop(
			isPopupCoursesOnTopicDesktop => !isPopupCoursesOnTopicDesktop
		)
	}

	const handlePopupCoursesOnTopicPhone = () => {
		setIsPopupCoursesOnTopicPhone(
			isPopupCoursesOnTopicPhone => !isPopupCoursesOnTopicPhone
		)
	}
	// Popup is show  (PopupGetMaterials, PopupDownloadMaterials)
	const [isPopupGetMaterials, setIsPopupGetMaterials] = useState(false)
	const [isPopupDownloadMaterials, setIsPopupDownloadMaterials] = useState(true)
	const [isPopupPreviewCoursesOnTopic, setIsPopupPreviewCoursesOnTopic] =
		useState(true)

	const handlePopupGetMaterials = () => {
		setIsPopupGetMaterials(isPopupGetMaterials => !isPopupGetMaterials)
	}

	const handlePopupDownloadMaterials = () => {
		setIsPopupDownloadMaterials(
			isPopupDownloadMaterials => !isPopupDownloadMaterials
		)
	}

	const handleShowPopupPreviewCoursesOnTopic = () => {
		setIsPopupPreviewCoursesOnTopic(
			isPopupPreviewCoursesOnTopic => !isPopupPreviewCoursesOnTopic
		)
	}

	const scrollLocation = useScroll()
	const windowWidth = useWindowWidth()

	// Condition for rendering the Popup Download Materials, SectionJournalForm, PopupGetMaterials components
	const [isUrlsPdf, setIsUrlsPdf] = useState(false)

	useEffect(() => {
		const getIsUrls = async () => {
			if (journalArticle?.pdfMaterials) {
				const urls = await Promise.all(
					journalArticle?.pdfMaterials?.map(
						async item => await checkIfResourceExists(item.url)
					)
				)
				const urlsSuccess = urls.some(item => item === true)
				setIsUrlsPdf(urlsSuccess)
			}
		}
		getIsUrls()
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	const at = useAt()

	const journalRecommendedArticles: TypeLibJournalReadMoreArticlesArticles =
		journalArticle?.articleBody
			?.filter(
				item =>
					item && item.__typename === 'journal.journal-recommended-articles'
			)
			?.reduce(
				(acc, cur) => [...acc, ...cur?.journalRecommendedArticles?.articles],
				[]
			)

	const currentJournalArticleSlug = journalArticle?.slug

	const seoParams = {
		title:
			journalArticle?.metaTitle ||
			`${journalArticle?.title || 'Статья'} • MBA - ${companyName}`,
		desc:
			journalArticle?.metaDescription ||
			truncate(`${journalArticle?.shortDescription}`, 120),
		canonical: `${routesFront.root}${routesFront.journal}/${
			journalArticle?.slug || 'test-statya'
		}`
	}

	return (
		<>
			<NextSeo
				title={seoParams.title}
				description={seoParams.desc}
				canonical={seoParams.canonical}
				nofollow={preview || journalArticle?.nofollow !== false}
				noindex={preview || journalArticle?.noindex !== false}
				openGraph={{
					url: seoParams.canonical,
					title: seoParams.title,
					description: seoParams.desc,
					images: [
						{
							url: `${routesFront.root}${routesFront.assetsImgsIconsManifestIcon512}`,
							width: 512,
							height: 512,
							alt: companyName,
							type: 'image/png'
						}
					],
					site_name: companyName
				}}
			/>
			<SeoOrganizationJsonLd />
			<SectionJournalHistoryArticle journalArticle={journalArticle} />
			<div className={stls.scrollProgress}>
				<div
					className={stls.scrollProgressBar}
					style={{
						transform: `translateX(-${
							100 - pageYOffset / ((scollHeight - clientHeight) / 100)
						}%)`
					}}
				></div>
			</div>
			<Wrapper classNames={[stls.wrapper]}>
				<article
					className={cn(
						stls.article,
						!isPopupCoursesOnTopicDesktop && !isPopupDownloadMaterials
							? stls.notPopup
							: ''
					)}
				>
					<header>
						<SectionJournalArticleHeader
							journalArticle={journalArticle}
							classNames={[stls.articleHeader]}
						/>
						<SectionJournalArticleTitle
							journalArticle={journalArticle}
							classNames={[stls.articleTitle]}
						/>
						<SectionJournalArticleContents
							journalArticle={journalArticle}
							classNames={[stls.articleTitle]}
							isPopupCoursesOnTopicDesktop={isPopupCoursesOnTopicDesktop}
							isPopupDownloadMaterials={isPopupDownloadMaterials}
						/>
					</header>
					<section>
						<SectionJournalTitlePicture journalArticle={journalArticle} />
						{journalArticle?.articleBody?.map((component, idx) => (
							<Fragment key={`${component.__typename}_${idx}`}>
								{component.__typename === 'journal.paragraph' && (
									<SectionJournalParagraph
										body={component.paragraphBodyParts}
										idx={idx}
									/>
								)}
								{component.__typename === 'journal.title' && (
									<SectionJournalTitle title={component.title} idx={idx} />
								)}
								{component.__typename === 'general.picture' && (
									<SectionJournalPicture picture={component.picture} />
								)}
								{component.__typename === 'journal.emphasis' && (
									<SectionJournalEmphasis body={component.emphasisBody} />
								)}
								{component.__typename === 'journal.quote' && (
									<SectionJournalQuote quote={component.quote} />
								)}
								{component.__typename === 'journal.list' && (
									<SectionJournalList list={component.list} />
								)}
								{component.__typename === 'journal.conclusion' && (
									<SectionJournalConclusion
										item={component.conclusion}
										journalArticle={journalArticle}
									/>
								)}
								{component.__typename ===
									'journal.journal-recommended-program' && (
									<SectionJournalRecommendedProgram
										recommendedProgram={component.recommendedProgram}
									/>
								)}
								{component.__typename ===
									'journal.journal-recommended-articles' && (
									<SectionJournalRecommendedArticles
										journalRecommendedArticles={
											component.journalRecommendedArticles
										}
										currentJournalArticleSlug={currentJournalArticleSlug}
									/>
								)}
								{component.__typename === 'journal.read-also-articles' && (
									<SectionJournalReadMoreArticles
										title={component.journalReadAlsoArticles?.title}
										articles={component.journalReadAlsoArticles?.articles?.filter(
											article =>
												article &&
												article?.slug !== currentJournalArticleSlug &&
												journalRecommendedArticles.some(
													recommendedArticle =>
														recommendedArticle?.slug !== article?.slug
												)
										)}
										currentJournalArticleSlug={currentJournalArticleSlug}
									/>
								)}
								{component.__typename ===
									'journal.journal-article-recommended-programs-section' && (
									<SectionJournalRecommendedPrograms
										recommendedProgramsSection={
											component.recommendedProgramsSection
										}
									/>
								)}
								{component.__typename === 'journal.journal-table' && (
									<SectionJournalTable
										htmlTableBody={component.htmlTableBody}
									/>
								)}
								{component.__typename === 'journal.form-pdf-materials' &&
									isUrlsPdf && (
										<SectionJournalForm
											pdfMaterials={journalArticle.pdfMaterials}
											formPdfMaterials={component.formPdfMaterials}
											windowWidth={windowWidth}
											mounted={mounted}
										/>
									)}
							</Fragment>
						))}
					</section>
				</article>
				<aside className={stls.aside}>
					{mounted && windowWidth <= 1020 && isPopupCoursesOnTopicPhone ? (
						createPortal(
							<PopupCoursesOnTopic
								classNames={[stls.popupCoursesOnTopic]}
								handlePopupCoursesOnTopic={handlePopupCoursesOnTopicPhone}
								recommendedPrograms={journalArticle?.recommendedPrograms}
							/>,
							document.querySelector('#__next')
						)
					) : mounted && windowWidth > 1020 && isPopupCoursesOnTopicDesktop ? (
						<PopupCoursesOnTopic
							classNames={[stls.popupCoursesOnTopic]}
							handlePopupCoursesOnTopic={handlePopupCoursesOnTopicDesktop}
							recommendedPrograms={journalArticle?.recommendedPrograms}
						/>
					) : (
						''
					)}
					{mounted &&
					journalArticle?.recommendedPrograms?.length &&
					windowWidth <= 1020 &&
					isPopupPreviewCoursesOnTopic
						? createPortal(
								<PopupPreviewCoursesOnTopic
									handlePopupCoursesOnTopic={handlePopupCoursesOnTopicPhone}
									handleShowPopupPreviewCoursesOnTopic={
										handleShowPopupPreviewCoursesOnTopic
									}
									classNames={[
										scrollLocation.height > 200
											? stls.showPopup
											: stls.noShowPopup
									]}
								/>,
								document.querySelector('#__next')
						  )
						: ''}
					{isUrlsPdf ? (
						mounted && windowWidth <= 1020 && isPopupDownloadMaterials ? (
							createPortal(
								<PopupDownloadMaterials
									classNames={[stls.popupDownloadMaterials]}
									handlePopupGetMaterials={handlePopupGetMaterials}
									handlePopupDownloadMaterials={handlePopupDownloadMaterials}
								/>,
								document.querySelector('#__next')
							)
						) : mounted && windowWidth > 1020 && isPopupDownloadMaterials ? (
							<PopupDownloadMaterials
								classNames={[stls.popupDownloadMaterials]}
								handlePopupGetMaterials={handlePopupGetMaterials}
								handlePopupDownloadMaterials={handlePopupDownloadMaterials}
							/>
						) : (
							''
						)
					) : (
						''
					)}
					{isUrlsPdf
						? mounted && isPopupGetMaterials
							? createPortal(
									<PopupGetMaterials
										classNames={[stls.popupGetMaterials]}
										title={journalArticle?.title}
										pdfMaterials={journalArticle?.pdfMaterials}
										handlePopupGetMaterials={handlePopupGetMaterials}
									/>,
									document.querySelector('#__next')
							  )
							: ''
						: ''}
				</aside>
				<BtnScrollTop />
			</Wrapper>
		</>
	)
}

export const getStaticPaths: GetStaticPaths = async () => {
	return await handleGetStaticPaths({ page: routesFront.journalArticles })
}

export const getStaticProps: GetStaticProps = async context => {
	return await handleGetStaticProps({
		page: routesFront?.journalArticles,
		context
	})
}

// export const getServerSideProps: GetServerSideProps = async context => {
// 	const journalArticle = await handleGetStaticProps({
// 		page: routesFront?.journalArticles,
// 		context
// 	})

// 	return { props: { journalArticle } }
// }

export default PageJournalArticle
