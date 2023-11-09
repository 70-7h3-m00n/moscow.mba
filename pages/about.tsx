import stls from '@/styles/pages/About.module.sass'
import type { NextPage } from 'next'
import { GetStaticProps } from 'next'
import { TypePageTeachersProps } from '@/types/index'
import { NextSeo } from 'next-seo'
import truncate from 'truncate'
import { routesFront, companyName } from '@/config/index'
import { useAt } from '@/hooks/index'
import { handleGetStaticProps } from '@/lib/index'
import { usePageHandleContext } from '@/hooks/index'
import {
	JumbotronMain,
	About,
	ConferencesInEurope,
	ForeignAffiliates,
	StudentsInternational,
	CorporateClients,
	TeachersLegacy,
	UpToDateContent,
	Accreditation,
	ContactUs
} from '@/components/sections'
import { SeoOrganizationJsonLd } from '@/components/seo'

const PageAbout: NextPage<TypePageTeachersProps> = ({ programs, teachers }) => {
	usePageHandleContext({ programs })

	const at = useAt()

	const seoParams = {
		title: `${at.en ? 'About' : 'Об академии'} • MBA - ${companyName}`,
		desc: truncate(
			`${
				at.en
					? "International Business Education. We've everything to help you reach your full potential!"
					: 'Международное бизнес-образование. У нас есть всё для раскрытия Вашего потенциала!'
			}`,
			120
		),
		canonical: `${routesFront.root}${routesFront.about}`
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
			<JumbotronMain />
			<About />
			<ConferencesInEurope />
			<ForeignAffiliates />
			<StudentsInternational />
			<CorporateClients />
			<TeachersLegacy teachers={teachers} />
			<UpToDateContent withBottomLine />
			<Accreditation />
			<ContactUs overlapsFooter />
		</>
	)
}

export const getStaticProps: GetStaticProps = async context =>
	await handleGetStaticProps({ page: routesFront.about, context })

export default PageAbout
