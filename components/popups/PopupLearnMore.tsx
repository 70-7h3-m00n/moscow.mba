import stls from '@/styles/components/popups/PopupLearnMore.module.sass'
import learmMoreStls from '@/styles/components/layout/StickyBottom.module.sass'
import Link from 'next/link'
import Popup from 'reactjs-popup'
import Discount from '@/components/costs/Discount'
import { useAt } from '@/hooks/index'
import PopupForm from '@/components/popups/PopupForm'
import Until from '@/components/costs/Until'
import { IconClose } from '@/components/icons'

const PopupLearnMore = ({ close }) => {
	const at = useAt()
	return (
		<div className={`${stls.popupLearnMore} red-bg`}>
			<h2 className={stls.title}>
				Скидка <Discount />
			</h2>
			<div className={stls.disc}>
				на все Online программы <br />
				<Until preposition={true} />
			</div>

			<div className={stls.btnGroup}>
				<Popup
					trigger={
						<a
							className={`${learmMoreStls.btn} ${learmMoreStls.pointer} ${stls.btn}`}>
							ХОЧУ&nbsp;КОНСУЛЬТАЦИЮ
						</a>
					}
					modal
					lockScroll
					nested
					closeOnDocumentClick>
					{/* @ts-expect-error  */}
					{close => (
						<PopupForm
							title={'Поможем в выборе!'}
							closePopUpForm={close}
							formName='Заявка с модальной формы "Хочу консультацию"'
						/>
					)}
				</Popup>

				<Link
					legacyBehavior
					href='/programs/mini/online'
					{...(at.en ? { locale: 'ru' } : undefined)}>
					<a className={`${learmMoreStls.btn} ${stls.btn}`} onClick={close}>
						СМОТРЕТЬ&nbsp;ПРОГРАММЫ
					</a>
				</Link>
			</div>
			<button className='mfp-close' type='button' onClick={close}>
				<IconClose />
			</button>
		</div>
	)
}

export default PopupLearnMore
