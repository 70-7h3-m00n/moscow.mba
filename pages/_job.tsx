import truncate from 'truncate'
import { companyName, routesFront } from '../config'
import { NextSeo } from 'next-seo'
import { SeoOrganizationJsonLd } from '@/components/seo'
import { JobPage } from 'modules'

const PageJob = () => {
	const seoParams = {
		title: `Карьерный центр • MBA - ${companyName}`,
		desc: truncate('Карьерный центр MBA', 120),
		canonical: `${routesFront.root}${routesFront.job}`
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
			<JobPage />
		</>
	)
}

export default PageJob
