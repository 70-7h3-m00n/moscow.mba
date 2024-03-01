import truncate from 'truncate'
import { companyName, preview, routesFront } from '../config'
import { NextSeo } from 'next-seo'
import { SeoOrganizationJsonLd } from '@/components/seo'
import { JobPage, PartnerPage } from 'modules'

const PagePartners = () => {
	const seoParams = {
		title: `Сотрудничество • MBA - ${companyName}`,
		desc: truncate('Сотрудничество с MBA', 120),
		canonical: `${routesFront.root}${routesFront.partner}`
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
			<PartnerPage />
		</>
	)
}

export default PagePartners
