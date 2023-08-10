import stls from '@/styles/components/sections/Students.module.sass'
import Image from 'next/legacy/image'
import cn from 'classnames'
import { CircularProgressbarWithChildren } from 'react-circular-progressbar'
import { useAt } from '@/hooks/index'
import { Wrapper } from '@/components/layout'

const Students = () => {
	const at = useAt()

	return (
		<section className={stls.container}>
			<Wrapper classNames={[stls.wrapper]}>
				<div className={stls.title}>Более 2000</div>
				<div className={stls.content}>
					<div className={stls.detail}>
						<h2>Наши студенты</h2>
						<div className={stls.desc}>
							Вы станете частью эффективного нетворкинга{' '}
							{!at.profession && !at.course && 'по всему миру'}
						</div>
						<p className={stls.stats}>Согласно опросу 2000 наших студентов:</p>
						<ul className={stls.list}>
							<li className={stls.item}>
								<CircularProgressbarWithChildren
									value={96}
									className={stls.circle}>
									<p className={stls.text}>96%</p>
								</CircularProgressbarWithChildren>
								<p className={stls.results}>остались довольны обучением</p>
							</li>
							<li className={stls.item}>
								<CircularProgressbarWithChildren
									className={stls.circle}
									value={92}>
									<p className={stls.text}>92%</p>
								</CircularProgressbarWithChildren>
								<p className={stls.results}>
									{at.profession || at.course
										? 'применили полученные знания в работе'
										: 'повысили показатели своих проектов'}
								</p>
							</li>
							<li className={stls.item}>
								<CircularProgressbarWithChildren
									className={stls.circle}
									value={72}>
									<p className={stls.text}>72%</p>
								</CircularProgressbarWithChildren>
								<p className={stls.results}>
									продвинулись по карьерной лестнице
								</p>
							</li>
						</ul>
					</div>
					<div className={stls.imagesContainer}>
						<div className={cn(stls.image, stls.imageOne)}>
							<Image
								src='/assets/images/students_pic_1.png'
								alt='Группа счастливых выпускников'
								width={481}
								height={473}
							/>
						</div>
						<div className={cn(stls.image, stls.imageTwo)}>
							<Image
								src='/assets/images/students_pic_2.jpg'
								alt='Счастливый выпускник'
								width={199}
								height={199}
							/>
						</div>
					</div>
				</div>
			</Wrapper>
		</section>
	)
}

export default Students
