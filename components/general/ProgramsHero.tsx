import Image from 'next/image'
import stls from '@/styles/components/general/ProgramsHero.module.sass'
import heroProgramPictureMobile from '@/public/assets/images/heroProgramMobile.jpg'
import heroProgramPictureDesktop from '@/public/assets/images/heroProgram.jpg'
import { useEffect, useState } from 'react'
import useWindowWidth from '@/hooks/useWindowWidth'

const ProgramsHero = () => {
	const widthWindow = useWindowWidth()
	const [isMobile, setIsMobile] = useState(false)

	useEffect(() => {
		if (widthWindow <= 767) {
			setIsMobile(true)
		} else {
			setIsMobile(false)
		}
	}, [widthWindow])

	return (
		<section className={stls.heroProgram}>
			<Image
				src={isMobile ? heroProgramPictureMobile : heroProgramPictureDesktop}
				alt='Студент ставит лайк'
				fill
				placeholder='blur'
				style={{
					objectFit: 'cover'
				}}
			/>
			<div className={stls.heroProgramContainer}>
				<p className={stls.ourPrograms}>
					Наши программы — это бизнес-образование международного уровня, которое
					ежегодно получают тысячи предпринимателей, топ-менеджеров и
					узкопрофильных специалистов
				</p>
			</div>
		</section>
	)
}

export default ProgramsHero
