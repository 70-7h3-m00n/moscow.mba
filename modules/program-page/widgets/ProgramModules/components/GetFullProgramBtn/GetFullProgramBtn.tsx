import stls from './GetFullProgramBtn.module.sass'
import cn from 'classnames'
import { GetFullProgramBtnProps } from './types'
import { BtnBeta } from '@/components/btns'

export const GetFullProgramBtn = ({ className }: GetFullProgramBtnProps) => {
	return (
		<div className={cn(className, stls.content)}>
			<BtnBeta className={stls.btn} variant='alpha'>
				Получить полную программу
			</BtnBeta>
		</div>
	)
}
