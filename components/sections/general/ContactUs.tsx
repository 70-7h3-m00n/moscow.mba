import stls from '@/styles/components/sections/ContactUs.module.sass'
import cn from 'classnames'

import { ReactNode, useState } from 'react'
import { useAt } from '@/hooks/index'
import { LeadLoaderThankyou } from '@/components/general'
import { FormAlpha } from '@/components/forms'
import { Wrapper } from '@/components/layout'

type TContactUsProps = {
	programTitle?: string | ReactNode
	programId?: string
	title?: string | ReactNode
	titleNewStr?: string | ReactNode
	desc?: string | ReactNode
	overlapsFooter?: boolean
	titleMaxWidth?: 'half'
}

const ContactUs = ({
	programTitle = null,
	programId = null,
	title = null,
	titleNewStr = null,
	desc = null,
	overlapsFooter = false,
	titleMaxWidth
}: TContactUsProps) => {
	const at = useAt()

	if (!title) title = at.en ? 'Contact us to get help' : 'Поможем в выборе'
	if (!desc)
		desc = at.en
			? 'Leave your request for a consultation on the MBA programs, their fees, available discounts and admission requirements'
			: 'Оставьте заявку и получите консультацию по программам MBA, узнайте их точную стоимость, возможные варианты скидок и требования к поступлению'

	const [open, setOpen] = useState(false)
	const [openLoader, setOpenLoader] = useState(false)

	return (
		<section
			className={cn(stls.container, {
				[stls.overlapsFooter]: overlapsFooter
			})}
		>
			<Wrapper
				classNames={[
					cn(stls.wrapper, { [stls.overlapsFooter]: overlapsFooter })
				]}
			>
				<LeadLoaderThankyou
					open={open}
					setOpen={setOpen}
					openLoader={openLoader}
					setOpenLoader={setOpenLoader}
					programId={programId}
					programTitle={programTitle}
				/>
				<h2
					className={cn(stls.title, {
						[stls.titleMaxWidthHalf]: titleMaxWidth === 'half'
					})}
				>
					{title}
					{titleNewStr && (
						<>
							<br /> {titleNewStr}
						</>
					)}
				</h2>

				{at.mini ? (
					<div className={stls.desc}>
						{at.en
							? 'Leave a request for a consultation and find out the exact cost of training, possible discount options and admission requirements'
							: 'Оставьте заявку на консультацию и узнайте точную стоимость обучения, возможные варианты скидок и требования к поступлению'}
					</div>
				) : (
					<div className={stls.desc}>
						{at.course || at.profession
							? at.en
								? 'Leave your request for a consultation on the MBA programs, their fees, available discounts and admission requirements'
								: 'Оставьте заявку и получите консультацию по программам, узнайте их точную стоимость, возможные варианты скидок и требования к поступлению'
							: desc}
					</div>
				)}

				<FormAlpha
					programTitle={programTitle}
					setOpenLoader={setOpenLoader}
					setOpen={setOpen}
					formName={`Заявка с формы "${title || 'Свяжитесь с нами'}"`}
				/>
			</Wrapper>
		</section>
	)
}

export default ContactUs
