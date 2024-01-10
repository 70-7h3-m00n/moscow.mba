import stls from './Accreditation.module.sass'

import { InfoTooltip } from '@/components/popups/InfoTooltip/InfoTooltip'
import useAt from '@/hooks/useAt'
import Image from 'next/image'

export const AccreditationData = () => {
	const at = useAt()

	return [
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
			title:
				at.mba || at.mini ? (
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
				) : (
					<>
						<Image
							src='/assets/images/program/ECICEL.svg'
							width={110}
							height={41}
							alt='Фото клиента'
						/>
						<div className={stls.itemTitle}>
							<p className={stls.titleText}>ECICEL</p>
							<InfoTooltip color='#18191A' textColor='#fff'>
								<p className={stls.infoDescription}>
									{/* //TODO */}
									ЗАПОЛНИТЬ ТЕКСТ
								</p>
							</InfoTooltip>
						</div>
					</>
				),
			desc: 'Заполнить текст'
		}
	]
}
