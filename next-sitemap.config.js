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
					'/legaldocuments/',
					'*blended'
				]
			}
		]
	}
}

// User-agent: *
// Allow: /*.css
// Allow: /*.js
// Allow: /*.jpg
// Allow: /*.png
// Allow: /*.gif

// Disallow: *utm
// Disallow: /promo*
// Disallow: *?
// Disallow: /*en-US
// Disallow: /*kk_KZ
// Disallow: */ru/
// Disallow: /*uz_UZ
// Disallow: /legaldocuments/
// Disallow: *blended
