import { useRouter } from 'next/router'
import { dev } from '@/config/index'

const useAt = () => {
	const { pathname, asPath, locale, query } = useRouter()

	const getSplitedPath = pathname
		.split('/')
		.filter(item => item !== '' && item !== '[url]')

	const getProgramTitle = asPath.split('/')[4]

	return {
		index: getSplitedPath[0] === undefined,
		about: getSplitedPath[0] === 'about',
		corporateClients: getSplitedPath[0] === 'corporate-clients',
		teachers: getSplitedPath[0] === 'teachers',
		teachersTeacher:
			getSplitedPath[0] === 'teachers' && (!!getSplitedPath?.[1] || false),
		legal: getSplitedPath[0] === 'legal' && !getSplitedPath[1],
		promo: getSplitedPath[0] === 'promo',
		sale: getSplitedPath[0] === 'sale',
		job: getSplitedPath[0] === 'job',
		partner: getSplitedPath[0] === 'partner',
		mini: getSplitedPath[1] === 'mini',
		mba: getSplitedPath[1] === 'mba',
		course: getSplitedPath[1] === 'course',
		profession: getSplitedPath[1] === 'profession',
		executive: getSplitedPath[1] === 'executive',
		programs: getSplitedPath[0] === 'programs' && !getSplitedPath[3],
		allPrograms:
			getSplitedPath[0] === 'programs' &&
			!getSplitedPath[1] &&
			!getSplitedPath[2],
		online: getSplitedPath[2] === 'online',
		blended: getSplitedPath[2] === 'blended',
		seminars: getSplitedPath[0] === 'seminars',
		webinars: getSplitedPath[0] === 'webinars',
		webinarsUpcoming:
			getSplitedPath[0] === 'webinars' && getSplitedPath[1] === 'upcoming',
		webinarsArchive:
			getSplitedPath[0] === 'webinars' && getSplitedPath[1] === 'archive',
		webinarsIndex: getSplitedPath[0] === 'webinars' && !getSplitedPath[1],
		journal: getSplitedPath[0] === 'journal',
		contact: getSplitedPath[0] === 'contact',
		mbl: getSplitedPath[1] === 'international-business-law',
		ru: locale === 'ru',
		en: locale === 'en-US' || getSplitedPath[0] === 'en-US',
		kz:
			locale === 'kz' ||
			locale === 'kk' ||
			locale === 'kk_KZ' ||
			query.locale === 'kz' ||
			query.locale === 'kk' ||
			query.locale === 'kk_KZ',
		uz:
			locale === 'uz' ||
			locale === 'uz_UZ' ||
			query.locale === 'uz' ||
			query.locale === 'uz_UZ',
		programChunk: !!getProgramTitle,
		getSplitedPath,
		new: !!getProgramTitle
		//  &&	(getSplitedPath[1] === 'profession' || getSplitedPath[1] === 'course')
		// new: dev ? !!getProgramTitle : false
		// new: false
	}
}

export default useAt
