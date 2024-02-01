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
import useAt from '@/hooks/useAt'
import { LoaderThankyou } from '../LoaderThankYou/LoaderThankyou'
import { LeadLoaderThankyouAlt } from '@/components/general/LoaderThankyou/LoaderThankyou'

export const CtaForm = ({
	className,
	variant = 'alpha',
	...rest
}: CtaFormProps) => {
	const at = useAt()
	const { state } = useContext(ProgramPageContext)
	const { program } = state

	const [open, setOpen] = useState(false)
	const [openLoader, setOpenLoader] = useState(false)

	const ctaTitle =
		variant === 'gamma' && (at.course || at.profession)
			? 'Есть вопросы или сложности с выбором программы?'
			: variant === 'gamma'
			? 'Поможем в выборе'
			: `Записаться на ${at.course ? 'курс' : 'программу'} или получить
	бесплатную консультацию`

	return (
		<section className={cn(className, stls.container)} {...rest}>
			<Wrapper
				classNames={[
					stls.content,
					variant === 'alpha' && stls.alpha,
					variant === 'beta' && stls.beta,
					variant === 'gamma' && stls.gamma
				]}
			>
				<div className={stls.left}>
					<LeadLoaderThankyouAlt
						open={open}
						setOpen={setOpen}
						openLoader={openLoader}
						setOpenLoader={setOpenLoader}
						programId={program?.id}
						programTitle={program?.title}
					/>
					<div>
						<h2 className={stls.title}>{ctaTitle}</h2>
						{variant === 'gamma' && (
							<p className={stls.titleDesc}>
								{at.mba ||
									(at.mini &&
										'Есть вопросы или сложности с выбором программы?')}{' '}
								Оставьте заявку, мы свяжемся с вами, проконсультируем и ответим
								на все интересующие вас вопросы
							</p>
						)}
					</div>
					{variant === 'alpha' && (
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
					)}
					{variant === 'beta' && (
						<div className={stls.left__imageWrapper}>
							<Image
								className={stls.left__image}
								src={'/assets/images/program/cta-beta-arrow.svg'}
								alt='Иконка'
								width={221}
								height={221}
							/>
							<Image
								className={cn(stls.left__image, stls.left__imageRotate)}
								src={'/assets/images/program/cta-beta-arrow.svg'}
								alt='Иконка'
								width={221}
								height={221}
							/>
							<Image
								className={stls.left__3d}
								src={'/assets/images/program/cta-beta-3d.svg'}
								alt='Иконка'
								width={316}
								height={295}
							/>
						</div>
					)}
					{variant === 'gamma' && (
						<div className={stls.left__imageWrapper}>
							<Image
								className={stls.left__image}
								src={'/assets/images/program/cta-bg.png'}
								alt='Иконка'
								width={640}
								height={520}
							/>
						</div>
					)}
				</div>
				<div className={stls.right}>
					<FormBeta
						programTitle={program?.title}
						setOpenLoader={setOpenLoader}
						setOpen={setOpen}
						formName={`Заявка с формы 'Свяжитесь с нами'`}
						policyPrivacy
						variant={variant}
					/>
				</div>
			</Wrapper>
		</section>
	)
}
