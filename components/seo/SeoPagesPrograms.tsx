import { TypeLibPrograms } from '@/types/index'
import { NextSeo } from 'next-seo'
import truncate from 'truncate'
import { routesFront, companyName, preview } from '@/config/index'
import { useAt } from '@/hooks/index'
import { SeoOrganizationJsonLd } from '@/components/seo'

type TSeoPagesProgram = {
	ofType?: 'mini' | 'mba' | 'course' | 'profession'
	studyFormat?: 'online' | 'blended'
	programs?: TypeLibPrograms | null
}

const SeoPagesPrograms = ({
	ofType,
	studyFormat,
	programs
}: TSeoPagesProgram) => {
	const at = useAt()

	const programFormat = at.blended ? 'blended' : 'online'

	const seoParams = {
		title: `${
			at.mba
				? `MBA ${programFormat} программы бизнес образования`
				: at.mini
				? `Mini MBA ${programFormat} в Москве | Программа обучения дистанционно`
				: at.profession
				? `Профессии  дистанционно • MBA`
				: at.course
				? `Курсы повышения квалификации |  Moscow Business Academy`
				: `MBA ${programFormat} программы бизнес образования`
		}`,
		desc: `${
			at.mba
				? `Обучение MBA (МБА) ${programFormat} от Moscow Business Academy. \n Дистанционное образование со скидкой - 45 % \n Диплом международного образца. \n Аккредитация ECICEL`
				: at.mini
				? `${programFormat
						.split('')
						.map((letter, idx) => (idx === 0 ? letter.toUpperCase() : letter))
						.join(
							''
						)} программа Mini MBA (Мини МБА) от ведущей бизнес школы. \n Обучение с практикующими экспертами! \n Стоимость на курсы со скидкой - 45%. \n Выгодная цена!`
				: at.profession
				? `✔ Курсы переквалификации на базе высшего образования от ведущей школы бизнеса Moscow Business Academy. \n Диплом международного образца! \n ✎ Зарубежные эксперты-практики! `
				: at.course
				? `Дистанционные курсы повышения квалификации от ведущей школы бизнеса MBA. \n Сертифицированный учебный центр с международными экспертами-практиками. \n Обучение со скидкой - 45%.`
				: `Обучение MBA (МБА) ${programFormat} от Moscow Business Academy. \n Дистанционное образование со скидкой - 45 % \n Диплом международного образца. \n Аккредитация ECICEL`
		}`,
		canonical: `${routesFront.root}${routesFront.programsMbaOnline}`
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
		</>
	)
}

export default SeoPagesPrograms
