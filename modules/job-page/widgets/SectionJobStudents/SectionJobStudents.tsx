import stls from './SectionJobStudents.module.sass'
import cn from 'classnames'
import SectionJobStudentsProps from './props'

import { Wrapper } from '@/components/layout'
import SectionJobStudentCard from './components/SectionJobStudentCard/SectionJobStudentCard'
import { IconGeometricEllipse } from '@/components/icons'

export default function SectionJobStudents({
	students
}: SectionJobStudentsProps) {
	return (
		<section className={stls.container}>
			<Wrapper classNames={[stls.wrapper]}>
				<h2 className={stls.title}>Наши выпускники</h2>
				<ul className={stls.cardsList}>
					{students.map(student => (
						<SectionJobStudentCard key={student.name} student={student} />
					))}
				</ul>
				<IconGeometricEllipse
					className={cn(stls.ellipse, stls.left)}
					width={350}
					height={350}
				/>
				<IconGeometricEllipse
					className={cn(stls.ellipse, stls.right)}
					width={600}
					height={600}
				/>
			</Wrapper>
		</section>
	)
}
