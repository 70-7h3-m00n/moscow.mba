import stls from './TeachersRequestForm.module.sass'
import cn from 'classnames'

import { routesFront } from '@/config/index'
import { PopupForm } from '@/components/popups'
import { clickedGetFullTeachersList } from '@/helpers/index'
import router from 'next/router'
import Popup from 'reactjs-popup'
import useAt from '@/hooks/useAt'
import TeachersRequestFormProps from './types'
import { useTeachersSearch } from 'modules/teachers-page/fractals/context/context'
import { useContext } from 'react'
import { ContextStaticProps } from '@/context/index'

export const TeachersRequestForm = ({
	className,
	...rest
}: TeachersRequestFormProps) => {
	const at = useAt()
	const { program } = useContext(ContextStaticProps)
	const { state } = useTeachersSearch()
	const { programTitle, programId } = state

	return (
		<div className={cn(className, stls.getAllTeachers)} {...rest}>
			<h3 className={stls.getAllTeachersTitle}>
				Получите полный список преподавателей
			</h3>
			<div
				className={cn({
					[stls.btn]: true,
					[stls.getAllTeachersBtn]: true
				})}>
				<Popup
					trigger={
						<button
							className={cn({
								button: true
							})}>
							{at.en ? "Get full teacher's list" : 'Запросить список'}
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
					}}>
					{/* @ts-expect-error  */}

					{close => (
						<PopupForm
							programId={programId}
							programTitle={programTitle}
							closePopUpForm={close}
							title={
								at.en
									? "Get teacher's list"
									: 'Получить полный список преподавателей'
							}
							disc={
								at.en
									? 'Submit a request and receive a consultation on experts, programs, discounts, and requirements'
									: 'Оставьте заявку и получите консультацию по преподавателям, программам MBA, а также узнайте возможные варианты скидок и требования к поступлению'
							}
							formName={`Заявка с модальной формы "Получите полный список преподавателей"${
								programTitle || program?.title
									? ` программы ${program?.category?.type || ''} ${
											program?.studyFormat || ''
									  } ${programTitle || program.title}`
									: ''
							}`}
						/>
					)}
				</Popup>
			</div>
		</div>
	)
}