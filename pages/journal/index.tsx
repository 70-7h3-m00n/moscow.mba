import type { NextPage } from 'next'
import { GetStaticProps } from 'next'
import { TypePageJournalArticlesProps } from '@/types/index'
import { useState } from 'react'
import { NextSeo } from 'next-seo'
import truncate from 'truncate'
import { routesFront, companyName } from '@/config/index'
import { handleGetStaticProps } from '@/lib/index'
import { useAt, usePageHandleContext } from '@/hooks/index'
import { ContextStaticPropsJournal } from '@/context/index'
import { PageJournalArticles } from '@/components/pages'
import { SeoOrganizationJsonLd } from '@/components/seo'

const PageJournal: NextPage<TypePageJournalArticlesProps> = ({
	programs,
	journalCategories,
	journalArticles
}) => {
	usePageHandleContext({
		programs
	})
	const [categories, setCategories] = useState(journalCategories || null)
	const [articles, setArticles] = useState(journalArticles || null)
	console.log('articles: ', articles)

	const at = useAt()

	const seoParams = {
		title: `Журнал • MBA - ${companyName}`,
		desc: truncate(`Журнал MBA`, 120),
		canonical: `${routesFront.root}${routesFront.journal}`
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
				// todo: add dynamic nofollow & noindex from the api.
				// nofollow
				// noindex
			/>
			<SeoOrganizationJsonLd />
			<ContextStaticPropsJournal.Provider
				value={{
					categories,
					setCategories,
					articles,
					setArticles
				}}>
				<PageJournalArticles />
			</ContextStaticPropsJournal.Provider>
		</>
	)
}

export default PageJournal

export const getStaticProps: GetStaticProps = async context =>
	await handleGetStaticProps({ page: routesFront.journal, context })
