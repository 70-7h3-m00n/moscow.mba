import stls from './EmploymentPartners.module.sass'
import cn from 'classnames'
import { EmploymentPartnersProps } from './types'

import { Wrapper } from '@/components/layout'
import { partners } from './constants'
import Image from 'next/image'

export const EmploymentPartners = ({ className }: EmploymentPartnersProps) => {
	return (
		<section className={cn(className, stls.container)}>
			<Wrapper classNames={[stls.content]}>
				<div className={stls.left}>
					<h2 className={stls.title}>
						В эти компании мы трудоустроили своих студентов
					</h2>
					<ul className={stls.list}>
						{partners.map((partner, idx) => (
							<li className={stls.item} key={idx}>
								{partner.logo}
							</li>
						))}
					</ul>
				</div>
				<div className={stls.slider}>
					<Image
						src='/assets/images/program/employment-partners.jpg'
						width={660}
						height={360}
						alt='Фото клиента'
					/>
				</div>
			</Wrapper>
		</section>
	)
}
