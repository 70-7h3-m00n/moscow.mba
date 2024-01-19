import stls from './WhoIsFor.module.sass'
import cn from 'classnames'
import { WhoIsForProps } from './types'

import { useContext } from 'react'
import { Wrapper } from '@/components/layout'
import Image from 'next/image'
import { ProgramPageContext } from 'modules/program-page/fractals/context/context'
import { whoIsForDefault } from './constants'

export const WhoIsForNew = ({ className, ...rest }: WhoIsForProps) => {
	const { state } = useContext(ProgramPageContext)
	const { program } = state

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
							<div className={stls.cornerPhoto}>
								<Image src={photo} width={82} height={82} alt='Фото клиента' />
							</div>
						</div>
					)
				})}
			</Wrapper>
		</section>
	)
}
