import stls from '../../TeachersPage.module.sass'
import cn from 'classnames'

import base64pixel from '@/config/base64pixel'
import useAt from '@/hooks/useAt'
import Image from 'next/image'
import { IconMoreThan } from '@/components/icons'
import { TeacherCardProps } from './types'
import { MoreInfoIcon } from './widgets/MoreInfoIcon'
import { useTeachersSearch } from 'modules/teachers-page/fractals/context/context'

export const TeacherCard = ({ teacher }: TeacherCardProps) => {
	const at = useAt()
	const { state } = useTeachersSearch()
	const { atStandAlonePage } = state

	const TeachersDescription = ({ mobile = false }: { mobile?: boolean }) => {
		return (
			<div
				className={cn(
					stls.bio,
					mobile ? stls.phone : stls.tabletLaptopDesktopWidescreen,
					{
						[stls.atStandAlonePage]: atStandAlonePage
					}
				)}
			>
				<p
					className={cn(stls.bioP, {
						[stls.atStandAlonePage]: atStandAlonePage
					})}
				>
					<MoreInfoIcon atStandAlonePage />
				</p>
				<IconMoreThan classNames={[stls.icon]} />
			</div>
		)
	}

	return (
		<div className={stls.teachersItem}>
			<div className={stls.teachersItemWrapper}>
				<div className={stls.image}>
					{teacher?.portrait?.url && (
						<Image
							src={teacher?.portrait?.url}
							alt={teacher?.name}
							width={270}
							height={317}
							placeholder='blur'
							blurDataURL={base64pixel}
							style={{
								objectFit: 'cover'
							}}
						/>
					)}
				</div>
				<div className={stls.teachersItemContent}>
					<div>
						<div className={stls.name}>
							{at.en ? teacher?.slug?.split('-').join(' ') : teacher?.name}
						</div>
						<p className={stls.description}>{teacher?.description}</p>
					</div>
					<TeachersDescription mobile />
				</div>
			</div>
			<TeachersDescription />
		</div>
	)
}
