import stls from '@/styles/components/layout/StickyBottom.module.sass'
import cn from 'classnames'
import { useEffect, useContext } from 'react'
import Link from 'next/link'
import Popup from 'reactjs-popup'
import { discount } from '@/config/index'
import { useAt } from '@/hooks/index'
import { OverlayContext } from '@/context/index'
import { Until } from '@/components/costs'
import { PopupForm, PopupLearnMore } from '@/components/popups'
import { IconCross, IconClose } from '@/components/icons'

const StickyBottom = ({
	openStickyModule,
	hideStickyModule,
	closeStickyModule,
	clickedAsk
}) => {
	const at = useAt()

	const { overlayIsShown, showOverlay, hideOverlay, toggleOverlay } =
		useContext(OverlayContext)

	useEffect(() => {
		document.addEventListener('scroll', () => {
			// check if on programs page
			const pathArr = window.location.pathname.split('/').filter(part => part)
			if (
				!(
					pathArr[0] === 'promo' ||
					(pathArr[0] === 'programs' &&
						(pathArr[1] === 'mini' ||
							pathArr[1] === 'mba' ||
							pathArr[1] === 'mba') &&
						(pathArr[2] === 'online' || pathArr[2] === 'blended') &&
						!pathArr[3])
				)
			) {
				const pageHeight = document.body.scrollHeight
				window.pageYOffset > 1500 &&
				window.pageYOffset < pageHeight - 2500 &&
				!clickedAsk
					? openStickyModule()
					: hideStickyModule()
			}
		})
	}, [hideStickyModule, openStickyModule, clickedAsk])

	return (
		<div
			className={cn({
				[stls.sticky]: true,
				'sticky-bottom-part': true,
				show: true,
				[stls.overlay]: overlayIsShown
			})}>
			<div className={stls.content}>
				<p className={stls.p}>
					<strong>
						{at.en ? `${discount} Discount` : `Скидка ${discount}`}
					</strong>
					<span className={stls.responsiveSpace}>&nbsp;</span>
					<br className={stls.responsiveBr} />
					{at.en ? 'to all Online programs' : 'на все Online программы'}{' '}
					<Until />!
				</p>
				<div className={stls.btns}>
					<Link
						legacyBehavior
						href='/programs/mini/online'
						{...(at.en ? { locale: 'ru' } : undefined)}>
						<a className={stls.btn}>
							{at.en ? <>VIEW&nbsp;PROGRAMS</> : <>СМОТРЕТЬ&nbsp;ПРОГРАММЫ</>}
						</a>
					</Link>

					<Popup
						trigger={
							<a className={`${stls.btn} ${stls.pointer}`}>
								{at.en ? (
									<>GET&nbsp;CONSULTATION</>
								) : (
									<>ХОЧУ&nbsp;КОНСУЛЬТАЦИЮ</>
								)}
							</a>
						}
						modal
						lockScroll
						nested
						closeOnDocumentClick>
						{/* @ts-expect-error  */}
						{close => (
							<PopupForm
								title={at.en ? 'Get consultation' : 'Получите консультацию'}
								closePopUpForm={close}
								formName='Заявка с модальной формы "Хочу консультацию"'
							/>
						)}
					</Popup>

					<div className={`${stls.learnMore}`}>
						<Popup
							trigger={
								<a className={`${stls.btn} ${stls.pointer}`}>
									{at.en ? 'LEARN MORE' : 'ПОДРОБНЕЕ'}
								</a>
							}
							modal
							lockScroll
							nested
							closeOnDocumentClick>
							{/* @ts-expect-error  */}
							{close => <PopupLearnMore close={close} />}
						</Popup>
					</div>

					<a
						className={`${stls.pointer} close-bottom-module-btn ${stls.crossIn}`}
						onClick={closeStickyModule}>
						<IconCross />
					</a>
				</div>
				<a
					className={`${stls.pointer} close-bottom-module-btn ${stls.crossOut}`}
					onClick={closeStickyModule}>
					<IconCross />
				</a>
				<a
					className={`${stls.pointer} ${stls.crossTop}`}
					onClick={closeStickyModule}>
					<IconClose />
				</a>
			</div>
			{/* </div> */}
		</div>
	)
}

export default StickyBottom
