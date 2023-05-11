import stls from '@/styles/components/sections/WhatWillYouLearn.module.sass'
import cn from 'classnames'
import Image from 'next/legacy/image'
import { base64pixel } from '@/config/index'
import { Wrapper } from '@/components/layout'

// TODO:: align picture to the bottom of section on vertical layout (phone, tablet, laptop)
const WhatWillYouLearn = ({ data = null }) => {
	const aboutAcademy = [
		'Одна из немногих школ России, которая имеет европейскую аккредитацию Ecicel',
		'Членство в Российской Ассоциации Бизнес-образования (РАБО)',
		'11 лет на рынке образования',
		'0% рассрочка без переплат',
		'6 филиалов за рубежом',
		'2000+ выпускников',
		'Программы, соответствующие международным требованиям',
		'Спикеры - практикующие специалисты, имеющие международный опыт преподавания',
		'Корпоративные клиенты'
	]

	const list = data ? data.whatWillYouLearn : aboutAcademy

	return (
		<section className={stls.container}>
			<Wrapper classNames={[stls.wrapper]}>
				<div className={stls.content}>
					<div
						className={cn(stls.floatLeft, {
							[stls.smallPl]: !data
						})}>
						<h2 className={stls.title}>
							{data ? (
								<>
									Чему <br />
									Вы научитесь?
								</>
							) : (
								<>
									Moscow Business <br /> Academy это:
								</>
							)}
						</h2>
						<div className={stls.image}>
							<Image
								src='/assets/images/learning_pic_1.jpg'
								width='651'
								height='389'
								alt='Слушатели во время конференции'
								placeholder='blur'
								blurDataURL={base64pixel}
							/>
						</div>
					</div>
					<div className={stls.floatRight}>
						<ul className={stls.list}>
							{list &&
								list.map((item, idx) => {
									return (
										<li
											key={(item.string || item.toString()) + idx}
											className={stls.item}>
											{item.string || item.toString()}
										</li>
									)
								})}
						</ul>
					</div>
				</div>
			</Wrapper>
		</section>
	)
}
// 651 x 389

export default WhatWillYouLearn
