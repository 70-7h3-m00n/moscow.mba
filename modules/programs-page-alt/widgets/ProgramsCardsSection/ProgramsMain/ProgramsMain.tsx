import stls from './ProgramsMain.module.sass'
import cn from 'classnames'
import { ProgramsMainProps } from './types'

import { FilterTags } from '../FilterTags/FilterTags'
import { CardsHeading } from '../../ProgramsFiltersSection/CardsHeading/CardsHeading'
import { CardsList } from '../CardsList/CardsList'
import { ProgramsPageContext } from 'modules/programs-page-alt/fractals/context/context'
import { useContext, useState } from 'react'
import { FormBeta } from '@/components/forms/FormBeta/FormBeta'
import { LeadLoaderThankyouAlt } from '@/components/general/LoaderThankyou/LoaderThankyou'
import { AnimatePresence, motion } from 'framer-motion'
import { LIST_FILTER_TYPE_PROGRAM } from 'modules/programs-page-alt/fractals'

export const ProgramsMain = ({ className, ...rest }: ProgramsMainProps) => {
	const { state } = useContext(ProgramsPageContext)

	const programs = state.UIPrograms?.filter(
		program =>
			program?.slug !== 'executive' &&
			program?.slug !== 'international-business-law' &&
			program?.studyFormat !== 'blended'
	)

	const [open, setOpen] = useState(false)
	const [openLoader, setOpenLoader] = useState(false)

	const programsType = LIST_FILTER_TYPE_PROGRAM.find(
		item => item.value === state.programsConfig.type
	)

	return (
		<div className={cn(className, stls.content)} {...rest}>
			<FilterTags className={stls.filterTags} />
			{state.UIPrograms.length > 0 ? (
				<>
					<p className={stls.description}>{programsType.description}</p>
					<CardsList programs={programs} />
				</>
			) : (
				<AnimatePresence mode='wait'>
					<motion.div
						className={stls.form}
						initial={{ y: 10, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						exit={{ y: -10, opacity: 0 }}
						transition={{ duration: 0.2 }}
					>
						<p className={stls.form__title}>
							{state.programsConfig.searchTerm === ''
								? 'К сожалению, у нас нет таких программ'
								: 'Такого пока нет. Попробуете изменить запрос?'}
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
					</motion.div>
				</AnimatePresence>
			)}
		</div>
	)
}
