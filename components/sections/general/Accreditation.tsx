import stls from '@/styles/components/sections/Accreditation.module.sass'
import Image from 'next/image'
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

	{
		/* TODO: Test, TemporarySolution: Текстовый шаблон страницы курсов MINI MBA */
	}
	const isDigitalTransformation = useContext(DigitalTransformationContext)

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
					{/* TODO: Test, TemporarySolution: Текстовый шаблон страницы курсов MINI MBA */}
					{isDigitalTransformation ? (
						<ul className={stls.list}>
							<li className={stls.listItem}>
								{at.en
									? 'We have passed the strict inspection of the ECICEL European Accreditation Commission and fully comply with all quality standards established in the field of educational services. The presence of this accreditation guarantees the high quality of education at the Moscow Business Academy'
									: 'Мы прошли строгую проверку европейской аккредитационной комиссии ECICEL и полностью соответствуем всем стандартам качества, установленным в сфере образовательных услуг. Наличие данной аккредитации гарантирует высокое качество образования в Moscow Business Academy'}
							</li>
							<li className={stls.listItem}>
								{at.en
									? 'Moscow Business Academy is a member of the Russian Association of Business Education (RABO). In Russia, a limited number of organizations that meet the quality requirements for the implementation of educational activities have RABO membership'
									: 'Moscow Business Academy является членом Российской Ассоциации Бизнес-образования (РАБО). В России членство РАБО имеют ограниченное количество организаций, которые соответствуют требованиям качества, предъявляемым к осуществлению образовательной деятельности'}
							</li>
							{at.en ? null : (
								<p>
									В настоящий момент за РАБО закрепился статус признанного
									лидера, инициатора и координатора профессиональной подготовки
									кадров для предпринимательства и бизнеса
								</p>
							)}

							{at.en ? null : (
								<li className={stls.listItem}>
									Также наша академия имеет государственную лицензию на
									образовательную деятельность №041221
								</li>
							)}
						</ul>
					) : (
						<ul className={stls.list}>
							<li className={stls.listItem}>
								{at.en
									? 'Our programs have been tested by the European accreditation commission ECICEL and fully comply with the standards. The presence of this accreditation guarantees the high quality of education at the Moscow Business Academy'
									: 'Наши программы прошли строгую проверку европейской аккредитационной комиссии ECICEL и полностью соответствуют всем стандартам. Наличие данной аккредитации гарантирует высокое качество образования в Moscow Business Academy'}
							</li>
							<li className={stls.listItem}>
								{at.en
									? 'Moscow Business Academy is also a member of Russian Association of Business Education and has a state license, which proves that our programs fully comply with the educational standards of Russian Federation'
									: 'Moscow Business Academy является членом Российской Ассоциации Бизнес-образования (РАБО). В России членство РАБО имеют ограниченное количество организаций, которые соответствуют требованиям качества образовательных программ'}
							</li>
							{at.en ? null : (
								<p>
									В настоящий момент за РАБО закрепился статус признанного
									лидера, инициатора и координатора программ подготовки кадров
									для предпринимательства и бизнеса
								</p>
							)}

							{at.en ? null : (
								<li className={stls.listItem}>
									Также наша академия имеет государственную лицензию на
									образовательную деятельность №041221
								</li>
							)}
						</ul>
					)}
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
