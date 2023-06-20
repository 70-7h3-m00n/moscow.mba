import stls from '@/styles/pages/Page404.module.sass'
import { useAt } from '@/hooks/index'
import srcDesktop from '@/public/assets/images/404/404.png'
import srcMobile from '@/public/assets/images/404/404mobile.png'
import Image from 'next/legacy/image'
import Link from 'next/link'
import Popup from 'reactjs-popup'
import { PopupForm } from '@/components/popups'
import useWindowWidth from '@/hooks/useWindowWidth'
import { useEffect, useState } from 'react'

const Page404 = () => {
	const at = useAt()

	const widthWindow = useWindowWidth()
	const [isMobile, setIsMobile] = useState(false)

	useEffect(() => {
		if (widthWindow <= 767) {
			setIsMobile(true)
		} else {
			setIsMobile(false)
		}
	}, [widthWindow])

	return (
		<div className={stls.wrapper}>
			<Image
				className={stls.image}
				src={isMobile ? srcMobile : srcDesktop}
				alt='404'
			/>
			<div className={stls.container}>
				<h1 className={stls.h1}>
					{at.en ? 'Page not found' : 'Страница не найдена!'}
				</h1>
				<p className={stls.paragraph}>
					Похоже, мы не можем найти нужную вам страницу.
				</p>
				<p className={stls.paragraph}>Вот несколько полезных ссылок:</p>
				<div className={stls.buttonBox}>
					<Link href='/programs/mba' legacyBehavior>
						<button className={stls.button}>MBA</button>
					</Link>
					<Link href='/programs/mini' legacyBehavior>
						<button className={stls.button}>MINI MBA</button>
					</Link>
					<Link href='/programs/profession/' legacyBehavior>
						<button className={stls.button}>Профессии</button>
					</Link>
					<Link href='/programs/course/' legacyBehavior>
						<button className={stls.button}>Курсы</button>
					</Link>
				</div>
				<div className={stls.buttonBoxBottom}>
					<Link href='/' legacyBehavior>
						<button className={stls.homepageLink}>ВЕРНУТЬСЯ НА ГЛАВНУЮ</button>
					</Link>
					<>
						<Popup
							trigger={
								<a className={stls.link}>
									{at.en ? (
										<>GET&nbsp;CONSULTATION</>
									) : (
										<>ПОЛУЧИТЬ&nbsp;КОНСУЛЬТАЦИЮ</>
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
									formName='Заявка со страницы 404 "Получить консультацию'
								/>
							)}
						</Popup>
					</>
				</div>
			</div>
		</div>
	)
}

export default Page404
