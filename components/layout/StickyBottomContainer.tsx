import stls from '@/styles/components/layout/StickyBottomContainer.module.sass'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Overlay, StickyBottom } from '@/components/layout'
import { AskQuestion } from '@/components/general'
import { AskQuestionForm, AskQuestionWidget } from '@/components/forms'
import { routesFront } from '@/config/index'
import { clickedAskQuestion } from '@/helpers/index'
import { useAt } from '@/hooks/index'

const StickyBottomContainer = () => {
	const [clickedAsk, setClickedAsk] = useState(false)
	const [isStickyBottomShown, setIsStickyBottomShown] = useState(false)
	const [stickyHasBeenClosed, setStickyHasBeenClosed] = useState(false)
	const [isMounted, setIsMounted] = useState(false)

	const router = useRouter()
	const at = useAt()

	const containerClasses = [
		stls.container,
		isStickyBottomShown && !stickyHasBeenClosed
			? stls.stickyShown
			: stls.stickyClosed
	]

	const handleClickedAskQuestion = () => {
		clickedAskQuestion({ url: `${routesFront.root}${router.asPath}` })
		setClickedAsk(true)
		setIsStickyBottomShown(false)
	}

	const handleAskQuestionFormClose = () => setClickedAsk(false)

	useEffect(() => setIsMounted(true), [])

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
				// const pageHeight = document.body.scrollHeight
				// window.pageYOffset > 1500 &&
				// window.pageYOffset < pageHeight - 2500 &&
				// !clickedAsk
				// 	? setIsStickyBottomShown(true)
				// 	: setIsStickyBottomShown(false)

				const pageHeight = document.body.scrollHeight
				window.pageYOffset > 500 && !clickedAsk
					? setIsStickyBottomShown(true)
					: setIsStickyBottomShown(false)
			}
		})
	}, [isStickyBottomShown, stickyHasBeenClosed, clickedAsk])

	if (!isMounted || at.journal) return null

	return (
		<div className={containerClasses.join(' ')}>
			{clickedAsk ? (
				<>
					<Overlay handleAskQuestionFormClose={handleAskQuestionFormClose} />
					{/* <AskQuestionForm
            handleAskQuestionFormClose={handleAskQuestionFormClose}
          /> */}
					<AskQuestionWidget
						handleAskQuestionFormClose={handleAskQuestionFormClose}
					/>
				</>
			) : (
				<AskQuestion
					handleClickedAskQuestion={handleClickedAskQuestion}
					stickyShown={isStickyBottomShown}
				/>
			)}
			{/* <StickyBottom
				openStickyModule={() => setIsStickyBottomShown(true)}
				hideStickyModule={() => setIsStickyBottomShown(false)}
				closeStickyModule={() => setStickyHasBeenClosed(true)}
				clickedAsk={clickedAsk}
			/> */}
		</div>
	)
}

export default StickyBottomContainer
