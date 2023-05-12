import stls from '@/styles/components/sections/Programs.module.sass'
import { useState, useContext } from 'react'
import Link from 'next/link'
import cn from 'classnames'
import { useAt } from '@/hooks/index'
import { ContextStaticProps } from '@/context/index'
import { Wrapper } from '@/components/layout'
import { ProgramSubjects, ProgramsQty } from '@/components/general'
import { Until, Price, TrainingPeriod, Discount } from '@/components/costs'
import { IconCheckCircle, IconScreen } from '@/components/icons'

const Programs = () => {
	const at = useAt()

	const { programs } = useContext(ContextStaticProps)

	const [isMini, setIsMini] = useState(true)
	const [isMba, setIsMba] = useState(false)

	const [isMiniOnline, setIsMiniOnline] = useState(true)
	const [isMbaOnline, setIsMbaOnline] = useState(true)

	const handleSetMini = () => {
		setIsMini(true)
		setIsMba(false)
	}

	const handleSetMba = () => {
		setIsMini(false)
		setIsMba(true)
	}

	return (
		<section className='program-options-section'>
			<Wrapper classNames={[stls.wrapper]}>
				<div className='program-options-flex'>
					<div className='program-options-left'>
						<h2>{at.en ? 'Programs' : 'Программы'}</h2>
						<ul className='program-options-tabs'>
							<li>
								<a
									className={cn({
										headerMenuTabs: true,
										'active-tab': isMini
									})}
									onClick={handleSetMini}>
									Mini MBA
								</a>
							</li>
							<li>
								<a
									className={cn({
										headerMenuTabs: true,
										'active-tab': isMba
									})}
									onClick={handleSetMba}>
									MBA
								</a>
							</li>
							<li>
								<Link
									legacyBehavior
									href='/programs/profession/online'
									{...(at.en ? { locale: 'ru' } : undefined)}>
									<a>Профессии</a>
								</Link>
							</li>
							<li>
								<Link
									legacyBehavior
									href='/programs/course/online'
									{...(at.en ? { locale: 'ru' } : undefined)}>
									<a>Курсы</a>
								</Link>
							</li>
							<li>
								<Link
									legacyBehavior
									href='/programs/mini/online'
									{...(at.en ? { locale: 'ru' } : undefined)}>
									<a>{at.en ? 'All programs' : 'Все программы'}</a>
								</Link>
							</li>
						</ul>
					</div>
					<div className='program-options-right'>
						<div
							className={cn({
								'program-tabs-content': true,
								visible: isMini
							})}>
							<div className='top-info'>
								<div className='prog-time'>
									<i>
										<TrainingPeriod type='mini' />
									</i>
									<span>
										<ProgramSubjects type='mini' sum={true} />{' '}
										{at.en ? 'subjects' : 'дисциплин'}
									</span>
								</div>
								<div className='prog-status'>
									{at.en ? 'Newest programs of' : 'Актуальные программы'} 2023{' '}
									{at.en ? '' : 'года'}
								</div>
							</div>
							<div className='desc'>
								{at.en
									? ''
									: 'Дистанционная программа Mini MBA разработана для специалистов и руководителей, которые хотят систематизировать имеющиеся знания или познакомиться с ключевыми аспектами новой для себя сферы управленческой деятельности'}
							</div>
							<ul className='program-options-block-tabs--sctn-programs'>
								<li>
									<a
										className={cn({ active: isMiniOnline })}
										onClick={() => setIsMiniOnline(true)}>
										ONLINE
									</a>
								</li>
								<li>
									<a
										className={cn({ active: !isMiniOnline })}
										onClick={() => setIsMiniOnline(false)}>
										BLENDED
									</a>
								</li>
							</ul>
							<div className='program-options-detail'>
								<div
									className={cn({
										'program-options-block': true,
										show: isMiniOnline
									})}>
									<div className='name'>
										{at.en ? 'ONLINE' : 'Формат ONLINE'}

										<div className='discount'>
											<div className='size'>
												<Discount />
											</div>
											<span>
												<Until />
											</span>
										</div>
									</div>
									<ProgramsQty
										programs={programs}
										type={'mini'}
										format={'online'}
									/>
									<div className='price'>
										{at.en ? 'Cost' : 'Стоимость'}
										: <Price
											discount={true}
											type={'mini'}
											format={'online'}
										/>{' '}
									</div>
									<div className='info-list'>
										<div className='info-flex'>
											<div className='pic'>
												<IconCheckCircle />
											</div>
											<span>{at.en ? 'Remotely' : 'Дистанционно'}</span>
										</div>
										<div className='info-flex'>
											<div className='pic'>
												<IconScreen />
											</div>
											<span>
												<ProgramSubjects type='mini' sum={true} />{' '}
												{at.en ? 'subjects' : 'дисциплин'}
											</span>
										</div>
									</div>
									<ul className='program-options-block-list'>
										{programs?.map(item => {
											if (
												item.category?.type === 'mini' &&
												item.studyFormat === 'online'
											) {
												return (
													<li key={item.id || item._id}>
														<Link
															legacyBehavior
															href={`/programs/${item.category.type}/${item.studyFormat}/${item.slug}`}
															{...(at.en ? { locale: 'ru' } : undefined)}>
															<a className={stls.link}>
																{at.en
																	? item?.slug?.split('-').join(' ') ||
																	  item?.title
																	: item?.title}
															</a>
														</Link>
													</li>
												)
											}
										})}
									</ul>
								</div>
								<div
									className={cn({
										'program-options-block': true,
										show: !isMiniOnline
									})}>
									<div className='name'>
										{at.en ? 'BLENDED' : 'Формат BLENDED'}
									</div>
									<ProgramsQty
										programs={programs}
										type={'mini'}
										format={'blended'}
									/>
									<div className='price'>
										{at.en ? 'Cost' : 'Стоимость'}:{' '}
										<Price discount={false} type={'mini'} format={'blended'} />{' '}
									</div>
									<div className='info-list'>
										<div className='info-flex'>
											<div className='pic'>
												<IconCheckCircle />
											</div>
											<span>
												{at.en ? 'Half in-person' : 'С очными модулями'}
											</span>
										</div>
										<div className='info-flex'>
											<div className='pic'>
												<IconScreen />
											</div>
											<span>
												<ProgramSubjects type='mini' sum={true} />{' '}
												{at.en ? 'subjects' : 'дисциплин'}
											</span>
										</div>
									</div>
									<ul className='program-options-block-list'>
										{programs?.map(item => {
											if (
												item.category?.type === 'mini' &&
												item.studyFormat === 'blended'
											) {
												return (
													<li key={item.id || item._id}>
														<Link
															legacyBehavior
															href={`/programs/${item.category.type}/${item.studyFormat}/${item.slug}`}
															{...(at.en ? { locale: 'ru' } : undefined)}>
															<a className={stls.link}>
																{at.en
																	? item?.slug?.split('-').join(' ') ||
																	  item?.title
																	: item?.title}
															</a>
														</Link>
													</li>
												)
											}
										})}
									</ul>
								</div>
							</div>
						</div>
						<div
							className={cn({
								'program-tabs-content': true,
								visible: isMba
							})}>
							<div className='top-info'>
								<div className='prog-time'>
									<i>
										<TrainingPeriod type='mba' />
									</i>
									<span>
										<ProgramSubjects type='mba' sum={true} />{' '}
										{at.en ? 'subjects' : 'дисциплин'}{' '}
									</span>
								</div>
								<div className='prog-status'>
									{at.en ? 'Newest programs of' : 'Актуальные программы'} 2023{' '}
									{at.en ? '' : 'года'}
								</div>
							</div>
							<div className='desc'>
								{at.en
									? ''
									: 'Дистанционная программа MBA разработана для специалистов и руководителей, которые хотят систематизировать имеющиеся знания или познакомиться с ключевыми аспектами новой для себя сферы управленческой деятельности'}
							</div>
							<ul className='program-options-block-tabs--sctn-programs'>
								<li>
									<a
										className={cn({ active: isMbaOnline })}
										onClick={() => setIsMbaOnline(true)}>
										ONLINE
									</a>
								</li>
								<li>
									<a
										className={cn({ active: !isMbaOnline })}
										onClick={() => setIsMbaOnline(false)}>
										BLENDED
									</a>
								</li>
							</ul>
							<div className='program-options-detail'>
								<div
									className={cn({
										'program-options-block': true,
										show: isMbaOnline
									})}>
									<div className='name'>
										{at.en ? 'ONLINE' : 'Формат ONLINE'}
										<div className='discount'>
											<div className='size'>
												<Discount />
											</div>
											<span>
												<Until />
											</span>
										</div>
									</div>
									<ProgramsQty
										programs={programs}
										type={'mba'}
										format={'online'}
									/>
									<div className='price'>
										{at.en ? 'Cost' : 'Стоимость'}
										: <Price
											discount={true}
											type={'mba'}
											format={'online'}
										/>{' '}
									</div>
									<div className='info-list'>
										<div className='info-flex'>
											<div className='pic'>
												<IconCheckCircle />
											</div>
											<span>{at.en ? 'Remotely' : 'Дистанционно'}</span>
										</div>
										<div className='info-flex'>
											<div className='pic'>
												<IconScreen />
											</div>
											<span>
												<ProgramSubjects type='mba' sum={true} />{' '}
												{at.en ? 'subjects' : 'дисциплин'}
											</span>
										</div>
									</div>
									<ul className='program-options-block-list'>
										{programs?.map(item => {
											if (
												item.category?.type === 'mba' &&
												item.studyFormat === 'online'
											) {
												return (
													<li key={item.id || item._id}>
														<Link
															legacyBehavior
															href={`/programs/${item.category.type}/${item.studyFormat}/${item.slug}`}
															{...(at.en ? { locale: 'ru' } : undefined)}>
															<a className={stls.link}>
																{at.en
																	? item?.slug?.split('-').join(' ') ||
																	  item?.title
																	: item?.title}
															</a>
														</Link>
													</li>
												)
											}
										})}
										<li>
											<Link
												legacyBehavior
												href={`/programs/international-business-law`}
												{...(at.en ? { locale: 'ru' } : undefined)}>
												<a>Магистр международного бизнес-права</a>
											</Link>
										</li>
									</ul>
								</div>
								<div
									className={cn({
										'program-options-block': true,
										show: !isMbaOnline
									})}>
									<div className='name'>
										{at.en ? 'BLENDED' : 'Формат BLENDED'}
									</div>
									<ProgramsQty
										programs={programs}
										type={'mba'}
										format={'blended'}
									/>
									<div className='price'>
										{at.en ? 'Cost' : 'Стоимость'}:{' '}
										<Price discount={false} type={'mba'} format={'blended'} />{' '}
									</div>
									<div className='info-list'>
										<div className='info-flex'>
											<div className='pic'>
												<IconCheckCircle />
											</div>
											<span>
												{at.en ? 'Half In-Person' : 'С очными модулями'}
											</span>
										</div>
										<div className='info-flex'>
											<div className='pic'>
												<IconScreen />
											</div>
											<span>
												<ProgramSubjects type='mba' sum={true} />{' '}
												{at.en ? 'subjects' : 'дисциплин'}
											</span>
										</div>
									</div>
									<ul className='program-options-block-list'>
										{programs?.map(item => {
											if (
												item.category?.type === 'mba' &&
												item.studyFormat === 'blended'
											) {
												return (
													<li key={item.id || item._id}>
														<Link
															legacyBehavior
															href={`/programs/${item.category.type}/${item.studyFormat}/${item.slug}`}
															{...(at.en ? { locale: 'ru' } : undefined)}>
															<a className={stls.link}>
																{at.en
																	? item?.slug?.split('-').join(' ') ||
																	  item?.title
																	: item?.title}
															</a>
														</Link>
													</li>
												)
											}
										})}
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Wrapper>
		</section>
	)
}

export default Programs
