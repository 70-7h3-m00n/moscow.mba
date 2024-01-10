import stls from './PopupTeacherNew.module.sass'
import cn from 'classnames'

import parse from 'html-react-parser'
import { marked } from 'marked'
import { IconCloseAlt } from '@/components/icons'
import Image from 'next/image'
import { PopupTeacherNewProps } from './types'

export const PopupTeacherNew = ({
	className,
	close,
	teacher
}: PopupTeacherNewProps) => {
	return (
		<div className={cn(className, stls.container)}>
			<button className={stls.close} onClick={close}>
				<IconCloseAlt fill='#000' />
			</button>
			<div className={stls.content}>
				<div className={cn(stls.left, stls.laptopDesktopWidescreen)}>
					<Image
						className={stls.left__image}
						src={teacher?.portrait?.url}
						width={92}
						height={120}
						style={{
							objectFit: 'cover'
						}}
						alt={teacher?.name}
					/>
				</div>
				<div className={stls.right}>
					<h2 className={stls.title}>{teacher?.name || 'Преподаватель'}</h2>
					<div className={stls.about}>
						{teacher?.descriptionItems?.length > 0 ? (
							<ul className={stls.list}>
								{teacher.descriptionItems
									.filter(item => item?.item)
									.map((item, idx) => (
										<li
											key={`${item || 'teacherListItem'}-${idx}`}
											className={stls.listItem}
										>
											{parse(marked(item?.item))}
										</li>
									))}
							</ul>
						) : (
							<p className={stls.p}>{teacher?.description}</p>
						)}
					</div>
				</div>
			</div>
		</div>
	)
}
