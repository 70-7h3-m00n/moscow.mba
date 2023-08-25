import stls from '@/styles/components/general/GeneralStickerDiscount.module.sass'
import { TypeClassNames } from '@/types/index'
import cn from 'classnames'
import { getClassNames } from '@/helpers/index'
import { Discount, Until } from '@/components/costs'

type TypeGeneralStickerDiscountProps = TypeClassNames & {
	percent?: string
}

const GeneralStickerDiscount = ({
	classNames,
	percent
}: TypeGeneralStickerDiscountProps) => {
	return (
		<div
			className={
				cn([stls.container], getClassNames({ classNames })) || undefined
			}>
			<div className={stls.discount}>{percent ?? <Discount />}</div>
			<div className={stls.until}>
				до <Until />
			</div>
		</div>
	)
}

export default GeneralStickerDiscount
