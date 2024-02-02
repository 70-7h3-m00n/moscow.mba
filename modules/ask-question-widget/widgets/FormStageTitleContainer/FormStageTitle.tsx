import stls from './FormStageTitle.module.sass'

import { waysToContact } from 'modules/ask-question-widget/constants'
import { AskQuestionHeading } from '../AskQuestionHeading/AskQuestionHeading'
import { HowToContactContext } from 'modules/ask-question-widget/fractals/context/context'
import { useContext } from 'react'
import { ACTION } from 'modules/ask-question-widget/fractals/context/reducer'

export const FormStageTitle = () => {
	const { state, dispatch } = useContext(HowToContactContext)

	const handlePrevious = () => {
		dispatch({ type: ACTION.SET_FORM_STAGE, payload: state.formStage - 1 })
		dispatch({ type: ACTION.SET_WAY, payload: null })
		dispatch({ type: ACTION.SET_METHOD, payload: null })
	}

	const formStageTitleContainer = (
		<>
			<AskQuestionHeading />
			<button className={stls.goBackArrow} onClick={() => handlePrevious()}>
				Вернуться назад
			</button>
		</>
	)

	return formStageTitleContainer
}
