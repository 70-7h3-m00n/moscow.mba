import stls from './CtaForm.module.sass'
import cn from 'classnames'
import { CtaFormProps } from './types'

import { Wrapper } from '@/components/layout'
import Image from 'next/image'
import { GridIcons } from '../components/GridIcons/GridIcons'
import { useContext, useState } from 'react'
import { LeadLoaderThankyou } from '@/components/general'
import { ProgramPageContext } from 'modules/program-page/fractals/context/context'
import { FormBeta } from '../../../../components/forms/FormBeta/FormBeta'

export const CtaForm = ({ className }: CtaFormProps) => {
	const { state } = useContext(ProgramPageContext)
	const { program } = state

	const [open, setOpen] = useState(false)
	const [openLoader, setOpenLoader] = useState(false)

	return (
		<section className={cn(className, stls.container)}>
			<Wrapper classNames={[stls.content]}>
				<div className={stls.left}>
					<LeadLoaderThankyou
						open={open}
						setOpen={setOpen}
						openLoader={openLoader}
						setOpenLoader={setOpenLoader}
						programId={program?.id}
						programTitle={program?.title}
					/>
					<h2 className={stls.title}>
						Записаться на курс или получить бесплатную консультацию
					</h2>
					<div className={stls.left__imageWrapper}>
						<Image
							className={stls.left__image}
							src={'/assets/images/program/cta-form-icon-1.svg'}
							alt='Иконка'
							width={250}
							height={216}
						/>
						<GridIcons variant='alpha' />
					</div>
				</div>
				<div className={stls.right}>
					<FormBeta
						programTitle={program?.title}
						setOpenLoader={setOpenLoader}
						setOpen={setOpen}
						formName={`Заявка с формы 'Свяжитесь с нами'`}
						policyPrivacy
						variant='light'
					/>
				</div>
			</Wrapper>
		</section>
	)
}
