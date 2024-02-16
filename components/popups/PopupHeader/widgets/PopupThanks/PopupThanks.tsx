import stls from './PopupThanks.module.sass'
import cn from 'classnames'
import { PopupThanksProps } from './types'

import useGenerateLeadGTM from '@/hooks/useGenerateLeadGTM'

export const PopupThanks = ({ className }: PopupThanksProps) => {
	useGenerateLeadGTM('HeaderPopup')

	return (
		<div className={cn(className, stls.content)}>
			<p className={stls.thanks}>
				Спасибо! Мы свяжемся с вами в ближайшее время 💬
			</p>
		</div>
	)
}
