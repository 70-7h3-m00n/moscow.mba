import Link from 'next/link'
import cn from 'classnames'

import {
	TypeClassNames,
	TypeLibJournalArticleRecommendedProgramsSection,
	TypeLibJournalIcon,
	TypeLibJournalRecommendedPrograms
} from '@/types/index'

import routesFront from '@/config/routesFront'

import { getClassNames } from '@/helpers/index'

import { ImgJournalArticleRecommended } from '@/components/images'

import stls from '@/styles/components/popups/PopupCoursesOnTopic.module.sass'

type TypeSectionPopupCoursesOnTopicProps = {
	recommendedPrograms: TypeLibJournalRecommendedPrograms
	handlePopupCoursesOnTopic: () => void
} & TypeClassNames

const PopupCoursesOnTopic = ({
	recommendedPrograms,
	handlePopupCoursesOnTopic,
	classNames
}: TypeSectionPopupCoursesOnTopicProps) => {
	//If there are no programs, then do not render the component
	if (!recommendedPrograms || recommendedPrograms?.length === 0) return null

	// console.log('=>>>>>>>>>>>>>>>>>>>>', recommendedPrograms?.[0])

	return (
		<>
			<div className={stls.wrapper} onClick={handlePopupCoursesOnTopic}></div>
			<div
				className={
					cn([stls.container], getClassNames({ classNames })) || undefined
				}
			>
				<div className={stls.buttonClosed}>
					<button
						className={stls.closed}
						onClick={handlePopupCoursesOnTopic}
					></button>
				</div>
				<div className={stls.category}>
					<span className={stls.categoryItem}>{'Курсы по теме'}</span>
				</div>
				<div className={stls.programs}>
					{recommendedPrograms?.map((program, idx) => (
						<Link
							href={`${routesFront.programs}/${program?.categorySlug}/${program?.studyFormatSlug}/${program?.slug}`}
							className={stls.program}
							key={`${program.title}_${idx}`}
						>
							<div className={stls.iconProgram}>
								<ImgJournalArticleRecommended
									icon={program.icon}
									backgroundColor='medium'
									widthIcon={30}
									heightIcon={30}
									usage='popup'
								/>
							</div>
							<div className={stls.contentProgram}>
								<p className={stls.nameProgram}>{program.title}</p>
							</div>
							<div className={stls.linkProgram}>
								<p className={stls.link}>Узнать больше</p>
							</div>
						</Link>
					))}
				</div>
				<div className={stls.bottom}>
					<span className={cn(stls.textBottom)}>
						* В этом месяце мы делаем большой набор, в связи с этим, действует{' '}
						<span className={cn(stls.isHighlightedTextBottom)}>скидка 45%</span>{' '}
						на все онлайн программы. Количество мест ограничено
					</span>
				</div>
			</div>
		</>
	)
}

export default PopupCoursesOnTopic
