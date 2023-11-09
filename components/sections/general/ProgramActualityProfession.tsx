import stls from '@/styles/components/sections/ProgramActualityProfession.module.sass'
import cn from 'classnames'
import { HTMLAttributes } from 'react'

import { Wrapper } from '@/components/layout'
import Image from 'next/image'
import { TypeLibProgram } from '@/types/index'
import base64pixel from '@/config/base64pixel'

const ProgramActuality = ({
	className,
	program
}: HTMLAttributes<HTMLElement> & { program: TypeLibProgram }) => {
	const { paragraph, description, firstPhoto, secondPhoto } =
		program?.actualInformation

	return (
		<section className={cn(className, stls.container)}>
			<Wrapper classNames={[stls.content]}>
				<div className={stls.actualTextBlock}>
					<h2 className={stls.title}>Актуальность</h2>
					<p className={stls.actualText}>{paragraph}</p>
				</div>
				<div className={stls.twoImages}>
					<div className={cn(stls.image, stls.pic1)}>
						<Image
							priority
							src={firstPhoto || '/assets/images/executive_pic_1.jpg'}
							alt={'Спикер на сцене даёт речь'}
							width={425}
							height={425}
							placeholder='blur'
							blurDataURL={base64pixel}
							style={{
								objectFit: 'cover'
							}}
						/>
					</div>
					<div className={cn(stls.image, stls.pic2)}>
						<Image
							src={secondPhoto || '/assets/images/executive_pic_2.jpg'}
							alt='Спикер на сцене даёт речь'
							width={236}
							height={236}
							placeholder='blur'
							blurDataURL={base64pixel}
							style={{
								objectFit: 'cover'
							}}
						/>
					</div>
				</div>
				<div className={stls.descriptionBox}>
					<p className={stls.actualDescription}>{description}</p>
				</div>
			</Wrapper>
		</section>
	)
}

export default ProgramActuality
