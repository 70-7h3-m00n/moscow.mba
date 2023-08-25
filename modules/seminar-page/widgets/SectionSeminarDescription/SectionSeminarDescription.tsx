import { NextPage } from 'next'
import stls from './SectionSeminarDescription.module.sass'
import { Wrapper } from '@/components/layout'

const SectionSeminarDescription: NextPage<{ description: string }> = ({
	description
}) => {
	const paragraphs = description
		?.split('\n')
		?.filter(paragraph => paragraph.trim() !== '')

	return (
		<section className={stls.container}>
			<Wrapper classNames={[stls.wrapper]}>
				{paragraphs?.map((paragraph, idx) => (
					<p key={idx} className={stls.paragraph}>
						{paragraph}
					</p>
				))}
			</Wrapper>
		</section>
	)
}

export default SectionSeminarDescription
