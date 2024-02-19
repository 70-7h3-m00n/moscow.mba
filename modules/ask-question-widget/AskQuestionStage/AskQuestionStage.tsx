import stls from './AskQuestionStage.module.sass'
import cn from 'classnames'

import { useContext } from 'react'
import { ContactStage } from './Stages/ContactStage/ContactStage'
import { ThanksStage } from './Stages/ThanksStage/ThanksStage'
import { SelectWayStage } from './Stages/SelectWayStage/SelectWayStage'
import { HowToContactContext } from '../fractals/context/context'
import useAt from '@/hooks/useAt'

const AskQuestionStage = () => {
	const at = useAt()
	const { state } = useContext(HowToContactContext)
	const { formStage } = state

	return (
		<>
			{formStage === 0 && <SelectWayStage />}
			{formStage === 1 && <ContactStage />}
			{formStage === 2 && <ThanksStage />}
		</>
	)
}

export default AskQuestionStage
