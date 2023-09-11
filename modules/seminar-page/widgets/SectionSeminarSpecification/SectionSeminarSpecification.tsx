import { Wrapper } from '@/components/layout'
import stls from './SectionSeminarSpecification.module.sass'
import Image from 'next/image'
import { IconSeminarLocation } from '@/components/icons'
import { NextPage } from 'next'
import { TypeLibSeminar } from '@/types/index'
import { formatDate, ruCaseHours } from '@/helpers/index'

const SectionSeminarSpecification: NextPage<{ seminar: TypeLibSeminar }> = ({
	seminar
}): JSX.Element => {
	const { time, date } = formatDate(seminar?.date)

	const categoryName = seminar?.category?.categoryName || ''

	return (
		<section className={stls.container}>
			<Wrapper classNames={[stls.wrapper]}>
				<div className={stls.details}>
					<div className={stls.speakerContainer}>
						{seminar?.authors?.map(author => (
							<div key={author.name} className={stls.speakerInfo}>
								<div className={stls.imageContainer}>
									<Image
										src={author?.portrait}
										width={38}
										height={38}
										alt={author?.name}
										style={{ objectFit: 'cover' }}
									/>
								</div>
								<p>Спикер: {author?.name}</p>
							</div>
						))}
					</div>
					<div className={stls.eventDate}>
						{date}, <span>{time}</span>
					</div>
					<div className={stls.eventCategory}>
						{categoryName.charAt(0).toUpperCase() + categoryName.substring(1)}
					</div>
				</div>
				<div className={stls.duration}>
					Продолжительность и формат обучения: {seminar?.duration} академических{' '}
					{ruCaseHours(+seminar?.duration)} очно или онлайн
				</div>
				<div className={stls.address}>
					<IconSeminarLocation />
					<p>{seminar?.address}</p>
				</div>
			</Wrapper>
		</section>
	)
}

export default SectionSeminarSpecification
