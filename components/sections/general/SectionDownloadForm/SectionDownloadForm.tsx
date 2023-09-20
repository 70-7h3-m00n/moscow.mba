import stls from './SectionDownloadForm.module.sass'
import cn from 'classnames'
import SectionDownloadFormProps from './SectionDownloadForm.props'

import { Wrapper } from '@/components/layout'
import Link from 'next/link'
import useAt from '@/hooks/useAt'

export default function SectionDownloadForm({
	mail,
	downloadLinks,
	className,
	...rest
}: SectionDownloadFormProps) {
	const at = useAt()

	return (
		<section className={cn(className, stls.container)} {...rest}>
			<Wrapper classNames={[stls.wrapper]}>
				<h2 className={stls.title}>
					{at.partner ? 'Готовы стать партнёром' : 'Поможем в выборе'}
				</h2>
				<p className={cn(stls.paragraph, at.partner && stls.partner)}>
					{at.partner && 'Московской Бизнес Академии? '}
					{'Заполните анкету и направьте нам на почту '}
					<Link
						href={`mailto:${mail.address}?body=${mail.body}&subject=${mail.subject}`}>
						{mail.address}
					</Link>
				</p>
				<div className={stls.linksWrapper}>
					{downloadLinks.map((jobLink, idx) => (
						<Link key={idx} href={jobLink.src}>
							{jobLink.title}
						</Link>
					))}
				</div>
			</Wrapper>
		</section>
	)
}
