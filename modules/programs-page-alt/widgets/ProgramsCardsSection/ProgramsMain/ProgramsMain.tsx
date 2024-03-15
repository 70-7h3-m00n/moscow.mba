import stls from './ProgramsMain.module.sass'
import cn from 'classnames'
import { ProgramsMainProps } from './types'

import { FilterTags } from '../FilterTags/FilterTags'
import { CardsHeading } from '../CardsHeading/CardsHeading'
import { CardsList } from '../CardsList/CardsList'
import { ProgramsPageContext } from 'modules/programs-page-alt/fractals/context/context'
import { useContext, useState } from 'react'
import { FormBeta } from '@/components/forms/FormBeta/FormBeta'
import { LeadLoaderThankyouAlt } from '@/components/general/LoaderThankyou/LoaderThankyou'

export const ProgramsMain = ({ className, ...rest }: ProgramsMainProps) => {
	const { state, dispatch } = useContext(ProgramsPageContext)

	const [open, setOpen] = useState(false)
	const [openLoader, setOpenLoader] = useState(false)

	return (
		<div className={cn(className, stls.content)} {...rest}>
			<FilterTags className={stls.filterTags} />
			{state.UIPrograms.length > 0 ? (
				<>
					<CardsHeading />
					<CardsList />
				</>
			) : (
				<div className={stls.form}>
					<p className={stls.form__title}>
						К сожалению, у нас нет таких программ
					</p>
					<p className={stls.form__description}>
						Если у вас есть вопросы о формате или вы не знаете, что выбрать,
						оставьте свой номер — мы позвоним, чтобы ответить на все ваши
						вопросы
					</p>
					<FormBeta
						programTitle='Все программы обучения'
						setOpenLoader={setOpenLoader}
						setOpen={setOpen}
						formName={`Заявка с формы 'Свяжитесь с нами'`}
						policyPrivacy
						variant='beta'
					/>
					<LeadLoaderThankyouAlt
						open={open}
						setOpen={setOpen}
						openLoader={openLoader}
						setOpenLoader={setOpenLoader}
					/>
				</div>
			)}
		</div>
	)
}
