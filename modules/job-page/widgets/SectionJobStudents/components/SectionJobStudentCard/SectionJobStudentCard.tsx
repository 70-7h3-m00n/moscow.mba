import stls from './SectionJobStudentCard.module.sass'
import cn from 'classnames'
import SectionJobStudentCardProps from './SectionJobStudentCard.props'

import Image from 'next/image'

export default function SectionJobStudentCard({
	student,
	className,
	...rest
}: SectionJobStudentCardProps) {
	return (
		<li className={cn(className, stls.item)} {...rest}>
			<Image
				className={stls.image}
				src={student.src}
				alt={student.name}
				width={173}
				height={173}
			/>
			<p className={stls.name}>{student.name}</p>
			{student.steps.map((step, idx) => (
				<p className={stls.paragraph} key={idx}>
					<span className={stls.bold}>
						{'Точка '}
						<span className={stls.red}>{idx === 0 ? 'A' : 'B'}</span>
						{': '}
					</span>
					<span className={stls.desc}>{step}</span>
				</p>
			))}
		</li>
	)
}
