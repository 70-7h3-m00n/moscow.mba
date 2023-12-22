import stls from './Footer.module.sass'
import cn from 'classnames'
import { FooterProps } from './types'

import { useAt } from '@/hooks/index'
import { FooterTop } from './widgets/FooterTop/FooterTop'
import { FooterBottom } from './widgets'

const Footer = ({ className, ...rest }: FooterProps) => {
	const at = useAt()

	return (
		<footer className={stls.container}>
			<div className={cn(className, stls.generalContainer)} {...rest}>
				<FooterTop />
				<FooterBottom />
			</div>
		</footer>
	)
}

export default Footer
