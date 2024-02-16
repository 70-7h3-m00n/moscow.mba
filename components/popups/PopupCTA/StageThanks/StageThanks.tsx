import stls from './StageThanks.module.sass'
import { StageThanksProps } from './types'

import useGenerateLeadGTM from '@/hooks/useGenerateLeadGTM'
import { BtnBeta } from '@/components/btns'

export const StageThanks = ({ close }: StageThanksProps) => {
	useGenerateLeadGTM('StageThanks')

	return (
		<div className={stls.thanks}>
			<p className={stls.thanks__title}>Спасибо!</p>
			<p className={stls.thanks__subtitle}>
				Наш менеджер свяжется с Вами в ближайшее время
			</p>
			<BtnBeta variant='beta' className={stls.thanks__btn} onClick={close}>
				Ок!
			</BtnBeta>
		</div>
	)
}
