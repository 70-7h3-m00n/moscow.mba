import stls from './WhereStudentsWorks.module.sass'
import { ImgTemplate } from '@/components/images'
import { Wrapper } from '@/components/layout'
import { useAt, useScrollObserver } from '@/hooks/index'
import { createImgsArr } from '../../../utils'
import * as clients from './clients'
import { createRef, useRef, useState } from 'react'
import cn from 'classnames'

const WhereStudentsWorks = () => {
	const at = useAt()
	const [activeSlide, setActiveSlide] = useState(1)
	const clientsArr = createImgsArr(clients)
	const clientRefs = useRef(clientsArr.map(() => createRef<HTMLLIElement>()))
	const alts = at.en
		? ([
				'Head Hunter',
				'Russian Railways',
				'Tatenergo',
				'Toms',
				'Rosneft',
				'Rosseti',
				'Sberbank Leasing',
				'Lukom-A'
		  ] as const)
		: ([
				'Head Hunter',
				'РЖД',
				'Татэнерго',
				'Томс',
				'Роснефть',
				'Россети',
				'Сбербанк Лизинг',
				'Луком-А'
		  ] as const)

	useScrollObserver(clientRefs.current, entries =>
		entries.map(
			entry =>
				window.innerWidth <= 768 &&
				(clientRefs.current[0].current == entry.target &&
					entry.isIntersecting &&
					setActiveSlide(1),
				clientRefs.current[3].current == entry.target &&
					entry.isIntersecting &&
					setActiveSlide(2))
		)
	)

	return (
		<section className={stls.sectionContainer}>
			<Wrapper column>
				<h2 className={stls.title}>Наши студенты работают в компаниях</h2>
				<ul className={stls.clientsList}>
					{clientsArr.map((client, idx) => (
						<li
							key={alts[idx]}
							className={cn(stls.listItems, stls[`listItem${idx + 1}`])}
							ref={clientRefs.current[idx]}>
							<ImgTemplate src={client.src} alt={alts[idx]} />
						</li>
					))}
				</ul>
				<div className={stls.switch}>
					{Array.from({ length: clientsArr.length / 4 }, (_v, idx) => (
						<div
							key={`slide${idx + 1}`}
							className={cn(
								stls.sticks,
								activeSlide === idx + 1 && stls.activeStick
							)}
							onClick={() => {
								setActiveSlide(idx + 1)
								idx + 1 === 1
									? clientRefs.current[0].current.scrollIntoView({
											behavior: 'smooth',
											block: 'nearest',
											inline: 'start'
									  })
									: clientRefs.current[3].current.scrollIntoView({
											behavior: 'smooth',
											block: 'nearest',
											inline: 'end'
									  })
							}}
						/>
					))}
				</div>
			</Wrapper>
		</section>
	)
}

export default WhereStudentsWorks
