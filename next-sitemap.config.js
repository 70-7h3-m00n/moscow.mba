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
					'/dklfjhgkjdhsfgkljsdk;lfh',
					'/sdgasdgasd',
					'/programs/profession...1437331992',
					'/f/f',
					'/programs/null/online/information-technology-management',
					'/jkjkjk',
					'/program%D0%B2%D0%B2',
					'/%D0%BE%D0%BB%D0%BE%D0%BB%D0%BE%D0%BB',
					'/programs/professional/blended/crisis-management',
					'/programsm_',
					'/journal/stati/investiczii',
					'/programs/professional/online/605dd10fdc947d5f1c95e68a',
					'/programs/mini/blended/6062f5857757eb02b87abc0a',
					'/programs/mini/blended/6062f5857757eb02b87abc07',
					'/jkj',
					'/programs/profession/online/Internal%20audit-and-control',
					'/programs/mini/online/bG9naXN0aW',
					'/programs/professional/blended',
					'/programs/profession/online/personnel-management-hr-administration'
				]
			}
		]
	}
}
