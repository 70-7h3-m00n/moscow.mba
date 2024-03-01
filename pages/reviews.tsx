import { Reviews } from '@/components/pages'
import { companyName, preview, routesFront } from '../config'
import { NextSeo } from 'next-seo'

export default function reviews() {
	const seoParams = {
		title: `Отзывы MBA • ${companyName}`,
		desc: 'Отзывы MBA',
		canonical: `${routesFront.root}${routesFront.promo}`
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
			<Reviews />
		</>
	)
}
