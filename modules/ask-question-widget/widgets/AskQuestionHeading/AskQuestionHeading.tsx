import stls from './AskQuestionHeading.module.sass'
import { AskQuestionHeadingProps } from './types'

import { LogoIcon } from '../../components/LogoIcon/LogoIcon'
import { useContext } from 'react'
import { HowToContactContext } from 'modules/ask-question-widget/fractals/context/context'
import Image from 'next/image'

export const AskQuestionHeading = ({
	className,
	...rest
}: AskQuestionHeadingProps) => {
	const { state } = useContext(HowToContactContext)

	const title = state.way || 'Есть вопрос? Получите ответ'

	const subtitle =
		state.way === 'Электронная почта'
			? 'Введите электронную почту 👇'
			: state.way === 'Позвонить'
			? 'Введите номер телефона 👇'
			: state.way
			? 'Выберите удобный способ связи 👇'
			: null

	return (
		<div className={stls.heading} {...rest}>
			{state.way ? (
				<Image src={state.url} width={40} height={40} alt={state.way} />
			) : (
				<LogoIcon />
			)}
			<h3 className={stls.title}>{title}</h3>
			{subtitle && <p className={stls.subtitle}>{subtitle}</p>}
		</div>
	)
}
