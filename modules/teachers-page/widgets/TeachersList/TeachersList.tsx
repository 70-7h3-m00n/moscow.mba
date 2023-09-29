import stls from '../../TeachersPage.module.sass'
import cn from 'classnames'
import TeachersListProps from './props'

import useAt from '@/hooks/useAt'
import Link from 'next/link'
import { TeacherCard } from '../TeacherCard/TeacherCard'
import Popup from 'reactjs-popup'
import { PopupTeacher } from '@/components/popups'
import routesFront from '@/config/routesFront'
import { TypeLibTeachers } from '@/types/index'
import { useTeachersSearch } from 'modules/teachers-page/fractals/context/context'

export const TeachersList = ({ atStandAlonePage }: TeachersListProps) => {
	const at = useAt()
	const { state } = useTeachersSearch()
	const { shownTeachersCount, UITeachers, teachers } = state

	// * quick fix for the SEO robots to see the full list of teachers
	const hiddenTeachers: TypeLibTeachers | null = teachers?.filter(
		(teacher, idx) => teacher && idx >= shownTeachersCount
	)

	return (
		<ul
			className={cn({
				[stls.teachersList]: true,
				[stls.teachersListProfession]: at.profession || at.course,
				[stls.teachersListEmpty]: UITeachers?.length === 0
			})}>
			{UITeachers?.length > 0 &&
				UITeachers.map((teacher, idx) => (
					<li
						key={`${teacher?.name || 'LiTeacherContent'}-${idx}`}
						className={stls.teachersListItem}>
						{atStandAlonePage || at.about ? (
							<Link
								legacyBehavior
								href={`${routesFront.teachers}/${teacher?.slug || 'teacher'}`}>
								<a className={stls.a}>
									<TeacherCard
										teacher={teacher}
										atStandAlonePage={atStandAlonePage}
									/>
								</a>
							</Link>
						) : (
							<Popup
								trigger={
									<a href='#!' className={stls.a}>
										<TeacherCard
											teacher={teacher}
											atStandAlonePage={atStandAlonePage}
										/>
									</a>
								}
								modal
								lockScroll
								nested
								closeOnDocumentClick>
								{/* @ts-expect-error  */}

								{close => <PopupTeacher close={close} teacher={teacher} />}
							</Popup>
						)}
					</li>
				))}
			{hiddenTeachers?.length > 0 &&
				hiddenTeachers.map((teacher, idx) => (
					<li
						key={`${teacher?.name || 'LiTeacherContent'}-${idx}`}
						className={stls.teachersListItem}
						style={{
							display: 'none'
						}}>
						<Link
							legacyBehavior
							href={`${routesFront.teachers}/${teacher?.slug || 'teacher'}`}>
							<a className={stls.a}>
								<TeacherCard
									teacher={teacher}
									atStandAlonePage={atStandAlonePage}
								/>
							</a>
						</Link>
					</li>
				))}
		</ul>
	)
}
