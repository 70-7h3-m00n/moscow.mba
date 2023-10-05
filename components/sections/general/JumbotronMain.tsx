import stls from '@/styles/components/sections/JumbotronMain.module.sass'
import Link from 'next/link'
import Image from 'next/legacy/image'
import { colors, base64pixel } from '@/config/index'
import { useAt } from '@/hooks/index'
import { Breadcrumbs } from '@/components/general'
import { IconArrowTopRight } from '@/components/icons'

const JumbotronMain = () => {
	const at = useAt()
	return (
		<section className={stls.container}>
			<div className={stls.image}>
				{/* should replace following alt with english supported version */}
				<Image
					src='/assets/images/jumbotron_1.jpg'
					layout='fill'
					alt={'Студенты обучаются'}
					priority
				/>
			</div>
			<div className={stls.generalContainer}>
				<div className={stls.content}>
					<Breadcrumbs />
					<div className={stls.flexContainer}>
						<div className={stls.descContainer}>
							<div className={stls.imageContainer}>
								<Image
									src='/assets/images/mba_text.png'
									alt='Moscow Business Academy'
									width={482}
									height={146}
									placeholder='blur'
									blurDataURL={base64pixel}
								/>
							</div>
							<h1>Moscow Business Academy</h1>
							<div className={stls.desc}>
								{at.en
									? "International Business Education. We've everything to help you reach your full potential!"
									: 'Международное бизнес-образование. У нас есть всё для раскрытия Вашего потенциала!'}
							</div>
						</div>
					</div>
					<Link
						legacyBehavior
						href='/programs/mini/online'
						{...(at.en ? { locale: 'ru' } : undefined)}>
						<a className={stls.square}>
							<p>{at.en ? 'Choose program' : 'Подобрать направление'}</p>
							<div className={stls.IconArrowTopRightContainer}>
								<IconArrowTopRight
									classNames={[stls.IconArrowTopRight]}
									color={colors.psi}
								/>
							</div>
						</a>
					</Link>
				</div>
			</div>
		</section>
	)
}

export default JumbotronMain
