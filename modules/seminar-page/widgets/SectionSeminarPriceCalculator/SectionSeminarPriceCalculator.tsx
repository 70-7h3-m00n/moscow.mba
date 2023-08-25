import stls from './SectionSeminarPriceCalculator.module.sass'
import React, { useState } from 'react'
import { Wrapper } from '@/components/layout'
import {
	GeneralStickerDiscount,
	LeadLoaderThankyou
} from '@/components/general'
import { FormAlpha } from '@/components/forms'
import { formatDate } from '@/helpers/index'
import { NextPage } from 'next'
import { TypeLibSeminar } from '@/types/index'
import useAt from '@/hooks/useAt'
import PriceDiscount from '@/components/costs/PriceDiscount'

const SectionSeminarPriceCalculator: NextPage<{ seminar: TypeLibSeminar }> = ({
	seminar
}) => {
	const at = useAt()
	const [open, setOpen] = useState(false)
	const [openLoader, setOpenLoader] = useState(false)

	const { date, time } = formatDate(seminar?.date)

	const prices = PriceDiscount(seminar?.price, 30)

	return (
		<section className={stls.container}>
			<Wrapper classNames={[stls.wrapper]}>
				<h3 className={stls.title}>Зарегистрироваться на семинар</h3>
				<p className={stls.seminarDate}>
					{date}, <span>{time}</span>
				</p>
				<div className={stls.seminarPriceWrapper}>
					{Object.entries(prices).map((price, idx) => (
						<React.Fragment key={idx}>
							<p className={stls.seminarPriceTitle}>
								{price[0] === 'totalPrice'
									? 'Стоимость семинара'
									: 'Оплата по месяцам без переплаты'}
							</p>
							<div className={stls.currentPriceWrapper}>
								<p className={stls.new}>{price[1].new}</p>
								<p className={stls.old}>{price[1].old} </p>
							</div>
						</React.Fragment>
					))}
				</div>

				<LeadLoaderThankyou
					open={open}
					setOpen={setOpen}
					openLoader={openLoader}
					setOpenLoader={setOpenLoader}
				/>
				<FormAlpha
					classNames={[stls.form]}
					programTitle={'programTitle'}
					setOpenLoader={setOpenLoader}
					setOpen={setOpen}
					formName={`Заявка с формы "Семинар"`}
					policyPrivacy={false}
					alpha
				/>
				<GeneralStickerDiscount
					percent='-30%'
					classNames={[stls.stickerDiscount]}
				/>
			</Wrapper>
		</section>
	)
}

export default SectionSeminarPriceCalculator
