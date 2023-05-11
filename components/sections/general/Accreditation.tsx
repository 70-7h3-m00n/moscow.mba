import stls from '@/styles/components/sections/Accreditation.module.sass'
import Image from 'next/legacy/image'
import { base64pixel } from '@/config/index'
import { useAt } from '@/hooks/index'
import cn from 'classnames'
import { Wrapper } from '@/components/layout'
import { IconPaperCorner } from '@/components/icons'
import { ImgLogoEcicel, ImgLogoRabo, ImgLogoMde } from '@/components/images'
import { useContext } from 'react'
import { DigitalTransformationContext } from '@/context/index'

const Accreditation = () => {
	const at = useAt()

	const logos = [
		{ logo: <ImgLogoEcicel /> },
		{ logo: <ImgLogoRabo /> },
		{ logo: <ImgLogoMde /> }
	]

	return (
		<section
			className={cn(stls.container, { [stls.atExecutive]: at.executive })}>
			<Wrapper classNames={[stls.wrapper]}>
				<div className={stls.image}>
					<Image
						src='/assets/images/accreditation/accreditation.jpg'
						alt={at.en ? 'Accreditation' : 'Аккредитация'}
						width={648}
						height={899}
						placeholder='blur'
						blurDataURL={base64pixel}
						layout='responsive'
					/>
				</div>
				<div className={stls.content}>
					<h2 className={stls.title}>
						{at.en ? 'Accreditation and licenses' : 'Аккредитации и лицензии'}
					</h2>
					<div className={stls.titleDesc}>
						{at.en
							? 'Moscow Business Academy has all needed licenses and accreditation to graduate world-class MBA specialists'
							: 'Moscow Business Academy имеет все лицензии и аккредитации, позволяющие готовить специалистов международного уровня в сфере менеджмента и управления'}
					</div>
					<div className={stls.logosContainer}>
						{logos.map(({ logo }, idx) => (
							<div key={`AccreditationLogos-${idx}`} className={stls.logo}>
								{logo}
							</div>
						))}
					</div>
					<ul className={stls.list}>
						<li className={stls.listItem}>
							{at.en
								? 'Our programs have been tested by the European accreditation commission ECICEL and fully comply with the standards. The presence of this accreditation guarantees the high quality of education at the Moscow Business Academy'
								: 'Наши программы прошли строгую проверку европейской аккредитационной комиссии ECICEL и полностью соответствуют всем стандартам. Наличие данной аккредитации гарантирует высокое качество образования в Moscow Business Academy'}
						</li>
						<li className={stls.listItem}>
							{at.en ? (
								'Moscow Business Academy is also a member of Russian Association of Business Education and has a state license, which proves that our programs fully comply with the educational standards of Russian Federation'
							) : (
								<>
									<p>
										Moscow Business Academy является членом Российской
										Ассоциации Бизнес-образования (РАБО). В России членство РАБО
										имеют ограниченное количество организаций, которые
										соответствуют требованиям качества образовательных программ
									</p>
									<p>
										В настоящий момент за РАБО закрепился статус признанного
										лидера, инициатора и координатора программ подготовки кадров
										для предпринимательства и бизнеса
									</p>
								</>
							)}
						</li>
						{at.en ? null : (
							<li className={stls.listItem}>
								Также наша академия имеет государственную лицензию на
								образовательную деятельность №041221
							</li>
						)}
					</ul>
					<a
						href='https://islod.obrnadzor.gov.ru/rlic/details/2df11621-2d30-4173-9389-2fecc24a7639/'
						target='_blank'
						rel='noopener noreferrer'
						className={stls.link}>
						<div className={stls.iconContainer}>
							<IconPaperCorner />
						</div>
						<span>
							{at.en
								? 'License of the Ministry of Education'
								: 'Лицензия Министерства Образования'}
						</span>
					</a>
				</div>
			</Wrapper>
		</section>
	)
}

export default Accreditation
