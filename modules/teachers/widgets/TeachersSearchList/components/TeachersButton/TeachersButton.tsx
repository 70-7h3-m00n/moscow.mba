import stls from './TeachersButton.module.sass'
import cn from 'classnames'

import { routesFront } from '@/config/index'
import { PopupForm } from '@/components/popups'
import { clickedGetFullTeachersList } from '@/helpers/index'
import router from 'next/router'
import Popup from 'reactjs-popup'
import useAt from '@/hooks/useAt'
import { TeachersButtonProps } from './types'
import { useTeachersSearch } from 'modules/teachers/fractals/context/context'
import { useContext } from 'react'
import { ContextStaticProps } from '@/context/index'
import { ACTION } from 'modules/teachers/fractals/context/reducer'
import Link from 'next/link'
import { TeachersCountButton } from './components/TeachersCountButton/TeachersCountButton'

export const TeachersButton = ({ className, ...rest }: TeachersButtonProps) => {
	const at = useAt()
	const { program } = useContext(ContextStaticProps)
	const { state, dispatch } = useTeachersSearch()
	const {
		programTitle,
		programId,
		shownTeachersCount,
		teachers,
		showMoreTeachersAddedNum,
		UITeachers,
		searchTerm
	} = state

	const handleOnClick = () => {
		dispatch({
			type: ACTION.SET_SHOWN_TEACHERS_COUNT,
			payload: shownTeachersCount + showMoreTeachersAddedNum
		})
	}

	return (
		<div className={cn(className, stls.btn)} {...rest}>
			{shownTeachersCount >= teachers?.length ? (
				!at.profession && (
					<Popup
						trigger={
							<button className='button' onClick={handleOnClick}>
								{at.en ? 'Request full list' : 'Запросить полный список'}
							</button>
						}
						modal
						lockScroll
						nested
						closeOnDocumentClick
						onOpen={() => {
							clickedGetFullTeachersList({
								url: `${routesFront.root}${router.asPath}`
							})
						}}
					>
						{/* @ts-expect-error  */}
						{close => (
							<PopupForm
								programId={programId}
								programTitle={programTitle}
								closePopUpForm={close}
								title={
									at.en ? 'Get to know the experts' : 'Узнайте своих экспертов'
								}
								disc={
									at.en
										? 'Submit a request and receive a consultation on experts, programs, discounts, and requirements'
										: 'Оставьте заявку и получите консультацию по преподавателям, программам MBA, а также узнайте возможные варианты скидок и требования к поступлению'
								}
								formName={`Заявка с модальной формы "Запросить полный список преподавателей"${
									programTitle || program?.title
										? ` программы ${program?.category?.type || ''} ${
												program?.studyFormat || ''
										  } ${programTitle || program.title}`
										: ''
								}`}
							/>
						)}
					</Popup>
				)
			) : at.about ? (
				<Link
					className={cn('button', stls.btnShowMore)}
					href={routesFront.teachers}
				>
					Посмотреть всех
				</Link>
			) : (
				UITeachers.length >= 8 &&
				!searchTerm &&
				teachers && <TeachersCountButton />
			)}
		</div>
	)
}
