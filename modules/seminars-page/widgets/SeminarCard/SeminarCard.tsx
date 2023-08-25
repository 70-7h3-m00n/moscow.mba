import stls from './SeminarCard.module.sass'
import cn from 'classnames'
import Image from 'next/image'
import PopupForm from '@/components/popups/PopupForm'
import Popup from 'reactjs-popup'
import { IconBell } from '@/components/icons'
import routesFront from '@/config/routesFront'

const SeminarCard = ({
	title,
	portrait,
	speaker,
	month,
	date,
	hours,
	minutes,
	dur,
	disabled,
	slug
}) => {
	return (
		<>
			<a
				href={`${routesFront.root}/${routesFront.seminars}/${slug}`}
				className={cn(stls.container, {
					[stls.disabled]: disabled
				})}
				data-effect='mfp-zoom-in'>
				<div className={stls.bell}>
					<IconBell />
				</div>
				<div className={stls.date}>
					<strong>
						{date} {month},
					</strong>{' '}
					{hours}:{minutes}
				</div>
				<div className={stls.title}>{title}</div>
				<div className={stls.info}>
					<div className={stls.author}>
						<div className={stls.avatar}>
							<Image
								src={portrait}
								alt={speaker}
								width={50}
								height={50}
								style={{ objectFit: 'cover' }}
							/>
						</div>
						<div>
							Спикер: <span className={stls.name}>{speaker}</span>
						</div>
					</div>
					<div className={stls.duration}>{dur}</div>
				</div>
			</a>
		</>
	)
}

export default SeminarCard
