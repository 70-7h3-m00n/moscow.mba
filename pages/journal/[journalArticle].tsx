import stls from '@/styles/pages/PageJournalArticles.module.sass'
import { TypeLibJournalArticle } from '@/types/index'
import type { NextPage } from 'next'
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
import { routesFront, companyName } from '@/config/index'
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

type TypeJournalArticleProps = {
	journalArticle: TypeLibJournalArticle
}

const PageJournalArticle: NextPage<TypeJournalArticleProps> = ({
	journalArticle
}) => {
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
	const [isUrlsPdf, setIsUrlsPdf] = useState(true)
	useEffect(() => {
		const getIsUrls = async () => {
			const urls = await Promise.all(
				journalArticle?.pdfMaterials.map(
					async item => await checkIfResourceExists(item.url)
				)
			)
			const urlsSuccess = urls.some(item => item === true)
			setIsUrlsPdf(urlsSuccess)
		}
		getIsUrls()
	}, [])

	const at = useAt()

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
				nofollow={journalArticle?.nofollow || true}
				noindex={journalArticle?.noindex || true}
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
					}}></div>
			</div>
			<Wrapper classNames={[stls.wrapper]}>
				<article
					className={cn(
						stls.article,
						!isPopupCoursesOnTopicDesktop && !isPopupDownloadMaterials
							? stls.notPopup
							: ''
					)}>
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
								{component.__typename === 'ComponentJournalParagraph' && (
									<SectionJournalParagraph
										body={component.paragraphBodyParts}
										idx={idx}
									/>
								)}
								{component.__typename === 'ComponentJournalTitle' && (
									<SectionJournalTitle title={component.title} idx={idx} />
								)}
								{component.__typename === 'ComponentGeneralPicture' && (
									<SectionJournalPicture picture={component.picture} />
								)}
								{component.__typename === 'ComponentJournalEmphasis' && (
									<SectionJournalEmphasis body={component.emphasisBody} />
								)}
								{component.__typename === 'ComponentJournalQuote' && (
									<SectionJournalQuote quote={component.quote} />
								)}
								{component.__typename === 'ComponentJournalList' && (
									<SectionJournalList list={component.list} />
								)}
								{component.__typename === 'ComponentJournalConclusion' && (
									<SectionJournalConclusion item={component.conclusion} />
								)}
								{component.__typename ===
									'ComponentJournalJournalRecommendedProgram' && (
									<SectionJournalRecommendedProgram
										recommendedProgram={component.recommendedProgram}
									/>
								)}
								{component.__typename ===
									'ComponentJournalJournalRecommendedArticles' && (
									<SectionJournalRecommendedArticles
										journalRecommendedArticles={
											component.journalRecommendedArticles
										}
									/>
								)}
								{component.__typename ===
									'ComponentJournalJournalArticleRecommendedProgramsSection' && (
									<SectionJournalRecommendedPrograms
										recommendedProgramsSection={
											component.recommendedProgramsSection
										}
									/>
								)}
								{component.__typename === 'ComponentJournalJournalTable' && (
									<SectionJournalTable
										htmlTableBody={component.htmlTableBody}
									/>
								)}
								{component.__typename === 'ComponentJournalFormPdfMaterials' &&
									(isUrlsPdf ? (
										<SectionJournalForm
											pdfMaterials={journalArticle.pdfMaterials}
											formPdfMaterials={component.formPdfMaterials}
											windowWidth={windowWidth}
											mounted={mounted}
										/>
									) : (
										''
									))}
							</Fragment>
						))}
						<SectionJournalToShare journalArticle={journalArticle} />
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
										pdfMaterials={journalArticle.pdfMaterials}
										handlePopupGetMaterials={handlePopupGetMaterials}
									/>,
									document.querySelector('#__next')
							  )
							: ''
						: ''}
				</aside>
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

export default PageJournalArticle
