import stls from './Statistic.module.sass'
import { Wrapper } from '@/components/layout'
import { smileMansImgs } from '../../..'
import { ImgTemplate } from '@/components/images'
import { createImgsArr } from '../../../utils'

const Statistic = () => {
	const imagesArr = createImgsArr(smileMansImgs)

	const statistic = [
		{
			metric: '98%',
			description: 'Высоко оценили материал курса'
		},
		{
			metric: '87%',
			description: 'Нашли работу в течение года'
		},
		{
			metric: '4.9',
			description: 'Средний рейтинг курсов'
		}
	]

	return (
		<section className={stls.sectionContainer}>
			<Wrapper classNames={[stls.container]}>
				<div className={stls.textWrapper}>
					<h1 className={stls.title}>ОТЗЫВЫ СТУДЕНТОВ</h1>
					<p className={stls.description}>
						Нам важно, чтобы вы приняли взвешенное решение об обучении. Поэтому
						мы собрали для вас честные мнения пользователей Moscow Business
						Academy
					</p>
					<ul className={stls.statistic}>
						{statistic.map(({ metric, description }) => (
							<li key={metric} className={stls.item}>
								<h2 className={stls.h2}>{metric}</h2>
								<p className={stls.description}>{description}</p>
							</li>
						))}
					</ul>
				</div>
				<div className={stls.imgWrapper}>
					{imagesArr.map(({ alt, src }, idx) => (
						<ImgTemplate
							key={alt}
							src={src}
							alt={alt}
							objectFit='cover'
							classNames={[stls[`img${idx + 1}`]]}
						/>
					))}
				</div>
			</Wrapper>
		</section>
	)
}

export default Statistic
