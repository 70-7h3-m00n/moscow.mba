import stls from '@/styles/components/popups/PopupLoader.module.sass'
import { IconLoader, IconClose } from '@/components/icons'

const Loader = ({ closePopUp = null, loadingPopupContent = false }) => {
	const popupContentClasses = ['popup-content']
	const loaderContentClasses = ['loader-content']

	if (!loadingPopupContent) {
		popupContentClasses.push('red-bg')
		loaderContentClasses.push('thanks-popup-content')
	}

	return (
		<div id='thanksModal' className='popup-modal loader-modal mfp-with-anim'>
			<div className={popupContentClasses.join(' ')}>
				<div className={loaderContentClasses.join(' ')}>
					<IconLoader />
					{!loadingPopupContent && (
						<p>Ваша заявка отправляется, пожалуйста, подождите</p>
					)}
				</div>
			</div>
			{!loadingPopupContent && (
				<button className='mfp-close' type='button' onClick={closePopUp}>
					<IconClose />
				</button>
			)}
		</div>
	)
}

export default Loader
