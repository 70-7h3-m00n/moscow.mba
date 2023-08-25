import { Wrapper } from '@/components/layout'
import stls from './SectionSeminarTitle.module.sass'
import { ContextStaticPropsSeminar } from 'pages/seminars/[seminar]'
import { useContext } from 'react'
import { NextPage } from 'next'

const SectionSeminarTitle: NextPage<{ title: string }> = ({ title }) => {
	return (
		<section className={stls.container}>
			<Wrapper classNames={[stls.wrapper]}>
				<h1 className={stls.title}>{title}</h1>
			</Wrapper>
		</section>
	)
}

export default SectionSeminarTitle
