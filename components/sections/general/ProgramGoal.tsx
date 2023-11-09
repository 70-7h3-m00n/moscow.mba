import stls from '@/styles/components/sections/ProgramGoal.module.sass'
import cn from 'classnames'
import { HTMLAttributes } from 'react'
import { TypeLibProgram } from '@/types/index'

import { Wrapper } from '@/components/layout'

const ProgramGoal = ({
	className,
	data
}: HTMLAttributes<HTMLElement> & { data: TypeLibProgram }) => {
	return (
		<section className={cn(className, stls.container)}>
			<Wrapper classNames={[stls.content]}>
				<h2>Цель программы</h2>
				<div className={stls.goals}>{data?.goal}</div>
			</Wrapper>
		</section>
	)
}

export default ProgramGoal
