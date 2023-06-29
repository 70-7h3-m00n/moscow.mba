import stls from '@/styles/components/sections/corporateClients/SectionCorporateClientsWeAre.module.sass'
import { TypeClassNames } from '@/types/index'
import cn from 'classnames'
import { getClassNames } from '@/helpers/index'
import { Wrapper } from '@/components/layout'
import {
	ImgCorporateClientStudentsAtPresentation,
	ImgCorporateClientStudentsTogether,
	ImgCorporateClientStudentsMeeting
} from '@/components/images'

type SectionCorporateClientsWeAreProps = TypeClassNames

const SectionCorporateClientsWeAre = ({
	classNames
}: SectionCorporateClientsWeAreProps) => {
	const list = [
		{
			title: '9000+',
			content: 'Выпускников'
		},
		{
			title: '6',
			content: 'Филиалов за рубежом'
		},
		{
			title: 'Спикеры',
			content:
				'Практикующие специалисты, имеющие международный опыт преподавания'
		},
		{
			title: '150+',
			content: 'Профессоров международного уровня готовят программы'
		}
	]
	return (
		<section
			className={
				cn(stls.container, getClassNames({ classNames })) || undefined
			}>
			<Wrapper column classNames={[stls.wrapper]}>
				<h2 className={stls.title}>Московская Бизнес Академия — это</h2>
				<div className={stls.content}>
					<ul className={stls.list}>
						{list.map((item, idx) => (
							<li key={`${item.title}-${idx}`} className={stls.listItem}>
								<h3 className={stls.listItemTitle}>{item.title}</h3>
								<p className={stls.listItemContent}>{item.content}</p>
							</li>
						))}
					</ul>
					<div className={stls.imgs}>
						<div className={stls.imgGroup}>
							<ImgCorporateClientStudentsTogether
								classNames={[stls.ImgCorporateClientStudentsTogether]}
							/>
							<ImgCorporateClientStudentsAtPresentation
								classNames={[stls.ImgCorporateClientStudentsAtPresentat]}
							/>
						</div>
						<ImgCorporateClientStudentsMeeting
							classNames={[stls.ImgCorporateClientStudentsMeeting]}
						/>
					</div>
				</div>
			</Wrapper>
		</section>
	)
}

export default SectionCorporateClientsWeAre
