import stls from './SelectWayStage.module.sass'
import { SelectWayStageType } from './types'

import { AskQuestionHeading } from '../../../widgets/AskQuestionHeading/AskQuestionHeading'
import { waysToContact } from 'modules/ask-question-widget/constants'
import BtnContact from 'modules/ask-question-widget/components/BtnContact/BtnContact'
import { ChangeEvent, useContext } from 'react'
import { HowToContactContext } from 'modules/ask-question-widget/fractals/context/context'
import { ACTION } from 'modules/ask-question-widget/fractals/context/reducer'
import { WayToContactType } from '../../types'

export const SelectWayStage = () => {
	const { state, dispatch } = useContext(HowToContactContext)

	const textAreaHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
		dispatch({ type: ACTION.SET_QUESTION, payload: event.target.value })
	}

	const selectWayHandler = (wayToContact: WayToContactType) => {
		dispatch({ type: ACTION.SET_HOW_TO_CONTACT, payload: wayToContact })
		dispatch({ type: ACTION.SET_FORM_STAGE, payload: state.formStage + 1 })

		if (wayToContact.way === 'Электронная почта') {
			dispatch({ type: ACTION.SET_METHOD, payload: 'Написать' })
		}

		if (wayToContact.way === 'Позвонить') {
			dispatch({ type: ACTION.SET_METHOD, payload: 'Позвонить' })
		}
	}

	return (
		<>
			<AskQuestionHeading />
			<div className={stls.content}>
				<textarea
					autoFocus
					placeholder='Напишите ваш вопрос'
					value={state.question}
					onChange={textAreaHandler}
					className={stls.questionTextarea}
				/>
				<div className={stls.waysToContactGrid}>
					<p className={stls.howToContact}>Выберите удобный способ ответа 👇</p>
					{waysToContact.map((wayToContact, idx) => (
						<BtnContact
							key={`${wayToContact.way}${idx}`}
							way={wayToContact.way}
							url={wayToContact.url}
							handlerOnClick={() => {
								selectWayHandler(wayToContact)
							}}
						/>
					))}
				</div>
			</div>
		</>
	)
}
