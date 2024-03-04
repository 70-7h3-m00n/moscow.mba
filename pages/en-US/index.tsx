import stls from '@/styles/pages/Index.module.sass'

import type { NextPage } from 'next'
import { GetStaticProps } from 'next'
import { TypePageHomeProps } from '@/types/index'
import { NextSeo } from 'next-seo'
import truncate from 'truncate'
import { routesFront, companyName, preview } from '@/config/index'
import { handleGetStaticProps } from '@/lib/index'
import { Wrapper } from '@/components/layout'
import { usePageHandleContext, useAt } from '@/hooks/index'
import {
	JumbotronCta,
	About,
	ConferencesInEurope,
	ForeignAffiliates,
	StudentsInternational,
	CorporateClients,
	Programs,
	Executive,
	ContactUs,
	CurrentLicenses,
	MemberOfRabe,
	MemberOfAcicel,
	OurDiplomasAndCertificates,
	CompanyCard,
	LegalDocuments
} from '@/components/sections'
import { SeoOrganizationJsonLd } from '@/components/seo'
import MemberOfAcicelAndRabo from '@/components/sections/general/MemberOfAcicelAndRabo/MemberOfAcicelAndRabo'

const PageHome: NextPage<TypePageHomeProps> = ({ programs }) => {
	usePageHandleContext({ programs })

	const at = useAt()

	const seoParams = {
		title: `${at.en ? '' : 'Академия бизнеса MBA: '}${companyName}`,
		desc: `${
			at.en
				? 'MBA online. \n International leading experts! \n Installment 0% \n ECICEL Accreditation '
				: '✔ MBA бизнес школа дистанционного образования.\n Международные эксперты-практики!\n Рассрочка 0%\n Аккредитация ECICEL'
		}`,
		canonical: routesFront.root
	}

	return (
		<>
			<NextSeo
				title={seoParams.title}
				description={seoParams.desc}
				canonical={seoParams.canonical}
				nofollow={preview}
				noindex={preview}
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
			<JumbotronCta />
			<About />
			<ConferencesInEurope />
			<ForeignAffiliates />
			<StudentsInternational />
			<CorporateClients />
			<Programs />
			<Executive />
			<Wrapper classNames={[stls.wrapper]}>
				<h1 className={stls.title}>INFORMATION ABOUT THE ORGANIZATION</h1>
			</Wrapper>
			<MemberOfAcicelAndRabo />
			<CurrentLicenses />
			<OurDiplomasAndCertificates />
			<ContactUs overlapsFooter />
		</>
	)
}

export const getStaticProps: GetStaticProps = async context =>
	await handleGetStaticProps({ page: routesFront.home, context })

export default PageHome
