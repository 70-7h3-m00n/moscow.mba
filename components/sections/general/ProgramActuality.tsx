import stls from '@/styles/components/sections/ProgramActuality.module.sass'
import { Wrapper } from '@/components/layout'
import Image from 'next/image'
import src from '@/public/assets/images/Group.png'
import { ImgDonut, ImgPlanet } from '@/components/images'

const ProgramActuality = ({ data }) => {
	return (
		<section className={stls.container}>
			<Wrapper classNames={[stls.content]}>
				<div className={stls.contentBox}>
					<h2 className={stls.title}>Актуальность</h2>
					<div className={stls.actualText}>
						{data?.actualInformation?.paragraph
							? data?.actualInformation?.paragraph
							: 'Цифровая трансформация — основной вектор деятельности коммерческих организаций в век информационных технологий и повсеместного внедрения систем искусственного интеллекта. Компаниям приходится адаптироваться к постоянным изменениям на рынке, анализировать цифровые тренды, трансформировать бизнес-процессы для сохранения устойчивых конкурентных позиций.'}
					</div>
					<div className={stls.bottomBox}>
						<p className={stls.actualDescription}>
							{data?.actualInformation?.description
								? data?.actualInformation?.description
								: 'После прохождения переподготовки в области цифровых трансформаций, студенты получают диплом по востребованной специальности и перспективы карьерного роста. Наши выпускники становятся кандидатами на должность CDTO (директора по цифровизации) в ведущих организациях.'}
						</p>
						<Image src={src} width={191} height={155} alt='Группа студентов' />
					</div>
					<div className={stls.planetLeft}>
						<ImgPlanet width='341' height='341' />
					</div>
					<div className={stls.planetRight}>
						<ImgPlanet width='157' height='157' color='#D9D9D9' />
					</div>
					<div className={stls.donut}>
						<ImgDonut width='515' height='320' />
					</div>
				</div>
			</Wrapper>
		</section>
	)
}

export default ProgramActuality
