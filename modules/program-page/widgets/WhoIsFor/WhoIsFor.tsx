import stls from './WhoIsFor.module.sass'
import cn from 'classnames'
import { WhoIsForProps } from './types'

import { Wrapper } from '@/components/layout'
import { CornerPhoto } from '../components/CornerPhoto/CornerPhoto'
import useAt from '@/hooks/useAt'

export const WhoIsForNew = ({ className, program, ...rest }: WhoIsForProps) => {
	const at = useAt()

	const whoIsForDefault = [
		{
			name: 'Специалистам',
			description: '',
			photo: at.profession
				? '/assets/images/program/who-is-for-photo-1.png'
				: '/assets/images/program/who-is-for-photo-2.png'
		},
		{
			name: 'Владельцам малого бизнеса и ИП',
			description: '',
			photo: '/assets/images/program/who-is-for-photo.png'
		}
	]

	return (
		<section className={cn(className, stls.container)} {...rest}>
			<Wrapper classNames={[stls.content]}>
				<h2 className={stls.title}>Кому подойдет программа</h2>

				{whoIsForDefault.map(({ name, description, photo }, idx) => {
					return (
						<div className={stls.item} key={idx}>
							<p className={stls.item__title}>
								{program?.whoIsFor?.length > 0
									? program?.whoIsFor[idx]?.name
									: name}
							</p>
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
