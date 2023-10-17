import stls from '../../TeachersPage.module.sass'
import cn from 'classnames'

import useAt from '@/hooks/useAt'
import { useContext } from 'react'
import { DigitalTransformationContext } from '@/context/index'
import Image from 'next/image'
import base64pixel from '@/config/base64pixel'
import { IconCheck } from '@/components/icons'
import { TeachersHeroProps } from './types'

export const TeachersHero = ({}: TeachersHeroProps) => {
	const at = useAt()
	const isDigitalTransformation = useContext(DigitalTransformationContext)

	return (
		<div className={stls.sectionPl}>
			<div className={stls.titlePl}>{at.en ? 'experts' : 'эксперты'}</div>
			<div className={stls.content}>
				<h2
					className={cn({
						[stls.titleProfession]: at.profession || at.course
					})}
				>
					{at.profession || at.course ? (
						at.en ? (
							''
						) : (
							<>
								Преподаватели курса -{' '}
								{<span className={'red'}>практикующие</span>} эксперты
							</>
						)
					) : at.en ? (
						<>
							Russian and <span className={'red'}>international</span> experts
						</>
					) : (
						<>
							Российские и <span className={'red'}>зарубежные</span> эксперты
							программы
						</>
					)}
				</h2>
				{/* TODO: Test, TemporarySolution: Текстовый шаблон страницы курсов MINI MBA */}
				{isDigitalTransformation ? (
					<div className={stls.text}>
						{at.en
							? 'Adopt the unique experience of international-level professionals adapted to the Russian market'
							: 'Перенимайте уникальный опыт профессионалов международного уровня, адаптированный под рынок РФ'}
					</div>
				) : (
					!at.profession &&
					!at.course && (
						<div className={stls.text}>
							{at.en
								? 'Learn from the unique foreign experts who adapted their experience for Russian market'
								: 'Перенимайте уникальный опыт международных экспертов, адаптированный под рынок РФ'}
						</div>
					)
				)}
				<div
					className={cn({
						[stls.twoImages]: true,
						[stls.detailImage]: true,
						[stls.detailImageAtProfession]: at.profession || at.course
					})}
				>
					<div
						className={cn({
							[stls.image]: true,
							[stls.pic1]: true,
							[stls.pic1AtProfession]: at.profession || at.course
						})}
					>
						<Image
							priority
							src={'/assets/images/speaker_1.jpg'}
							alt={at.en ? 'Expert during a talk' : 'Спикер на сцене даёт речь'}
							width={425}
							height={425}
							placeholder='blur'
							blurDataURL={base64pixel}
							style={{
								objectFit: 'cover'
							}}
						/>
					</div>
					<div
						className={cn({
							[stls.image]: true,
							[stls.pic2]: true,
							[stls.pic2AtProfession]: at.profession || at.course
						})}
					>
						<Image
							src={'/assets/images/speaker_2.jpg'}
							alt={at.en ? 'Expert during a talk' : 'Спикер на сцене даёт речь'}
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
				<ul
					className={cn({
						[stls.detailList]: true,
						[stls.detailListProfession]: at.profession || at.course
					})}
				>
					<li>
						<div className={stls.circle}>
							<IconCheck />
						</div>
						<div>
							<p className={stls.detailTitle}>
								{at.en ? 'Practitioners' : 'Практикующие эксперты'}
							</p>
							<p>
								{at.profession || at.course ? (
									at.en ? (
										''
									) : (
										'Имеют опыт работы в крупных российских и зарубежных организациях'
									)
								) : at.en ? (
									'They have implemented major projects on the markets of Europe and USA'
								) : (
									<>
										Реализовывали крупные проекты на рынках
										<br /> Европы и США
									</>
								)}
							</p>
						</div>
					</li>
					<li>
						<div className={stls.circle}>
							<IconCheck />
						</div>
						<div>
							<p className={stls.detailTitle}>
								{at.en
									? 'Multi-stage verification'
									: 'Прошли многоэтапную проверку'}
							</p>
							<p>
								{at.en ? (
									'They have passed Moscow Academy’s multi-stage verification and have teaching accreditation'
								) : (
									<>
										Прошли многоэтапную проверку специалистами академии
										<br />и имеют аккредитацию на преподавание
									</>
								)}
							</p>
						</div>
					</li>
					<li>
						<div className={stls.circle}>
							<IconCheck />
						</div>
						<div>
							<p className={stls.detailTitle}>
								{at.profession || at.course
									? at.en
										? 'Rich teaching experience'
										: 'Большой опыт преподавания'
									: at.en
									? 'International teaching experience'
									: 'Международный опыт преподавания'}
							</p>
							<p>
								{at.profession || at.course
									? at.en
										? ''
										: 'Преподают в ведущих российских учебных заведениях'
									: at.en
									? 'They work in the leading world-class business schools'
									: 'Преподают в ведущих бизнес-школах мира'}
							</p>
						</div>
					</li>
				</ul>
			</div>
			{!at.profession && !at.course && !at.teachers && (
				<h3 className={stls.teachersPros}>
					{!at.profession &&
						!at.course &&
						(at.en ? (
							<>
								More than 150
								<br /> international-level professors
							</>
						) : (
							<>
								Более 150 профессоров <br /> международного уровня
							</>
						))}
				</h3>
			)}
		</div>
	)
}
