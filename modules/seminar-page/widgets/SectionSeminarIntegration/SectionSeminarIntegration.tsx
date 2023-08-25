import { Wrapper } from '@/components/layout'
import stls from './SectionSeminarIntegration.module.sass'
import { BtnAlpha } from '@/components/btns'
import logoAzimut from '@/public/assets/images/logo azimut.png'
import Image from 'next/image'
import Link from 'next/link'

const SectionSeminarIntegration = () => {
	return (
		<section className={stls.container}>
			<Wrapper classNames={[stls.wrapper]}>
				<Image
					className={stls.logo}
					src={logoAzimut}
					width={128}
					height={38}
					alt={'logo azimut'}
				/>
				<h3 className={stls.title}>
					До -20% по промокоду МБА в отелях AZIMUT Дербневская, AZIMUT Тульская
				</h3>
				<p className={stls.description}>
					Для слушаетелей семинаров Московской Бизнес Академии специальные
					условия на размещение в отелях сети по промокоду.{' '}
				</p>
				<Link className={stls.btn} href='https://azimuthotels.com/ru'>
					Перейти на сайт партнёра
				</Link>
			</Wrapper>
		</section>
	)
}

export default SectionSeminarIntegration
