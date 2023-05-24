import stls from '@/styles/components/btns/BtnScrollTop.module.sass'

const BtnScrollTop = () => {
	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' })
	}

	return (
		<div className={stls.container}>
			<button onClick={scrollToTop} className={stls.button}>
				<svg
					className={stls.buttonArrow}
					width='14'
					height='8'
					viewBox='0 0 14 8'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'>
					<path
						d='M13 7L7 1L1 7'
						stroke='white'
						strokeWidth='2'
						strokeLinecap='round'
						strokeLinejoin='round'
					/>
				</svg>
			</button>
			<span className={stls.text}>Наверх</span>
		</div>
	)
}

export default BtnScrollTop
