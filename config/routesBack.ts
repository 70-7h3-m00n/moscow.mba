import { dev } from '@/config/index'

const routesBack = {
  root: dev ? 'http://localhost:1337' : 'https://api-moscow-mba.herokuapp.com',
  // root: 'http://localhost:1337',
  home: '/',
  graphql: '/graphql',
  programs: '/products',
  programsGetStaticProps: '/products/getStaticProps',
  programsGetStaticPropsProfession: '/products/getStaticProps/profession',
  programsGetStaticPropsCourse: '/products/getStaticProps/course',
  programsGetStaticPropsPromo: '/products/getStaticProps/promo',
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
  journal: '/get-static-props/page-journal-article'
}

export default routesBack
