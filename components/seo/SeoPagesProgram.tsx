import { TypeLibProgram } from '@/types/index'
import { NextSeo, CourseJsonLd } from 'next-seo'
import truncate from 'truncate'
import { routesFront, companyName, preview } from '@/config/index'
import { useAt } from '@/hooks/index'

type TSeoPagesProgram = {
	program: TypeLibProgram
	canonical?: string
}

const changeCanonicalLinkFrom = [
	`${routesFront.root}${routesFront.programs}/course/online/gosudarstvenoe-i-municipalnoe-upravlenie`,
	`${routesFront.root}${routesFront.programs}/course/online/upravlenie-it-slysboy-predpriatia`,
	`${routesFront.root}${routesFront.programs}/course/online/upravlenie-logistikoy-i-zepjmi-postavok`,
	`${routesFront.root}${routesFront.programs}/mba/online/bank-management`,
	`${routesFront.root}${routesFront.programs}/mba/online/consulting-management`,
	`${routesFront.root}${routesFront.programs}/mba/online/fitness-management`,
	`${routesFront.root}${routesFront.programs}/mba/online/digital-transformation`
]

const changeCanonicalLinkTo = [
	`${routesFront.root}${routesFront.programs}/mini/online/urban-management`,
	`${routesFront.root}${routesFront.programs}/profession/online/upravlenie-it-slysboy-predpriatia`,
	`${routesFront.root}${routesFront.programs}/mini/online/logistics-management`,
	`${routesFront.root}${routesFront.programs}/mini/online/bank-management`,
	`${routesFront.root}${routesFront.programs}/mini/online/consulting-management`,
	`${routesFront.root}${routesFront.programs}/mini/online/fitness-management`,
	`${routesFront.root}${routesFront.programs}/mini/online/digital-transformation`
]

const SeoPagesProgram = ({ program, canonical }: TSeoPagesProgram) => {
	const at = useAt()

	const programTitle = program?.title || (at.en ? 'Program' : 'Программа')

	const metaTitle =
		program?.category.type === 'mini' && at.blended
			? `${program?.metaTitle} mini blended`
			: program?.category.type === 'mba' && at.blended
			? `${program?.metaTitle?.replace('online', 'blended')}`
			: program?.metaTitle

	const metaDescription =
		program?.category.type === 'mini' && at.blended
			? `${program?.metaDescription} MBA mini blended`
			: program?.category.type === 'mba' && at.blended
			? `${program?.metaDescription} MBA blended`
			: program?.category.type === 'mba' && at.online
			? `${program?.metaDescription} MBA online`
			: program?.metaDescription

	const cannonicalCheck =
		program?.category?.slug && program?.studyFormat && program?.slug
			? `${routesFront.root}${routesFront.programs}/${program.category?.slug}/${program?.studyFormat}/${program?.slug}`
			: `${routesFront.root}${routesFront.programs}`

	const cannonialFallback = changeCanonicalLinkFrom.includes(cannonicalCheck)
		? changeCanonicalLinkTo[
				changeCanonicalLinkFrom.findIndex(el => el === cannonicalCheck)
		  ]
		: cannonicalCheck

	// const metaTitleTemplate = `${programTitle} • ${
	// 	program?.category.type === 'mini' ? 'MBA' : ''
	// } ${program?.category.type} ${
	// 	at.blended ? 'blended' : 'online'
	// } • ${companyName}`

	const metaTitleTemplate = at.profession
		? `Профессия "${program?.title}": обучение онлайн`
		: at.course
		? `Курс "${program?.title}": обучение онлайн`
		: at.mini
		? `Программа Mini MBA "${program?.title}": обучение онлайн`
		: `Программа MBA "${program?.title}": обучение онлайн`

	const seoParams = {
		title: program?.metaTitle ? metaTitle : metaTitleTemplate,
		programTitle: programTitle,
		desc: program?.metaDescription
			? metaDescription
			: program?.goal
			? truncate(program?.goal, 120)
			: program?.description
			? truncate(program?.description, 120)
			: at.en
			? 'Concur relevant business education from international experts'
			: 'Получите современное бизнес образование от международных экспертов',
		canonical: canonical || cannonialFallback
	}

	return (
		<>
			<NextSeo
				title={seoParams.title}
				description={seoParams.desc}
				canonical={seoParams.canonical}
				noindex={preview || program?.noindex || false}
				nofollow={preview || program?.nofollow || false}
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
			<CourseJsonLd
				courseName={seoParams.programTitle}
				description={seoParams.desc}
				provider={{
					name: companyName,
					url: seoParams.canonical
				}}
			/>
		</>
	)
}

export default SeoPagesProgram
