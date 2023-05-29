import { dev } from '@/config/index'

const routesBack = {
	// root: dev ? 'http://localhost:1337' : 'https://api.moscow.mba',
	// root: 'https://api.moscow.mba',
	root: 'http://localhost:1337',
	home: '/',
	graphql: '/graphql',
	programs: '/products',
	programsGetStaticProps: '/products/getStaticProps',
	programsGetStaticPropsProfession: '/products/getStaticProps/profession',
	programsGetStaticPropsCourse: '/products/getStaticProps/course',
	programsGetStaticPropsPromo: '/products/getStaticProps/promo',
	getStaticPropsSitemap: '/get-static-props/sitemap',
	// programsProgramTypeSlug: '/products/program/:type.slug',
	programsProgram: '/products/program',
	// programsProgramTypeSlug: '/products/paths/:type',
	programsPaths: '/products/paths',
	categories: '/categories',
	auth: '/auth',
	authLocal: '/auth/local',
	leads: '/leads',
	getStaticPropsDefault: '/get-static-props/default',
	getStaticPropsPageJournalArticle: '/get-static-props/page-journal-article',
	getStaticPropsPageJournalArticles: '/get-static-props/page-journal-articles',
	getStaticPropsPagePromo: '/get-static-props/page-promo',
	getStaticPropsPrograms: '/get-static-props/programs',
	getStaticPropsTeachers: '/get-static-props/teachers',
	getStaticPathsPageJournalArticles: '/get-static-paths/page-journal-article',
	getStaticPathsPageProgram: '/get-static-paths/page-program',
	getStaticPathsPageTeacher: '/get-static-paths/page-teacher'
} as const

export default routesBack
