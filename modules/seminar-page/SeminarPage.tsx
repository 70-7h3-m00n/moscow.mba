import { BtnAlpha } from '@/components/btns'
import { ContactUs } from '@/components/sections'
import Image from 'next/image'
import stls from './SeminarPage.module.sass'
import { SectionSeminarSpecification, SectionSeminarTitle } from './widgets'
import { SectionSeminarDescription } from './widgets/SectionSeminarDescription'
import { SectionSeminarGetProgram } from './widgets/SectionSeminarGetProgram'
import { SectionSeminarList } from './widgets/SectionSeminarList'
import { SectionSeminarPriceCalculator } from './widgets/SectionSeminarPriceCalculator'
import { SectionSeminarIntegration } from './widgets/SectionSeminarIntegration'
import { SectionSeminarRegistrationForm } from './widgets/SectionSeminarRegistrationForm'
import { useContext } from 'react'
import { ContextStaticPropsSeminar } from 'pages/seminars/[seminar]'

const listSeminarInclude = [
	'Комплект авторских материалов',
	'Кофе-паузы',
	'Абонемент в базу знаний (записи вебинаров)',
	'Сертификат Moscow Business Academy',
	'Удостоверение о повышении квалификации'
]

const SeminarPage = () => {
	const { seminar } = useContext(ContextStaticPropsSeminar)

	return (
		<>
			<SectionSeminarTitle title={seminar?.title} />
			<SectionSeminarSpecification seminar={seminar} />
			<SectionSeminarDescription description={seminar?.description} />
			<SectionSeminarGetProgram seminar={seminar} />
			<SectionSeminarList
				title={'В результате обучения Вы:'}
				list={seminar?.advantagesList}
			/>
			<SectionSeminarList
				title={'В стоимость обучения входят:'}
				list={listSeminarInclude}
			/>
			<SectionSeminarPriceCalculator seminar={seminar} />
			<SectionSeminarIntegration />
			<ContactUs overlapsFooter></ContactUs>
		</>
	)
}

export default SeminarPage
