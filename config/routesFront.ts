import { TypeRoutesFront } from '@/types/index'
import { dev } from '@/config/index'

const routesFront: TypeRoutesFront = {
  root: dev ? 'http://localhost:3000' : 'https://moscow.mba',
  home: '/',
  about: '/about',
  contact: '/contact',
  legal: '/legal',
  payment: '/payment',
  corporateClients: '/corporate-clients',
  promo: '/promo',
  journal: '/journal',
  journalArticles: '/journal/[journalArticles]',
  webinars: '/webinars',
  webinarsArchive: '/webinars/archive',
  webinarsUpcoming: '/webinars/upcoming',
  programs: '/programs',
  program: '/programs/[type]/[format]/[slug]',
  programsExecutive: '/programs/executive',
  programsInternationalBusinessLaw: '/programs/international-business-law',
  programsMba: '/programs/mba',
  programsMini: '/programs/mini',
  programsProfession: '/programs/profession',
  programsMbaOnline: '/programs/mba/online',
  programsMbaBlended: '/programs/mba/blended',
  programsMiniOnline: '/programs/mini/online',
  programsMiniBlended: '/programs/mini/blended',
  programsProfessionOnline: '/programs/profession/online',
  teachers: '/teachers',
  teachersTeacher: '/teachers/[teacher]',
  assetsImgsIconsManifestIcon512: '/assets/images/icons/manifest-icon-512.png'
}

export default routesFront
