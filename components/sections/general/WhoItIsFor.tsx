import stls from '@/styles/components/sections/WhoItIsFor.module.sass'
import cn from 'classnames'
import { HTMLAttributes } from 'react'
import { TypeLibProgram } from '@/types/index'

import { useAt } from '@/hooks/index'
import { WhoItIsForItem, WhoItIsForItemProfession } from '@/components/general'
import { Wrapper } from '@/components/layout'

type WhoItIsForProps = HTMLAttributes<HTMLElement> & {
	program: any
	withBigNumbers?: boolean
}

const WhoItIsFor = ({
	className,
	program,
	withBigNumbers = true
}: WhoItIsForProps) => {
	const at = useAt()

	return (
		<section className={cn(className, stls.container)}>
			<Wrapper classNames={[stls.wrapper]}>
				<h2 className={stls.title}>
					{at.promo ? 'Форматы обучения' : 'Кому подойдет программа?'}
				</h2>
				<div
					className={cn(stls.itemsContainer, {
						[stls.noBottomLine]: at.promo
					})}
				>
					{program?.whoIsFor &&
						program?.whoIsFor.map(({ name, description }, idx) =>
							withBigNumbers ? (
								<WhoItIsForItem
									key={name + idx}
									name={name}
									description={description}
									moduleIndex={idx}
								/>
							) : (
								<WhoItIsForItemProfession
									key={name + idx}
									name={name}
									description={description}
								/>
							)
						)}
				</div>
			</Wrapper>
		</section>
	)
}

export default WhoItIsFor
