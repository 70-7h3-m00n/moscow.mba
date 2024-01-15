import stls from '@/styles/pages/Legal.module.sass'
import breadcrumbsStls from '@/styles/components/general/Breadcrumbs.module.sass'
import { GetStaticProps } from 'next'
import { NextSeo } from 'next-seo'
import truncate from 'truncate'
import { routesFront, companyName } from '@/config/index'
import { handleGetStaticProps } from '@/lib/index'
import { usePageHandleContext } from '@/hooks/index'
import { Breadcrumbs } from '@/components/general'
import { Wrapper } from '@/components/layout'
import {
	CurrentLicenses,
	MemberOfRabe,
	MemberOfAcicel,
	OurDiplomasAndCertificates,
	CompanyCard,
	LegalDocuments
} from '@/components/sections'
import { SeoOrganizationJsonLd } from '@/components/seo'

const PageLegal = ({ programs }) => {
	usePageHandleContext({ programs })

	const seoParams = {
		title: `Сведения об организации • MBA - ${companyName}`,
		desc: truncate(
			'Лицензия на осуществление образовательной деятельности, приложение к...',
			120
		),
		canonical: `${routesFront.root}${routesFront.legal}`
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
			/>
			<SeoOrganizationJsonLd />
			<section className={breadcrumbsStls.jumbotronGeneral}>
				<Wrapper>
					<Breadcrumbs />
				</Wrapper>
			</section>
			<Wrapper classNames={[stls.wrapper]}>
				<h1 className={stls.title}>Сведения об организации</h1>
			</Wrapper>
			{/* TODO: add cursor pointer to each license */}
			<CurrentLicenses />
			<MemberOfRabe />
			<MemberOfAcicel />
			<OurDiplomasAndCertificates />
			<CompanyCard />
			<LegalDocuments />
		</>
	)
}

export const getStaticProps: GetStaticProps = async context =>
	await handleGetStaticProps({ page: routesFront.legal, context })

export default PageLegal
