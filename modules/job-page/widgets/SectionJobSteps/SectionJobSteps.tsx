import stls from './SectionJobSteps.module.sass'
import cn from 'classnames'
import SectionJobStepsProps from './props'

import { Wrapper } from '@/components/layout'
import { HowProcessGoes } from '@/components/sections'
import { IconGeometricEllipse } from '@/components/icons'

export default function SectionJobSteps({
	data,
	className,
	...rest
}: SectionJobStepsProps) {
	return (
		<section className={cn(stls.container, className)} {...rest}>
			<Wrapper classNames={[stls.wrapper]}>
				<HowProcessGoes />
				<HowProcessGoes partners />
				<IconGeometricEllipse
					className={stls.ellipse}
					width={960}
					height={960}
				/>
			</Wrapper>
		</section>
	)
}
