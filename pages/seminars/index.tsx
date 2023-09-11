import { GetStaticProps } from 'next'
import { NextSeo } from 'next-seo'
import truncate from 'truncate'
import { routesFront, companyName } from '@/config/index'
import { handleGetStaticProps } from '@/lib/index'
import { usePageHandleContext, useAt } from '@/hooks/index'
import { SeoOrganizationJsonLd } from '@/components/seo'
import { SeminarsPage } from 'modules'
import { TypeLibSeminarCategories, TypeLibSeminars } from '@/types/index'
import {
	Dispatch,
	SetStateAction,
	createContext,
	useEffect,
	useState
} from 'react'

export const contextStaticPropsSeminars = createContext<{
	seminars: TypeLibSeminars
	setSeminars: Dispatch<SetStateAction<TypeLibSeminars>>
	seminarCategories: TypeLibSeminarCategories
	setseminarCategories: Dispatch<SetStateAction<TypeLibSeminarCategories>>
}>({
	seminars: [],
	setSeminars: () => {},
	seminarCategories: [],
	setseminarCategories: () => {}
})

const PageSeminars = ({ programs, seminars, seminarCategories }) => {
	usePageHandleContext({ programs })

	const at = useAt()

	const [seminarsState, setSeminarsState] = useState<TypeLibSeminars | []>([])
	const [seminarCategoriesState, setSeminarsCategoriesState] =
		useState<TypeLibSeminarCategories>([])

	useEffect(() => {
		setSeminarsState(seminars)
		setSeminarsCategoriesState(seminarCategories)
	}, [])

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
					seminarCategories: seminarCategoriesState,
					setseminarCategories: setSeminarsCategoriesState
				}}>
				<SeminarsPage />
			</contextStaticPropsSeminars.Provider>
		</>
	)
}

export const getStaticProps: GetStaticProps = async context =>
	await handleGetStaticProps({ page: routesFront.seminars, context })

export default PageSeminars
