import { useContext } from 'react'
import stls from './ThanksStage.module.sass'
import { HowToContactContext } from 'modules/ask-question-widget/fractals/context/context'
import useGenerateLeadGTM from '@/hooks/useGenerateLeadGTM'

export const ThanksStage = () => {
	const { state } = useContext(HowToContactContext)
	useGenerateLeadGTM('AskQuestion Widget')

	return (
		<div className={stls.content}>
			<p className={stls.paragraph} data-style={state.formStage === 2}>
				Спасибо! Мы свяжемся с вами в ближайшее время 💬
			</p>
		</div>
	)
}
