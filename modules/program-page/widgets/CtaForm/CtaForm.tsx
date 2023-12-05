import stls from './CtaForm.module.sass'
import cn from 'classnames'
import { CtaFormProps } from './types'

import { Wrapper } from '@/components/layout'
import Image from 'next/image'
import { IconGitBranch } from '../components/icons/IconGitBranch/IconGitBranch'
import { IconBox } from '../components/icons/IconBox/IconBox'
import { IconArrow } from '../components/icons/IconArrow/IconArrow'
import { GridIcons } from '../components/GridIcons/GridIcons'

export const CtaForm = ({ className }: CtaFormProps) => {
	return (
		<section className={cn(className, stls.container)}>
			<Wrapper classNames={[stls.content]}>
				<div className={stls.left}>
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
					<form action=''></form>
				</div>
			</Wrapper>
		</section>
	)
}
