import stls from './WhoIsFor.module.sass'
import cn from 'classnames'
import { WhoIsForProps } from './types'

import { Wrapper } from '@/components/layout'
import { whoIsForDefault } from './constants'
import { CornerPhoto } from '../components/CornerPhoto/CornerPhoto'

export const WhoIsForNew = ({ className, program, ...rest }: WhoIsForProps) => {
	return (
		<section className={cn(className, stls.container)} {...rest}>
			<Wrapper classNames={[stls.content]}>
				<h2 className={stls.title}>Кому подойдет программа</h2>

				{whoIsForDefault.map(({ name, description, photo }, idx) => {
					return (
						<div className={stls.item} key={idx}>
							<h3 className={stls.item__title}>
								{program?.whoIsFor?.length > 0
									? program?.whoIsFor[idx]?.name
									: name}
							</h3>
							<p className={stls.item__desc}>
								{program?.whoIsFor?.[idx]?.description || description}
							</p>
							<CornerPhoto
								className={stls.cornerPhoto}
								src={photo}
								size='l'
								variant='top-right'
							/>
						</div>
					)
				})}
			</Wrapper>
		</section>
	)
}
