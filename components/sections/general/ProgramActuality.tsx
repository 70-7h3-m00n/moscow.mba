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
						{data?.actualInformation?.paragraph}
					</div>
					<div className={stls.bottomBox}>
						<p className={stls.actualDescription}>
							{data?.actualInformation?.description}
						</p>
						<Image src={src} width={191} height={155} alt='Группа студентов' />
					</div>
					<div className={stls.planetLeft}>
						<ImgPlanet idx='282_31' width='341' height='341' />
					</div>
					<div className={stls.planetRight}>
						<ImgPlanet idx='282_32' width='157' height='157' color='#D9D9D9' />
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
