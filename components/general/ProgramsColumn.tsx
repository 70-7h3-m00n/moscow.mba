import stls from '@/styles/components/general/ProgramsColumn.module.sass'
import { useContext, useState, Fragment } from 'react'
import Link from 'next/link'
import cn from 'classnames'
import { MenuContext, OverlayContext } from '@/context/index'
import { useAt } from '@/hooks/index'
import { ProgramSubjects, ProgramsQty } from '@/components/general'
import { Until, Price, TrainingPeriod, Discount } from '@/components/costs'
import {
	IconCheckCircle,
	IconScreen,
	IconPaperCorner,
	IconClock,
	IconArrowLeft
} from '@/components/icons'
import { ruCaseSubjects } from '@/helpers/index'

const ProgramsColumn = ({ data, id, type }) => {
	const at = useAt()
	const { closeMenu } = useContext(MenuContext)
	const { hideOverlay } = useContext(OverlayContext)
	const handleLinkClick = () => {
		closeMenu()
		hideOverlay()
	}
	const programsOnline = data?.filter(
		program =>
			program?.category?.type === type && program?.studyFormat === 'online'
	)
	const programsBlended = data?.filter(
		program =>
			program?.category?.type === type && program?.studyFormat === 'blended'
	)
	const [programFormat, setProgramFormat] = useState('online')

	// TODO: columnPrograms should be renamed to ProgramsColumn. Current file should be renamed to ProgramsColumns.
	// TODO: columnPrograms should be it's own component in the separate file in ./components/listItems/ColumnPrograms
	// TODO: condition should be dropped. View all link should be added into ul right below ColumnPrograms component
	const columnPrograms = (arr, format, count = 15) =>
		arr?.map((item, idx) => {
			if (idx < count) {
				return (
					<li key={item.id || item._id} className={stls.listItem}>
						<Link
							legacyBehavior
							href={`/programs/${item.category.type}/${item.studyFormat}/${item.slug}`}
							{...(at.en ? { locale: 'ru' } : undefined)}>
							<a onClick={handleLinkClick}>
								{at.en
									? item?.slug?.split('-').join(' ') || item?.title
									: item?.title}
							</a>
						</Link>
					</li>
				)
			} else if (idx === count) {
				return (
					<Fragment key={item.id || item._id || `ProgramsColumnItem-${idx}`}>
						{type === 'mba' && format === 'online' && (
							<li className={stls.listItem}>
								<Link
									legacyBehavior
									href={`/programs/international-business-law`}
									{...(at.en ? { locale: 'ru' } : undefined)}>
									<a onClick={handleLinkClick}>
										{at.en ? 'MBL' : 'Магистр международного права'}
									</a>
								</Link>
							</li>
						)}

						<li key={item.id || item._id} className={stls.listItem}>
							<Link
								legacyBehavior
								href={`/programs/${type}/${format}`}
								{...(at.en ? { locale: 'ru' } : undefined)}>
								<a className={stls.link} onClick={handleLinkClick}>
									{at.en ? 'View all' : 'Посмотреть все'}
									<IconArrowLeft classNames={[stls.IconArrowLeft]} />
								</a>
							</Link>
						</li>
					</Fragment>
				)
			}
		})

	return (
		<ul id={id} className={cn(stls.container)}>
			<li className={stls.programInfo}>
				<div className={stls.programTitle}>
					{type === 'mini' ? 'Mini MBA' : type === 'mba' ? 'MBA' : null}
				</div>

				<div className={stls.bottomInfo}>
					{/* <div className={stls.bottomTitle}>
            {type === 'mini' ? 'Mini MBA' : type === 'mba' ? 'MBA' : null}
          </div> */}
					<div className={stls.itemBottom}>
						<IconClock classNames={[stls.iconBottom]} />
						<TrainingPeriod type={type} />
					</div>
					<p className={stls.textBottom}>
						{type === 'mini'
							? at.en
								? ''
								: 'Дистанционная программа Mini MBA разработана для специалистов и руководителей, которые хотят систематизировать имеющиеся знания или познакомиться с ключевыми аспектами новой для себя сферы управленческой деятельности'
							: type === 'mba'
							? at.en
								? ''
								: 'Дистанционная программа MBA разработана для специалистов и руководителей, которые хотят систематизировать имеющиеся знания или познакомиться с ключевыми аспектами новой для себя сферы управленческой деятельности'
							: null}
					</p>
					<div className={stls.itemBottom}>
						<IconPaperCorner classNames={[stls.iconBottom]} />
						<span>
							<ProgramSubjects type='mba' subjects='base' />{' '}
							{at.en ? 'management subjects' : `дисциплин об управлении`}
						</span>
					</div>
					<div className={stls.itemBottom}>
						<IconPaperCorner classNames={[stls.iconBottom]} />
						<span>
							<ProgramSubjects type='mba' subjects='specialty' />{' '}
							{at.en ? 'specialized subjects' : 'дисциплин специализации'}
						</span>
					</div>
				</div>

				<div className={stls.navigation}>
					<button
						className={cn(stls.programBtn, {
							[stls.active]: programFormat === 'online'
						})}
						onClick={() => setProgramFormat('online')}>
						online
					</button>
					<button
						className={cn(stls.programBtn, {
							[stls.active]: programFormat === 'blended'
						})}
						onClick={() => setProgramFormat('blended')}>
						blended
					</button>
				</div>

				<div className={stls.infoFlexContainer}>
					<div className={stls.infoItemContainer}>
						<div className={stls.iconContainer}>
							<IconClock />
						</div>
						<span>
							<TrainingPeriod type={type} />
						</span>
					</div>
					<div className={stls.infoItemContainer}>
						<div className={stls.iconContainer}>
							<IconPaperCorner />
						</div>
						<span>
							<ProgramSubjects type={type} subjects='base' />{' '}
							{at.en ? 'management subjects' : 'дисциплин об управлении'}
						</span>
					</div>
					<div className={stls.infoItemContainer}>
						<div className={stls.iconContainer}>
							<IconPaperCorner />
						</div>
						<span>
							<ProgramSubjects type={type} subjects='specialty' />{' '}
							{at.en ? 'specialized subjects' : 'дисциплин специализации'}
						</span>
					</div>
				</div>
				<p className={stls.programDesc}>
					{type === 'mini'
						? at.en
							? ''
							: 'Программа Mini MBA разработана для предпринимателей и руководителей, которые хотят систематизировать имеющиеся знания или познакомиться с ключевыми аспектами новой для себя сферы управленческой деятельности'
						: type === 'mba'
						? at.en
							? ''
							: 'Программа MBA разработана для предпринимателей, руководителей и топ-менеджеров, которые хотят систематизировать имеющиеся знания или познакомиться с ключевыми аспектами новой для себя сферы управленческой деятельности'
						: null}
				</p>
			</li>
			<li className={stls.column}>
				<div
					className={cn(stls.itemDetails, {
						[stls.activeOnline]: programFormat === 'online'
					})}>
					<div className={stls.itemTitle}>
						{at.en ? 'ONLINE' : 'Формат ONLINE'}
						<div className={stls.itemDiscount}>
							<div className={stls.itemDiscountAmount}>
								<Discount />
							</div>
							<span>
								<Until />
							</span>
						</div>
					</div>
					<ProgramsQty
						programs={data}
						type={type}
						format={'online'}
						isInsideHeader
					/>
					<div className={stls.itemPrice}>
						{at.en ? 'Cost' : 'Стоимость'}:{' '}
						<Price
							discount={true}
							type={type}
							format={'online'}
							renderedByComponent='ProgramsColumn'
						/>
					</div>
					<div className={stls.itemInfo}>
						<div className={stls.infoFlexContainer}>
							<div className={stls.iconContainer}>
								<IconCheckCircle />
							</div>
							<span>{at.en ? 'Remotely' : 'Дистанционно'}</span>
						</div>
						<div className={stls.infoFlexContainer}>
							<div className={stls.iconContainer}>
								<IconScreen />
							</div>
							<span>
								<ProgramSubjects type={type} sum={true} />{' '}
								{at.en ? 'subjects' : 'дисциплин'}
							</span>
						</div>
					</div>
					<ul className={stls.list}>
						{columnPrograms(programsOnline, 'online')}
					</ul>
				</div>
				<div
					className={cn(stls.itemDetails, {
						[stls.activeBlended]: programFormat === 'blended'
					})}>
					<div className={stls.itemTitle}>
						{at.en ? 'BLENDED' : 'Формат BLENDED'}
					</div>
					<ProgramsQty
						programs={data}
						type={type}
						format={'blended'}
						isInsideHeader
					/>
					<div className={stls.itemPrice}>
						{at.en ? 'Cost' : 'Стоимость'}:{' '}
						<Price
							discount={false}
							type={type}
							format={'blended'}
							renderedByComponent='ProgramsColumn'
						/>
					</div>
					<div className={stls.itemInfo}>
						<div className={stls.infoFlexContainer}>
							<div className={stls.iconContainer}>
								<IconCheckCircle />
							</div>
							<span>{at.en ? 'Half in-person' : 'С очными модулями'}</span>
						</div>
						<div className={stls.infoFlexContainer}>
							<div className={stls.iconContainer}>
								<IconScreen />
							</div>
							<span>
								<ProgramSubjects type={type} sum={true} />{' '}
								{at.en ? 'subjects' : 'дисциплин'}
							</span>
						</div>
					</div>
					<ul className={stls.list}>
						{columnPrograms(programsBlended, 'blended')}
					</ul>
				</div>
			</li>
		</ul>
	)
}

export default ProgramsColumn
