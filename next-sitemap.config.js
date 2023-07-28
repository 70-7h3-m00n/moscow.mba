/** @type {import('next-sitemap').IConfig} */

module.exports = {
	siteUrl: 'https://moscow.mba',
	changefreq: 'daily',
	priority: 0.7,
	sitemapSize: 7000,
	generateRobotsTxt: true,
	generateIndexSitemap: false,
	exclude: [
		'/payment',
		'/promo*',
		'*?',
		'/programs/professional/blended',
		'/programs/profession/online/personnel-management-hr-administration'
	],
	// alternateRefs: [
	//   {
	//     href: 'https://moscow.mba/en-US',
	//     hreflang: 'en'
	//   }
	// ],
	transform: async (config, path) => {
		return {
			loc: path, // => this will be exported as http(s)://<config.siteUrl>/<path>
			changefreq: config.changefreq,
			priority: config.priority,
			lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
			alternateRefs: config.alternateRefs ?? []
		}
	},
	// robotsTxtOptions: {
	//   policies: [
	//     {
	//       userAgent: '*',
	//       allow: '/'
	//     }
	//   ]
	// }
	robotsTxtOptions: {
		policies: [
			{
				userAgent: '*',
				allow: ['/*.css', '/*.js', '/*.jpg', '/*.png', '/*.gif'],
				disallow: [
					'*utm',
					'/promo*',
					'*?',
					'/*en-US',
					'/*kk_KZ',
					'*/ru/',
					'/*uz_UZ',
					'/promo*',
					'*?',
					'/*en-US',
					'/*kk_KZ',
					'*/ru/',
					'/*uz_UZ',
					'/%20policyf',
					'/oferta.pdf',
					'https://lms.moscow.mba/contact',
					'https://lms.moscow.mba/legal/about',
					'https://lms.moscow.mba/teachers',
					'https://lms.moscow.mba/programs/mini/online',
					'https://lms.moscow.mba/legal',
					'https://lms.moscow.mba/programs/executive',
					'https://lms.moscow.mba/about',
					'https://lms.moscow.mba/webinars',
					'https://lms.moscow.mba/programs/industry/online',
					'https://lms.moscow.mba/programs/professional/online'
				]
			}
		]
	}
}
