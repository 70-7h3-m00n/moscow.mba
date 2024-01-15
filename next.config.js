const { createSecureHeaders } = require('next-secure-headers')
const withPWA = require('next-pwa')
const dev = process.env.NODE_ENV !== 'production'
const env = process.env.NEXT_PUBLIC_VERCEL_ENV

module.exports = {
	reactStrictMode: true,
	poweredByHeader: false,
	images: {
		domains: ['res.cloudinary.com']
	},
	async headers() {
		if (process.env.NEXT_PUBLIC_VERCEL_ENV === 'preview') {
			return [
				{
					source: '/:path*',
					headers: [
						{
							key: 'X-Robots-Tag',
							value: 'noindex'
						},
						{
							key: 'meta',
							value: 'noindex, nofollow'
						}
					]
				}
			]
		}

		return [
			{
				source: '/:path*',
				// headers: createSecureHeaders()
				headers: createSecureHeaders({
					// contentSecurityPolicy: {
					//   directives: {
					//     defaultSrc: [
					//       "'self'",
					//       'data:',
					//       'https://ssl.gstatic.com',
					//       'https://www.gstatic.com',
					//       'https://fonts.gstatic.com',
					//       'https://www.google-analytics.com',
					//       'https://googleads.g.doubleclick.net',
					//       'https://www.google.com',
					//       'https://bid.g.doubleclick.net',
					//       'https://mc.yandex.ru',
					//       'https://moscow.mba',
					//       'https://www.googleadservices.com',
					//       'https://www.google.ru',
					//       'https://www.googletagmanager.com',
					//       "'sha256-yD2YThwDBB7lr1RbtQ3odfhOChA2l5RZg8iqCFjRIhY='",
					//       'https://connect.facebook.net/en_US/fbevents.js',
					//       'https://connect.facebook.net/signals/config/1845052109010998',
					//       'https://www.facebook.com/tr/',
					//       "'sha256-Uz0yn00PqpvyPuK+MptaAirzRCPwuCU4Vhj/iAbfJxk='"
					//     ],
					//     scriptSrc: [
					//       "'self'",
					//       `${dev ? "'unsafe-eval'" : ''}`,
					//       'https://www.googletagmanager.com',
					//       "'sha256-dR9r2B/SmDDIQ6AkSRP1HcZOn6lncQaF7JWgTTTLGTY='",
					//       "'sha256-kxlLwzh8f+NZ3uNSXSPKI+KoxSBTS4AxdH+dXubYARw='",
					//       "'sha256-6g/y+M3Jov37nPvp0FF1vktpRuyTb8EoU5XYgBiqpQY='",
					//       'http://www.googletagmanager.com',
					//       'https://mc.yandex.ru',
					//       'data:',
					//       'https://tagmanager.google.com',
					//       'https://www.google-analytics.com',
					//       'https://ssl.google-analytics.com',
					//       'https://www.googleadservices.com',
					//       'https://www.google.com',
					//       'https://googleads.g.doubleclick.net',
					//       'https://moscow.mba',
					//       'http://www.googleadservices.com',
					//       "'sha256-yD2YThwDBB7lr1RbtQ3odfhOChA2l5RZg8iqCFjRIhY='",
					//       'https://connect.facebook.net/en_US/fbevents.js',
					//       'https://connect.facebook.net/signals/config/1845052109010998',
					//       "'sha256-Uz0yn00PqpvyPuK+MptaAirzRCPwuCU4Vhj/iAbfJxk='"
					//     ],
					//     // scriptSrcElem: [
					//     //   "'self'",
					//     //   "'sha256-dR9r2B/SmDDIQ6AkSRP1HcZOn6lncQaF7JWgTTTLGTY='",
					//     //   "'sha256-kxlLwzh8f+NZ3uNSXSPKI+KoxSBTS4AxdH+dXubYARw='",
					//     //   'https://www.googletagmanager.com'
					//     // ],
					//     styleSrc: [
					//       "'self'",
					//       "'unsafe-inline'",
					//       'https://tagmanager.google.com',
					//       'https://fonts.googleapis.com'
					//     ]
					//   }
					// },
					referrerPolicy: 'no-referrer-when-downgrade',
					// frameGuard: ['allow-from', { uri: 'http://webvisor.com' }]
					frameGuard: false
				})
				// headers: createSecureHeaders({
				//   forceHTTPSRedirect: [
				//     true,
				//     { maxAge: 60 * 60 * 24 * 30 * 12 * 2, includeSubDomains: true }
				//   ],
				//   frameGuard: 'deny',
				//   noopen: 'noopen',
				//   nosniff: 'nosniff',
				//   xssProtection: 'sanitize',
				//   contentSecurityPolicy: {
				//     directives: {
				//       connectSrc: [
				//         "'self'",
				//         'https://ipo-cp.ru',
				//         'vitals.vercel-insights.com'
				//       ],
				//       defaultSrc: ["'self'", 'https://ipo-cp.ru', 'data:'],
				//       // scriptSrc: "'unsafe-inline'",
				//       styleSrc: "'unsafe-inline'"
				//     }
				//   },
				//   referrerPolicy: 'no-referrer'
				// })
			},
			{
				source: '/feed.yml',
				headers: [
					{
						key: 'Content-type',
						value: 'application/xml; charset=UTF-8'
					}
				]
			}
		]
	},
	async redirects() {
		return [
			{
				source: '/journal/korporativnoe-upravlenie-proektami-uspeh-biznesa',
				destination:
					'/journal/princzipy-korporativnogo-rukovodstva-proektami-2',
				permanent: true
			},
			{
				source:
					'/journal/postroenie-shablona-biznes-modelej-plyusy-metoda-ostervaldera',
				destination:
					'/journal/postroenie-shablona-biznes-modelej-plyusy-metoda-ostervaldera-1',
				permanent: true
			},
			{
				source: '/programs/mbl/online/international-business-law',
				destination: '/programs/international-business-law',
				permanent: true
			}
			// {
			// 	source: '/programs',
			// 	destination: '/programs/mini/online',
			// 	permanent: true
			// },
			// {
			// 	source: '/programs/mini',
			// 	destination: '/programs/mini/online',
			// 	permanent: true
			// },
			// {
			// 	source: '/programs/mba',
			// 	destination: '/programs/mba/online',
			// 	permanent: true
			// },
		]
	}
	// experimental: {
	//   esmExternals: false
	// },
	// pwa: {
	//   dest: 'public',
	//   disable: dev
	// },
	// staticPageGenerationTimeout: 120,
	// experimental: {
	//   scrollRestoration: true
	// },
	// i18n: {
	// 	locales: ['ru', 'en-US'],
	// 	defaultLocale: 'ru',
	// 	localeDetection: true
	// },
}
