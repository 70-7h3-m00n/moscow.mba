import stls from './ExpertsCard.module.sass'
import cn from 'classnames'
import { ExpertsCardProps } from './types'

import { PopupTeacherNew } from '@/components/popups'
import Image from 'next/image'
import { Tag } from '../../components'
import Popup from 'reactjs-popup'
import { BtnBeta } from '@/components/btns'
import { useEffect, useState } from 'react'
import { checkIfResourceExists } from '@/helpers/index'

export const ExpertsCard = ({
	className,
	expert,
	mainExpert = false,
	...rest
}: ExpertsCardProps) => {
	const [open, setOpen] = useState(false)
	const closeModal = () => setOpen(false)
	// const [srcExists, setSrcExists] = useState(true)

	// useEffect(() => {
	// 	const checkSrc = async () => {
	// 		if (typeof expert?.portrait?.url === 'string') {
	// 			const checkSrc = await checkIfResourceExists(expert?.portrait?.url)
	// 			setSrcExists(checkSrc)
	// 			return
	// 		}
	// 		return
	// 	}

	// 	checkSrc()
	// }, [expert?.portrait?.url])

	return (
		<>
			{true ? (
				<div
					className={cn(className, stls.carousel__item, stls.item)}
					key={`Expert--${expert.name}`}
					{...rest}
				>
					<div className={stls.card}>
						<Image
							className={stls.item__image}
							src={expert.portrait.url}
							alt={expert.name}
							width={318}
							height={416}
							style={{
								objectFit: 'cover'
							}}
						/>
						{mainExpert && (
							<Tag className={stls.cardTag} variant='eta'>
								Ведущий автор программы
							</Tag>
						)}
						<Popup
							trigger={
								<BtnBeta className={stls.cardBtn} variant='alpha' size='s'>
									<svg
										width='73'
										height='14'
										viewBox='0 0 73 14'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											d='M0.092 1.004H7.876V11H6.546V2.124H1.422V11H0.092V1.004ZM12.9848 11.154C12.4061 11.154 11.8975 11.0607 11.4588 10.874C11.0295 10.678 10.6655 10.412 10.3668 10.076C10.0681 9.73067 9.84413 9.32933 9.6948 8.872C9.54546 8.41467 9.4708 7.92 9.4708 7.388C9.4708 6.856 9.54546 6.36133 9.6948 5.904C9.84413 5.43733 10.0681 5.036 10.3668 4.7C10.6655 4.35467 11.0295 4.084 11.4588 3.888C11.8975 3.692 12.4061 3.594 12.9848 3.594C13.5541 3.594 14.0581 3.692 14.4968 3.888C14.9355 4.084 15.3041 4.35467 15.6028 4.7C15.9015 5.036 16.1255 5.43733 16.2748 5.904C16.4241 6.36133 16.4988 6.856 16.4988 7.388C16.4988 7.92 16.4241 8.41467 16.2748 8.872C16.1255 9.32933 15.9015 9.73067 15.6028 10.076C15.3041 10.412 14.9355 10.678 14.4968 10.874C14.0581 11.0607 13.5541 11.154 12.9848 11.154ZM12.9848 10.118C13.2928 10.118 13.5821 10.0573 13.8528 9.936C14.1328 9.81467 14.3755 9.642 14.5808 9.418C14.7861 9.18467 14.9448 8.9 15.0568 8.564C15.1781 8.21867 15.2388 7.82667 15.2388 7.388C15.2388 6.94933 15.1781 6.562 15.0568 6.226C14.9448 5.88067 14.7861 5.59133 14.5808 5.358C14.3755 5.12467 14.1328 4.94733 13.8528 4.826C13.5821 4.70467 13.2928 4.644 12.9848 4.644C12.6768 4.644 12.3828 4.70467 12.1028 4.826C11.8321 4.94733 11.5941 5.12467 11.3888 5.358C11.1835 5.59133 11.0201 5.88067 10.8988 6.226C10.7868 6.562 10.7308 6.94933 10.7308 7.388C10.7308 7.82667 10.7868 8.21867 10.8988 8.564C11.0201 8.9 11.1835 9.18467 11.3888 9.418C11.5941 9.642 11.8321 9.81467 12.1028 9.936C12.3828 10.0573 12.6768 10.118 12.9848 10.118ZM17.0479 9.95H17.9019C18.0045 9.754 18.1072 9.488 18.2099 9.152C18.3219 8.80667 18.4199 8.42867 18.5039 8.018C18.5972 7.598 18.6719 7.15467 18.7279 6.688C18.7839 6.22133 18.8119 5.764 18.8119 5.316V3.762H24.0479V9.95H25.0279V13.198H23.8939V11H18.1819V13.198H17.0479V9.95ZM22.8579 9.95V4.812H19.9739V5.428C19.9739 5.88533 19.9459 6.34267 19.8899 6.8C19.8432 7.248 19.7779 7.67267 19.6939 8.074C19.6099 8.47533 19.5165 8.83933 19.4139 9.166C19.3205 9.49267 19.2272 9.754 19.1339 9.95H22.8579ZM26.188 3.762H27.378V4.742H27.406C27.602 4.34067 27.91 4.05133 28.33 3.874C28.75 3.68733 29.212 3.594 29.716 3.594C30.276 3.594 30.7613 3.69667 31.172 3.902C31.592 4.10733 31.9373 4.38733 32.208 4.742C32.488 5.08733 32.698 5.48867 32.838 5.946C32.978 6.40333 33.048 6.88867 33.048 7.402C33.048 7.92467 32.978 8.41467 32.838 8.872C32.7073 9.32 32.502 9.71667 32.222 10.062C31.9513 10.398 31.606 10.664 31.186 10.86C30.7753 11.056 30.2947 11.154 29.744 11.154C29.5573 11.154 29.3567 11.1353 29.142 11.098C28.9273 11.0607 28.7127 11 28.498 10.916C28.2833 10.832 28.078 10.72 27.882 10.58C27.6953 10.4307 27.5367 10.2487 27.406 10.034H27.378V13.758H26.188V3.762ZM29.618 10.118C30.0193 10.118 30.36 10.0387 30.64 9.88C30.92 9.72133 31.144 9.51133 31.312 9.25C31.48 8.98867 31.6013 8.69 31.676 8.354C31.7507 8.018 31.788 7.67267 31.788 7.318C31.788 6.982 31.7413 6.65533 31.648 6.338C31.564 6.01133 31.4287 5.722 31.242 5.47C31.0647 5.218 30.8313 5.01733 30.542 4.868C30.262 4.71867 29.9307 4.644 29.548 4.644C29.1467 4.644 28.806 4.72333 28.526 4.882C28.246 5.04067 28.0173 5.25067 27.84 5.512C27.6627 5.764 27.532 6.05333 27.448 6.38C27.3733 6.70667 27.336 7.038 27.336 7.374C27.336 7.72867 27.378 8.074 27.462 8.41C27.546 8.73667 27.6767 9.026 27.854 9.278C28.0407 9.53 28.2787 9.73533 28.568 9.894C28.8573 10.0433 29.2073 10.118 29.618 10.118ZM37.5668 11.154C36.9882 11.154 36.4795 11.0607 36.0408 10.874C35.6115 10.678 35.2475 10.412 34.9488 10.076C34.6502 9.73067 34.4262 9.32933 34.2768 8.872C34.1275 8.41467 34.0528 7.92 34.0528 7.388C34.0528 6.856 34.1275 6.36133 34.2768 5.904C34.4262 5.43733 34.6502 5.036 34.9488 4.7C35.2475 4.35467 35.6115 4.084 36.0408 3.888C36.4795 3.692 36.9882 3.594 37.5668 3.594C38.1362 3.594 38.6402 3.692 39.0788 3.888C39.5175 4.084 39.8862 4.35467 40.1848 4.7C40.4835 5.036 40.7075 5.43733 40.8568 5.904C41.0062 6.36133 41.0808 6.856 41.0808 7.388C41.0808 7.92 41.0062 8.41467 40.8568 8.872C40.7075 9.32933 40.4835 9.73067 40.1848 10.076C39.8862 10.412 39.5175 10.678 39.0788 10.874C38.6402 11.0607 38.1362 11.154 37.5668 11.154ZM37.5668 10.118C37.8748 10.118 38.1642 10.0573 38.4348 9.936C38.7148 9.81467 38.9575 9.642 39.1628 9.418C39.3682 9.18467 39.5268 8.9 39.6388 8.564C39.7602 8.21867 39.8208 7.82667 39.8208 7.388C39.8208 6.94933 39.7602 6.562 39.6388 6.226C39.5268 5.88067 39.3682 5.59133 39.1628 5.358C38.9575 5.12467 38.7148 4.94733 38.4348 4.826C38.1642 4.70467 37.8748 4.644 37.5668 4.644C37.2588 4.644 36.9648 4.70467 36.6848 4.826C36.4142 4.94733 36.1762 5.12467 35.9708 5.358C35.7655 5.59133 35.6022 5.88067 35.4808 6.226C35.3688 6.562 35.3128 6.94933 35.3128 7.388C35.3128 7.82667 35.3688 8.21867 35.4808 8.564C35.6022 8.9 35.7655 9.18467 35.9708 9.418C36.1762 9.642 36.4142 9.81467 36.6848 9.936C36.9648 10.0573 37.2588 10.118 37.5668 10.118ZM45.7179 11.154C44.7846 11.154 44.0286 10.916 43.4499 10.44C42.8806 9.964 42.5212 9.22667 42.3719 8.228C42.3159 7.836 42.2879 7.39733 42.2879 6.912C42.2879 6.56667 42.2972 6.20733 42.3159 5.834C42.3439 5.46067 42.3859 5.092 42.4419 4.728C42.5072 4.364 42.5912 4.014 42.6939 3.678C42.8059 3.342 42.9506 3.03867 43.1279 2.768C43.4452 2.27333 43.8326 1.90933 44.2899 1.676C44.7472 1.43333 45.3212 1.28867 46.0119 1.242C46.4692 1.20467 46.8519 1.16267 47.1599 1.116C47.4679 1.06933 47.6406 0.952666 47.6779 0.766H48.8679C48.8492 1.13 48.7699 1.41 48.6299 1.606C48.4899 1.802 48.2939 1.95133 48.0419 2.054C47.7899 2.14733 47.4819 2.21267 47.1179 2.25C46.7539 2.278 46.3292 2.31067 45.8439 2.348C45.4426 2.376 45.0926 2.46933 44.7939 2.628C44.4952 2.78667 44.2386 3.00133 44.0239 3.272C43.8186 3.53333 43.6506 3.846 43.5199 4.21C43.3892 4.56467 43.2959 4.95667 43.2399 5.386H43.2819C43.4872 4.91 43.8046 4.518 44.2339 4.21C44.6726 3.902 45.1999 3.748 45.8159 3.748C46.8332 3.748 47.6359 4.06533 48.2239 4.7C48.8119 5.33467 49.1059 6.24933 49.1059 7.444C49.1059 8.05067 49.0219 8.58733 48.8539 9.054C48.6952 9.51133 48.4666 9.89867 48.1679 10.216C47.8692 10.524 47.5099 10.7573 47.0899 10.916C46.6792 11.0747 46.2219 11.154 45.7179 11.154ZM45.7319 10.146C46.0119 10.146 46.2826 10.09 46.5439 9.978C46.8052 9.85667 47.0339 9.684 47.2299 9.46C47.4259 9.236 47.5846 8.96067 47.7059 8.634C47.8272 8.298 47.8879 7.91067 47.8879 7.472C47.8879 6.62267 47.6919 5.95533 47.2999 5.47C46.9079 4.98467 46.3759 4.742 45.7039 4.742C45.0319 4.742 44.4952 4.98933 44.0939 5.484C43.7019 5.96933 43.5059 6.63667 43.5059 7.486C43.5059 8.30733 43.7019 8.956 44.0939 9.432C44.4859 9.908 45.0319 10.146 45.7319 10.146ZM50.5093 3.762H51.6993V6.646H55.3673V3.762H56.5573V11H55.3673V7.668H51.6993V11H50.5093V3.762ZM61.4233 11.154C60.8446 11.154 60.3359 11.0607 59.8973 10.874C59.4679 10.6873 59.1086 10.426 58.8193 10.09C58.5299 9.754 58.3106 9.35267 58.1613 8.886C58.0213 8.41933 57.9513 7.91067 57.9513 7.36C57.9513 6.81867 58.0353 6.31933 58.2033 5.862C58.3713 5.39533 58.6046 4.994 58.9033 4.658C59.2113 4.322 59.5706 4.06067 59.9813 3.874C60.4013 3.68733 60.8586 3.594 61.3533 3.594C61.9973 3.594 62.5293 3.72933 62.9493 4C63.3786 4.26133 63.7193 4.59733 63.9713 5.008C64.2326 5.41867 64.4099 5.86667 64.5033 6.352C64.6059 6.83733 64.6479 7.29933 64.6293 7.738H59.2113C59.2019 8.05533 59.2393 8.35867 59.3233 8.648C59.4073 8.928 59.5426 9.18 59.7293 9.404C59.9159 9.61867 60.1539 9.79133 60.4433 9.922C60.7326 10.0527 61.0733 10.118 61.4653 10.118C61.9693 10.118 62.3799 10.0013 62.6973 9.768C63.0239 9.53467 63.2386 9.18 63.3413 8.704H64.5173C64.3586 9.52533 64.0086 10.1413 63.4673 10.552C62.9259 10.9533 62.2446 11.154 61.4233 11.154ZM63.3693 6.688C63.3506 6.408 63.2853 6.142 63.1733 5.89C63.0706 5.638 62.9259 5.42333 62.7393 5.246C62.5619 5.05933 62.3473 4.91467 62.0953 4.812C61.8526 4.7 61.5819 4.644 61.2833 4.644C60.9753 4.644 60.6953 4.7 60.4433 4.812C60.2006 4.91467 59.9906 5.05933 59.8133 5.246C59.6359 5.43267 59.4959 5.652 59.3933 5.904C59.2906 6.14667 59.2299 6.408 59.2113 6.688H63.3693ZM68.9428 11.154C68.3641 11.154 67.8555 11.0607 67.4168 10.874C66.9875 10.6873 66.6281 10.426 66.3388 10.09C66.0495 9.754 65.8301 9.35267 65.6808 8.886C65.5408 8.41933 65.4708 7.91067 65.4708 7.36C65.4708 6.81867 65.5548 6.31933 65.7228 5.862C65.8908 5.39533 66.1241 4.994 66.4228 4.658C66.7308 4.322 67.0901 4.06067 67.5008 3.874C67.9208 3.68733 68.3781 3.594 68.8728 3.594C69.5168 3.594 70.0488 3.72933 70.4688 4C70.8981 4.26133 71.2388 4.59733 71.4908 5.008C71.7521 5.41867 71.9295 5.86667 72.0228 6.352C72.1255 6.83733 72.1675 7.29933 72.1488 7.738H66.7308C66.7215 8.05533 66.7588 8.35867 66.8428 8.648C66.9268 8.928 67.0621 9.18 67.2488 9.404C67.4355 9.61867 67.6735 9.79133 67.9628 9.922C68.2521 10.0527 68.5928 10.118 68.9848 10.118C69.4888 10.118 69.8995 10.0013 70.2168 9.768C70.5435 9.53467 70.7581 9.18 70.8608 8.704H72.0368C71.8781 9.52533 71.5281 10.1413 70.9868 10.552C70.4455 10.9533 69.7641 11.154 68.9428 11.154ZM70.8888 6.688C70.8701 6.408 70.8048 6.142 70.6928 5.89C70.5901 5.638 70.4455 5.42333 70.2588 5.246C70.0815 5.05933 69.8668 4.91467 69.6148 4.812C69.3721 4.7 69.1015 4.644 68.8028 4.644C68.4948 4.644 68.2148 4.7 67.9628 4.812C67.7201 4.91467 67.5101 5.05933 67.3328 5.246C67.1555 5.43267 67.0155 5.652 66.9128 5.904C66.8101 6.14667 66.7495 6.408 66.7308 6.688H70.8888Z'
											fill='white'
										/>
									</svg>
								</BtnBeta>
							}
							modal
							lockScroll
							nested
							closeOnDocumentClick
							open={open}
							onClose={closeModal}
						>
							{/* @ts-expect-error  */}
							{close => <PopupTeacherNew close={close} teacher={expert} />}
						</Popup>
					</div>
					<p className={stls.item__name} onClick={() => setOpen(o => !o)}>
						{expert.name}
					</p>
					<p className={stls.item__desc}>{expert.description}</p>
				</div>
			) : (
				<></>
			)}
		</>
	)
}
