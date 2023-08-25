import { NextPage } from 'next'
import stls from './SectionSeminarList.module.sass'
import { Wrapper } from '@/components/layout'

type TypeSectionSeminarListProps = {
	title: string
	list: string[]
}

const SectionSeminarList: NextPage<TypeSectionSeminarListProps> = ({
	title,
	list
}) => {
	return (
		<section className={stls.container}>
			<Wrapper classNames={[stls.wrapper]}>
				<h2 className={stls.title}>{title}</h2>
				<ul className={stls.list}>
					{list?.map((item, idx) => (
						<li key={idx} className={stls.item}>
							{item}
						</li>
					))}
				</ul>
			</Wrapper>
		</section>
	)
}

export default SectionSeminarList
