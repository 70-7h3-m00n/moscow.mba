import stls from './ClientList.module.sass'
import { Wrapper } from '@/components/layout'
import * as photos from './images'
import { createImgsArr } from '../../../utils'
import { ImgTemplate } from '@/components/images'
import { IconArrowLeft } from '@/components/icons'
import Link from 'next/link'

const ClientList = () => {
	const photosArr = createImgsArr(photos)
	return (
		<section className={stls.sectionContainer}>
			<Wrapper classNames={[stls.container]}>
				<div className={stls.listWrapp}>
					{photosArr.map(({ alt, src }) => (
						<div key={alt} className={stls.cardsWrapp}>
							<ImgTemplate
								quality={100}
								alt={alt}
								src={src}
								layout='fixed'
								classNames={[stls.photos]}
							/>
							<Link href='#'>
								<span className={stls.linksContent}>
									Смотреть отзыв
									<IconArrowLeft
										classNames={[stls.arrowsRight]}
										color='#FF3535'
									/>
								</span>
							</Link>
						</div>
					))}
				</div>
			</Wrapper>
		</section>
	)
}

export default ClientList
