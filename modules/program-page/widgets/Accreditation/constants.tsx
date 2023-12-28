import stls from './Accreditation.module.sass'
import { InfoTooltip } from '@/components/popups/InfoTooltip/InfoTooltip'
import Image from 'next/image'

export const accreditationData = [
	{
		title: (
			<div className={stls.titleWrapper}>
				<p>ТОП-3</p>
			</div>
		),
		desc: 'Входим в ТОП-3 бизнес-школ РФ по актуальности контента'
	},
	{
		title: (
			<>
				<Image
					src='/assets/images/program/RABO.svg'
					width={40}
					height={40}
					alt='Фото клиента'
				/>
				<div className={stls.itemTitle}>
					<p className={stls.titleText}>РАБО</p>
					<InfoTooltip color='#18191A' textColor='#fff'>
						<p className={stls.infoDescription}>
							Мы являемся действующим членом РАБО, «Российской Ассоциации
							Бизнес-образования», которая имеет статус инноватора и лидера по
							координированию образовательных программ MBA в сфере
							предпринимательства и бизнеса
						</p>
					</InfoTooltip>
				</div>
			</>
		),
		desc: 'Российская ассоциация бизнес образования'
	},
	{
		title: (
			<>
				<Image
					src='/assets/images/program/NASDOBR.svg'
					width={40}
					height={40}
					alt='Фото клиента'
				/>
				<div className={stls.itemTitle}>
					<p className={stls.titleText}>НАСДОБР</p>
					<InfoTooltip color='#18191A' textColor='#fff'>
						<p className={stls.infoDescription}>
							{/* //TODO */}
							ЗАПОЛНИТЬ ТЕКСТ
						</p>
					</InfoTooltip>
				</div>
			</>
		),
		desc: 'Национального аккредитационного совета делового образования'
	}
]
