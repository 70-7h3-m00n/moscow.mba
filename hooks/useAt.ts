import { useRouter } from 'next/router'

const useAt = () => {
	const { pathname, asPath, locale, query } = useRouter()

	const router = useRouter()

	// Taking query parameters from the URI
	function extractQueryParameters(): {
		sorting: null | string
		filterTypeProgram: null | string
		filterTrainingFormat: null | string
		filterDuration: null | string
		filterDirection: null | string
	} {
		const queryParameters = {
			sorting: null,
			filterTypeProgram: null,
			filterTrainingFormat: null,
			filterDuration: null,
			filterDirection: null
		}
		const queryString = router.asPath.split('?')[1]
		if (queryString) {
			const parameterPairs = queryString.split('&')
			for (const parameterPair of parameterPairs) {
				const [key, value] = parameterPair.split('=')
				queryParameters[key] = value
			}
		}
		return queryParameters
	}

	// Make getSplitedPath from the query parameters
	function makeSplittedPath(): string[] {
		if (
			pathname === '/programs' &&
			router.asPath.split('/')[0] !== query.locale
		) {
			const {} = extractQueryParameters()
			const result = [
				'programs',
				extractQueryParameters().filterTypeProgram,
				extractQueryParameters().filterTrainingFormat
			]
			return result
		} else {
			return pathname.split('/').filter(item => item !== '' && item !== '[url]')
		}
	}

	// const getSplitedPath = pathname
	// 	.split('/')
	// 	.filter(item => item !== '' && item !== '[url]')

	const getSplitedPath = makeSplittedPath()

	// console.log(getSplitedPath)

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
		mini:
			// extractQueryParameters().filterTypeProgram === 'mini' ||
			getSplitedPath[1] === 'mini',
		mba:
			// extractQueryParameters().filterTypeProgram === 'mba' ||
			getSplitedPath[1] === 'mba',
		course:
			// extractQueryParameters().filterTypeProgram === 'course' ||
			getSplitedPath[1] === 'course',
		profession:
			// extractQueryParameters().filterTypeProgram === 'profession' ||
			getSplitedPath[1] === 'profession',
		executive: getSplitedPath[1] === 'executive',
		programs: getSplitedPath[0] === 'programs' && !getSplitedPath[3],
		online:
			// extractQueryParameters().filterTrainingFormat === 'online' ||
			getSplitedPath[2] === 'online',
		blended:
			// extractQueryParameters().filterTrainingFormat === 'blended' ||
			getSplitedPath[2] === 'blended',
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
		en: locale === 'en-US',
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
		getSplitedPath
	}
}

export default useAt
