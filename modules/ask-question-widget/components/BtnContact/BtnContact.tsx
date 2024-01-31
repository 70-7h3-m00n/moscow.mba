import stls from './BtnContact.module.sass'
import cn from 'classnames'
import { BtnContactProps } from './types'

import { CheckIcon } from './CheckIcon/CheckIcon'
import Image from 'next/image'

const BtnContact = ({
	className,
	way,
	url,
	handlerOnClick,
	...rest
}: BtnContactProps) => {
	return (
		<button
			className={cn(className, stls.container, stls.contactButtonClass)}
			onClick={handlerOnClick}
			{...rest}
		>
			<Image src={url} width={40} height={40} alt={way} />
			{way}
			<CheckIcon className={stls.checkIcon} />
		</button>
	)
}

export default BtnContact
