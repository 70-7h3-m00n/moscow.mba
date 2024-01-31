import stls from './AskQuestionStage.module.sass'
import cn from 'classnames'

import { useContext } from 'react'
import { ContactStage } from './Stages/ContactStage/ContactStage'
import { ThanksStage } from './Stages/ThanksStage/ThanksStage'
import { SelectWayStage } from './Stages/SelectWayStage/SelectWayStage'
import { HowToContactContext } from '../fractals/context/context'

const AskQuestionStage = () => {
	const { state } = useContext(HowToContactContext)
	console.log('state: ', state)
	const { formStage } = state

	// useEffect(() => {
	// 	if (formSubmitted) {
	// 		const tagManagerArgs = {
	// 			dataLayer: {
	// 				event: 'generate_lead',
	// 				ecommerce: {
	// 					add: {
	// 						actionField: {
	// 							id: uuidv4()
	// 						},
	// 						products: [
	// 							{
	// 								id: 'question',
	// 								name: 'question',
	// 								programFormat: at.online
	// 									? 'online'
	// 									: at.blended
	// 									? 'blended'
	// 									: null,
	// 								programType: at.mini
	// 									? 'mini'
	// 									: at.mba
	// 									? 'mba'
	// 									: at.profession
	// 									? 'profession'
	// 									: at.course
	// 									? 'course'
	// 									: null
	// 							}
	// 						]
	// 					}
	// 				}
	// 			},
	// 			dataLayerName: 'dataLayer'
	// 		}
	// 		TagManager.dataLayer(tagManagerArgs)
	// 	}
	// }, [])

	return (
		<>
			{formStage === 0 && <SelectWayStage />}
			{formStage === 1 && <ContactStage />}
			{formStage === 2 && <ThanksStage />}
		</>
	)
}

export default AskQuestionStage
