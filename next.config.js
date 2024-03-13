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
			// remove dublicates
			{
				source: '/programs/course/online/GR-menedzhment-1',
				destination: '/programs/course/online/gr-menedzhment',
				permanent: true
			},
			{
				source: '/programs/course/online/kadrovaya-bezopasnost-kompanii-1',
				destination: '/programs/course/online/kadrovaya-bezopasnost-kompanii',
				permanent: true
			},
			{
				source:
					'/programs/course/online/nalogooblozhenie-investorov-i-pravovoe-regulirovanie',
				destination: '/programs/course/online/nalogooblozhenie-investorov',
				permanent: true
			},
			{
				source: '/programs/course/online/osnovy-sovremennoj-mediacii',
				destination: '/programs/course/online/mediazia',
				permanent: true
			},
			// end

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
			},

			//todo

			{
				source: '/programs/mba/online/oil-and-gas-management',
				destination: '/programs/mini/online/oil-and-gas-management',
				permanent: true
			},
			{
				source: '/programs/mba/blended/oil-and-gas-management',
				destination: '/programs/mini/blended/oil-and-gas-management',
				permanent: true
			},
			{
				source: '/programs/mba/online/fitness-management',
				destination: '/programs/mini/online/fitness-management',
				permanent: true
			},
			{
				source: '/programs/mba/blended/fitness-management',
				destination: '/programs/mini/blended/fitness-management',
				permanent: true
			},
			{
				source: '/programs/mba/online/bank-management',
				destination: '/',
				permanent: true
			},
			{
				source: '/programs/mba/blended/bank-management',
				destination: '/',
				permanent: true
			},
			{
				source: '/programs/mba/online/consulting-management',
				destination: '/',
				permanent: true
			},
			{
				source: '/programs/mba/blended/consulting-management',
				destination: '/',
				permanent: true
			},
			{
				source: '/programs/mba/online/insurance-management',
				destination: '/',
				permanent: true
			},
			{
				source: '/programs/mba/blended/insurance-management',
				destination: '/',
				permanent: true
			},
			{
				source: '/programs/mba/online/public-utility-management',
				destination: '/',
				permanent: true
			},
			{
				source: '/programs/mba/blended/public-utility-management',
				destination: '/',
				permanent: true
			},
			{
				source: '/programs/mba/online/procurement-management',
				destination: '/programs/mini/online/procurement-management',
				permanent: true
			},
			{
				source: '/programs/mba/blended/procurement-management',
				destination: '/programs/mini/blended/procurement-management',
				permanent: true
			},

			{
				source: '/programs/mba/online/transport-management',
				destination: '/',
				permanent: true
			},
			{
				source: '/programs/mba/blended/transport-management',
				destination: '/',
				permanent: true
			},
			{
				source: '/programs/mba/online/media-and-communication-management',
				destination: '/',
				permanent: true
			},
			{
				source: '/programs/mba/blended/media-and-communication-management',
				destination: '/',
				permanent: true
			},
			{
				source: '/programs/mini/online/bank-management',
				destination: '/',
				permanent: true
			},
			{
				source: '/programs/mini/blended/bank-management',
				destination: '/',
				permanent: true
			},
			{
				source: '/programs/mini/online/consulting-management',
				destination: '/',
				permanent: true
			},
			{
				source: '/programs/mini/blended/consulting-management',
				destination: '/',
				permanent: true
			},
			{
				source: '/programs/mini/online/insurance-management',
				destination: '/',
				permanent: true
			},
			{
				source: '/programs/mini/blended/insurance-management',
				destination: '/',
				permanent: true
			},
			{
				source: '/programs/mini/online/public-utility-management',
				destination: '/',
				permanent: true
			},
			{
				source: '/programs/mini/blended/public-utility-management',
				destination: '/',
				permanent: true
			},
			{
				source: '/programs/mini/online/transport-management',
				destination: '/',
				permanent: true
			},
			{
				source: '/programs/mini/blended/transport-management',
				destination: '/',
				permanent: true
			},
			{
				source: '/programs/mini/online/media-and-communication-management',
				destination: '/',
				permanent: true
			},
			{
				source: '/programs/mini/blended/media-and-communication-management',
				destination: '/',
				permanent: true
			},
			{
				source:
					'/programs/course/online/gosudarstvenoe-i-municipalnoe-upravlenie',
				destination: '/',
				permanent: true
			},
			{
				source:
					'/programs/course/online/kadrovay-politika-i-effectivnoe-upravlenie-izmeneniami',
				destination: '/',
				permanent: true
			},
			{
				source: '/programs/course/online/nalogovoe-pravo',
				//todo Новый курс, нет на сайте, нет УП
				destination: '/',
				permanent: true
			},
			{
				source: '/programs/course/online/razvitie-liderskogo-potenjala',
				//todo Новый курс, Лидерство, нет на сайте
				destination: '/',
				permanent: true
			},
			{
				source:
					'/programs/course/online/upravlenie-logistikoy-i-zepjmi-postavok',
				//todo Новый курс, Логистическое бюджетирование, управление логистическими издержками и рисками в цепях поставок , нет на сайте
				destination: '/',
				permanent: true
			},
			{
				source:
					'/programs/profession/online/spesialist-po-vnedreniu-professionalnix-standartov',
				destination: '/',
				permanent: true
			},
			{
				source: '/programs/profession/online/upravlenie-i-normirovanie-truda',
				destination: '/',
				permanent: true
			},
			{
				source: '/programs/profession/online/banking-lawyer',
				destination: '/',
				permanent: true
			},
			{
				source: '/programs/profession/online/business-psychology',
				//todo Новый курс, Бизнес-психологические технологии: диагностика, фасилитация, интеграция, нет на сайте
				destination: '/',
				permanent: true
			},
			{
				source: '/programs/profession/online/business-psychology-mentor',
				destination: '/',
				permanent: true
			},
			{
				source: '/programs/profession/online/commercial-accountant',
				destination: '/programs/profession/online/chief-commercial-accountant',
				permanent: true
			},
			{
				source:
					'/programs/profession/online/construction-organizations-accounting-tax',
				destination: '/',
				permanent: true
			},
			{
				source: '/programs/profession/online/accounting-tax-accounting',
				destination: '/',
				permanent: true
			},
			{
				source: '/programs/profession/online/public-sector-accounting',
				destination: '/',
				permanent: true
			},
			{
				source:
					'/programs/profession/online/non-profit-organizations-accounting',
				destination: '/',
				permanent: true
			},
			{
				source: '/programs/profession/online/foreign-economic-accounting',
				//todo Новый курс, нет на сайте
				destination: '/',
				permanent: true
			},
			{
				source:
					'/programs/profession/online/accounting-calculation-in-catering',
				destination: '/',
				permanent: true
			},
			{
				source: '/programs/profession/online/business-entrepreneur-accounting',
				//todo Курс Бухгалтер в бизнесе
				destination: '/',
				permanent: true
			},
			{
				source: '/programs/profession/online/accounting-taxation-audit',
				destination: '/programs/profession/online/professionalnyj-buhgalter',
				permanent: true
			},
			{
				source: '/programs/profession/online/state-municipal-administration',
				destination: '/programs/mba/online/urban-management',
				permanent: true
			},
			{
				source: '/programs/profession/online/direktor-po-stroitelstvu',
				//todo курс Директор по строительству
				destination: '/',
				permanent: true
			},
			{
				source: '/programs/profession/online/investment',
				destination: '/programs/profession/online/investicionnyj-direktor',
				permanent: true
			},
			{
				source: '/programs/profession/online/hr-administration',
				destination: '/',
				permanent: true
			},
			{
				source: '/programs/profession/online/coaching-in-business',
				destination:
					'/programs/profession/online/kouch-psiholog-biznes-konsultant',
				permanent: true
			},
			{
				source: '/programs/profession/online/coaching-in-business-mentor',
				destination:
					'/programs/profession/online/nastavnichestvo-i-upravlencheskij-kouching',
				permanent: true
			},
			{
				source: '/programs/profession/online/menedjer-torgovogo-predpriatia',
				destination: '/programs/profession/online/sales-manager',
				permanent: true
			},
			{
				source: '/programs/profession/online/taxes-taxation',
				destination: '/',
				permanent: true
			},
			{
				source: '/programs/profession/online/tax-consulting',
				//todo Курс Налоговый менеджмент компании
				destination: '/',
				permanent: true
			},
			{
				source: '/programs/profession/online/tax-financial-consulting',
				destination: '/',
				permanent: true
			},
			{
				source: '/programs/profession/online/process-documentation',
				destination: '/',
				permanent: true
			},
			{
				source: '/programs/profession/online/internal-control-enterprice',
				destination: '/',
				permanent: true
			},
			{
				source:
					'/programs/profession/online/administrative-economic-department',
				destination: '/',
				permanent: true
			},
			{
				source: '/programs/profession/online/hr-manager',
				destination: '/',
				permanent: true
			},
			{
				source:
					'/programs/profession/online/information-technology-archives-archivists',
				destination: '/',
				permanent: true
			},
			{
				source: '/programs/profession/online/hr-documentation-specialist',
				//todo Курс Специалист по организационному и документационному обеспечению управления организацией
				destination: '/',
				permanent: true
			},
			{
				source: '/programs/profession/online/hr-audit-specialist',
				destination: '/',
				permanent: true
			},
			{
				source: '/programs/profession/online/personnel-assessment-specialist',
				destination: '/',
				permanent: true
			},
			{
				source: '/programs/profession/online/recruiting-specialist',
				destination: '/',
				permanent: true
			},
			{
				source:
					'/programs/profession/online/upravlenie-bezopasnosty-na-predpriatii',
				destination: '/',
				permanent: true
			},
			{
				source: '/programs/profession/online/upravlenie-v-sfere-inergetiki',
				destination: '/',
				permanent: true
			},
			{
				source: '/programs/profession/online/municipal-property-management',
				destination: '/',
				permanent: true
			},
			{
				source: '/programs/profession/online/managing-public-procurement',
				destination: '/',
				permanent: true
			},
			{
				source: '/programs/profession/online/sales-and-marketing-management',
				destination: '/programs/profession/online/direktor-po-marketingu',
				permanent: true
			},
			{
				source: '/programs/profession/online/legal-service-management',
				destination:
					'/programs/profession/online/direktor-yuridicheskogo-departamenta',
				permanent: true
			},
			{
				source: '/programs/profession/online/upravlenie-it-slysboy-predpriatia',
				destination: '/programs/profession/online/direktor-it-proektov',
				permanent: true
			},
			{
				source: '/programs/profession/online/management-accounting-analysis',
				destination: '/programs/profession/online/upravlenie-finansami',
				permanent: true
			},
			{
				source:
					'/programs/profession/online/management-accounting-financial-planning',
				destination: '/programs/profession/online/finansovyj-direktor',
				permanent: true
			},
			{
				source: '/programs/profession/online/upravlenie-nedvizimostu',
				destination: '/',
				permanent: true
			},
			{
				source: '/programs/profession/online/state-legal-adviser',
				destination: '/',
				permanent: true
			},
			{
				source: '/programs/profession/online/international-business-lawyer',
				//todo Новый курс, Международное частное право, думаю, подойдёт
				destination: '/',
				permanent: true
			},
			{
				source:
					'/programs/profession/online/yrisr-v-sfere-upravlenia-finansovogo-kontroly',
				destination: '/',
				permanent: true
			},
			{
				source: '/programs/profession/online/social-work',
				destination: '/',
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
