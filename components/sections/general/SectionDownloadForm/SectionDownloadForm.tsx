import stls from './SectionDownloadForm.module.sass'
import cn from 'classnames'
import { SectionDownloadFormProps } from './types'

import { Wrapper } from '@/components/layout'
import useAt from '@/hooks/useAt'

export const SectionDownloadForm = ({
	downloadLinks,
	className,
	...rest
}: SectionDownloadFormProps) => {
	const at = useAt()

	return (
		<section className={cn(className, stls.container)} {...rest}>
			<Wrapper classNames={[stls.wrapper]}>
				<h2 className={stls.title}>
					{at.partner ? 'Готовы стать партнёром' : 'Поможем в выборе'}
				</h2>
				<p className={cn(stls.paragraph, { [stls.partner]: at.partner })}>
					{at.partner && 'Московской Бизнес Академии? '}
				</p>
				<div className={stls.linksWrapper}>
					{downloadLinks.map((jobLink, idx) => (
						<a key={idx} href={jobLink.src} target='_blank'>
							{jobLink.title}
						</a>
					))}
				</div>
			</Wrapper>
		</section>
	)
}
