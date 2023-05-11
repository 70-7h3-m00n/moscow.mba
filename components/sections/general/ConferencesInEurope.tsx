import stls from '@/styles/components/sections/ConferencesInEurope.module.sass'
import Image from 'next/legacy/image'
import { useAt } from '@/hooks/index'
import { base64pixel } from '@/config/index'
import { Wrapper } from '@/components/layout'

const ConferencesInEurope = () => {
	const at = useAt()
	return (
		<section className={stls.container}>
			<div className={stls.circle} />
			<Wrapper classNames={[stls.wrapper]}>
				<div className={stls.flexContainer}>
					<div className={stls.descContainer}>
						<h2 className={stls.title}>
							{at.en ? (
								'Conferences'
							) : (
								<>
									Организация <br className={stls.laptopDesktopWindescreen} />{' '}
									конференций
								</>
							)}{' '}
							<span className={stls.red}>
								{at.en && <>in&nbsp;Europe</>}
								{at.ru && <>в&nbsp;Европе</>}
							</span>
						</h2>
						<p className={stls.titleDesc}>
							{at.en
								? 'We meet to discuss the most relevant topics several times a year'
								: 'Несколько раз в год мы проводим конференции на актуальные темы'}
						</p>
						<div className={stls.image}>
							<Image
								src={'/assets/images/organization_1.jpg'}
								alt={
									at.en
										? 'Students during a conference'
										: 'Слушатели на конференции'
								}
								width={623}
								height={364}
								layout='responsive'
								placeholder='blur'
								blurDataURL={base64pixel}
							/>
						</div>
					</div>
					<div className={stls.imageContainer}>
						<div className={stls.image}>
							<Image
								src={'/assets/images/organization_2.jpg'}
								alt={at.en ? 'Meet up' : 'Митап обучающихся'}
								width={415}
								height={690}
								layout='responsive'
								placeholder='blur'
								blurDataURL={base64pixel}
							/>
						</div>
					</div>
				</div>
			</Wrapper>
		</section>
	)
}

export default ConferencesInEurope
