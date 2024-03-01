import { GetStaticProps } from 'next'
import { NextSeo } from 'next-seo'
import truncate from 'truncate'
import { routesFront, companyName, preview } from '@/config/index'
import { handleGetStaticProps } from '@/lib/index'
import { usePageHandleContext, useAt } from '@/hooks/index'
import { SeoOrganizationJsonLd } from '@/components/seo'
import { Seminars } from 'modules'
import {
	TypeLibPrograms,
	TypeLibSeminarCategories,
	TypeLibSeminars
} from '@/types/index'
import {
	Dispatch,
	SetStateAction,
	createContext,
	useEffect,
	useState
} from 'react'
import { addDays, isBefore } from 'date-fns'

type DateRangeType = {
	startDate: Date
	endDate: Date
	key: string
}

export const contextStaticPropsSeminars = createContext<{
	seminars: TypeLibSeminars
	setSeminars: Dispatch<SetStateAction<TypeLibSeminars>>
	showSeminars: TypeLibSeminars
	setShowSeminars: Dispatch<SetStateAction<TypeLibSeminars>>
	seminarCategories: TypeLibSeminarCategories
	setseminarCategories: Dispatch<SetStateAction<TypeLibSeminarCategories>>
	dateRange: DateRangeType[]
	setDateRange: Dispatch<SetStateAction<DateRangeType[]>>
	selectedCategory: string
	setSelectedCategory: Dispatch<SetStateAction<string>>
}>({
	seminars: [],
	setSeminars: () => {},
	showSeminars: [],
	setShowSeminars: () => {},
	seminarCategories: [],
	setseminarCategories: () => {},
	dateRange: [],
	setDateRange: () => {},
	selectedCategory: '',
	setSelectedCategory: () => {}
})

const PageSeminars = ({
	programs,
	seminars,
	seminarCategories
}: {
	programs: TypeLibPrograms
	seminars: TypeLibSeminars
	seminarCategories: TypeLibSeminarCategories
}) => {
	usePageHandleContext({ programs })

	const at = useAt()

	const [seminarsState, setSeminarsState] = useState<TypeLibSeminars | []>([])
	const [seminarCategoriesState, setSeminarsCategoriesState] = useState<
		TypeLibSeminarCategories
	>([])
	const [showSeminars, setShowSeminars] = useState<TypeLibSeminars | []>([])
	const [selectedCategory, setSelectedCategory] = useState('all')
	const [dateRange, setDateRange] = useState<DateRangeType[]>([
		{
			startDate: new Date(),
			endDate: null,
			key: 'selection'
		}
	])

	useEffect(() => {
		const sortedSeminars = seminars.sort(
			(a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
		)

		const filteredSeminarCategories = seminars
			?.filter(sem => new Date(sem.date) > new Date())
			?.reduce((uniqueCategories, seminar) => {
				seminar.seminar_categories.forEach(category => {
					const existingCategory = uniqueCategories.find(
						cat => cat.slug === category.slug
					)
					if (!existingCategory) {
						uniqueCategories.push({
							id: category.id,
							categoryName:
								category.name.charAt(0).toUpperCase() + category.name.slice(1),
							slug: category.slug
						})
					}
				})
				return uniqueCategories
			}, [])
		const categories = [
			{ id: 'all', categoryName: 'Все семинары', slug: 'all' },
			...filteredSeminarCategories
		]

		setSeminarsState(sortedSeminars)
		setSeminarsCategoriesState(categories)
		setShowSeminars(sortedSeminars)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	useEffect(() => {
		const filteredCategorySeminars =
			selectedCategory === 'all'
				? seminars
				: seminars.filter(s =>
						s.seminar_categories?.map(c => c.slug)?.includes(selectedCategory)
				  )

		const filteredSeminars = filteredCategorySeminars.filter(seminar => {
			const seminarDate = new Date(seminar.date)
			const startDate = dateRange[0].startDate
			const endDate = dateRange[0].endDate
				? addDays(dateRange[0].endDate, 1)
				: null

			return (
				(!startDate || isBefore(startDate, seminarDate)) &&
				(!endDate || isBefore(seminarDate, endDate))
			)
		})

		setShowSeminars(filteredSeminars)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [dateRange, selectedCategory])

	const seoParams = {
		title: `Семинары • MBA - ${companyName}`,
		desc: truncate('Узнайте даты и время семинаров MBA', 120),
		canonical: `${routesFront.root}${routesFront.seminars}`
	}

	return (
		<>
			<NextSeo
				title={seoParams.title}
				description={seoParams.desc}
				canonical={seoParams.canonical}
				nofollow={preview}
				noindex={preview}
				openGraph={{
					url: seoParams.canonical,
					title: seoParams.title,
					description: seoParams.desc,
					images: [
						{
							url: `${routesFront.root}${routesFront.assetsImgsIconsManifestIcon512}`,
							width: 512,
							height: 512,
							alt: companyName,
							type: 'image/png'
						}
					],
					site_name: companyName
				}}
			/>
			<SeoOrganizationJsonLd />
			<contextStaticPropsSeminars.Provider
				value={{
					seminars: seminarsState,
					setSeminars: setSeminarsState,
					showSeminars: showSeminars,
					setShowSeminars: setShowSeminars,
					seminarCategories: seminarCategoriesState,
					setseminarCategories: setSeminarsCategoriesState,
					dateRange,
					setDateRange,
					selectedCategory,
					setSelectedCategory
				}}
			>
				<Seminars timeframe='all' />
			</contextStaticPropsSeminars.Provider>
		</>
	)
}

export const getStaticProps: GetStaticProps = async context =>
	await handleGetStaticProps({ page: routesFront.seminars, context })

export default PageSeminars
