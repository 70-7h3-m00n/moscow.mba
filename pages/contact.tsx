import stls from '@/styles/pages/Contact.module.sass'
import breadcrumbsStls from '@/styles/components/general/Breadcrumbs.module.sass'
import { GetStaticProps } from 'next'
import { NextSeo, CorporateContactJsonLd } from 'next-seo'
import truncate from 'truncate'
import { contactData, routesFront, companyName, preview } from '@/config/index'
import { handleGetStaticProps } from '@/lib/index'
import { useAt, usePageHandleContext } from '@/hooks/index'
import { ContactCards, Breadcrumbs } from '@/components/general'
import { SeoOrganizationJsonLd } from '@/components/seo'

const PageContact = ({ programs }) => {
	usePageHandleContext({ programs })
	const at = useAt()
	const contactInfo = contactData()

	const seoParams = {
		title: `${at.en ? 'Contact' : 'Контакты'} • MBA - ${companyName}`,
		desc: truncate(
			`${contactInfo.ru.address.city}, ${contactInfo.ru.address.street}, ${contactInfo.ru.tels[0].val}, ${contactInfo.ru.email.val}`,
			120
		),
		canonical: `${routesFront.root}${routesFront.contact}`
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
			<CorporateContactJsonLd
				url={routesFront.root}
				logo={`${routesFront.root}${routesFront.assetsImgsIconsManifestIcon512}`}
				contactPoint={[
					{
						telephone: contactInfo.ru.tels[0].val,
						contactType: contactInfo.ru.tels[0].contactType,
						areaServed: contactInfo.ru.tels[0].areaServed,
						availableLanguage: contactInfo.ru.tels[0].availableLanguage
					}
				]}
			/>
			<section className={breadcrumbsStls.jumbotronGeneral}>
				<div className={stls.container}>
					<Breadcrumbs />
				</div>
			</section>
			<div className={stls.container}>
				<h1 className={stls.h1}>{at.en ? 'Contact' : 'Контакты'}</h1>
				<ContactCards />
			</div>
		</>
	)
}

export const getStaticProps: GetStaticProps = async context =>
	await handleGetStaticProps({ page: routesFront.contact, context })

export default PageContact
