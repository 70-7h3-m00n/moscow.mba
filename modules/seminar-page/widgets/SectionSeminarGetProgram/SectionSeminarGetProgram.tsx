import stls from './SectionSeminarGetProgram.module.sass'
import { BtnAlpha } from '@/components/btns'
import { Wrapper } from '@/components/layout'
import { TypeLibSeminar } from '@/types/index'
import { NextPage } from 'next'
import Link from 'next/link'

const SectionSeminarGetProgram: NextPage<{ seminar: TypeLibSeminar }> = ({
	seminar
}) => {
	return (
		<section className={stls.container}>
			<Wrapper classNames={[stls.wrapper]}>
				<Link href={`${seminar?.pdfMaterials?.url}`}>Посмотреть программу</Link>
			</Wrapper>
		</section>
	)
}

export default SectionSeminarGetProgram
