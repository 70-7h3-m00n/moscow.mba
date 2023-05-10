import App from 'next/app'
import '@/styles/app.sass'
import 'reactjs-popup/dist/index.css'
import { useEffect, useState } from 'react'
import Head from 'next/head'
import Router, { useRouter } from 'next/router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import TagManager from 'react-gtm-module'
import { DefaultSeo, LogoJsonLd } from 'next-seo'
import SEO from '../seo.config'
import { usePreserveScroll } from '@/hooks/index'
import { dev, gtmId, routesFront } from '@/config/index'
import { Header, Main, WrapperPage, Footer } from '@/components/layout'
import { MenuState, OverlayState, ContextStaticProps } from '@/context/index'
import { filledUpFormWithoutSubmission } from '../helpers'

function MyApp({ Component, pageProps, router }) {
	const [programs, setPrograms] = useState(pageProps.programs || null)
	const [program, setProgram] = useState(pageProps.program || null)
	const [curStudyField, setCurStudyField] = useState(null)
	const [studyFields, setStudyFields] = useState(
		programs?.length > 0
			? Array.from(
					new Set([
						...programs
							?.filter(program => program.study_field?.name)
							?.map(program => program.study_field?.name)
					])
			  )
			: []
	)
	const [studyFieldsWithSlugs, setStudyFieldsWithSlugs] = useState(
		studyFields?.length > 0
			? studyFields?.map(studyField => ({
					label: studyField,
					slug: programs?.reduce((acc, cur) => {
						cur?.study_field?.name === studyField &&
							(acc = cur?.study_field?.slug)
						return acc.trim()
					}, '')
			  }))
			: null
	)

	usePreserveScroll()
	const urlParamLocale = router.query.locale

	const [loading, setLoading] = useState(false)
	useEffect(() => {
		if (!dev) TagManager.initialize({ gtmId, dataLayerName: 'dataLayer' })

		const utms = JSON.parse(sessionStorage.getItem('utms')) || {}
		let utmsAreEmpty = false

		for (const key in utms) {
			if (utms.hasOwnProperty(key)) {
				utmsAreEmpty = true
				break
			}
		}

		if (!utmsAreEmpty) {
			const urlUtmsArr = router.asPath.split('?')[1]

			urlUtmsArr &&
				urlUtmsArr.split('&').forEach(utm => {
					utms[utm.split('=')[0]] = utm.split('=')[1]
				})
			sessionStorage.setItem('utms', JSON.stringify(utms))
		}

		const referer = sessionStorage.getItem('referrer')
		if (!referer) {
			sessionStorage.setItem('referer', JSON.stringify(document.referrer))
		}

		urlParamLocale &&
			sessionStorage.setItem('locale', urlParamLocale.toString())

		NProgress.configure({
			// minimum: 0.3,
			// easing: 'ease',
			// speed: 800,
			showSpinner: false
		})

		const start = () => {
			NProgress.start()
			setLoading(true)
		}
		const end = () => {
			NProgress.done()
			setLoading(false)
		}

		const handleBeforeUnload = () => {
			if (window.sessionStorage.getItem('formFilled') === 'true') {
				filledUpFormWithoutSubmission({
					url: `${routesFront.root}${router.asPath}`
				})
			}
		}

		Router.events.on('routeChangeStart', start)
		Router.events.on('routeChangeComplete', end)
		Router.events.on('routeChangeError', end)

		window.addEventListener('beforeunload', handleBeforeUnload)

		return () => {
			Router.events.off('routeChangeStart', start)
			Router.events.off('routeChangeComplete', end)
			Router.events.off('routeChangeError', end)

			window.removeEventListener('beforeunload', handleBeforeUnload)
		}
	}, [router, urlParamLocale])

	if (!dev) {
		console.log = () => undefined
	}

	const pixelArray = [
		'/programs/mba/online/corporate-governance-and-strategy-of-business-development',
		'/programs/mba/online/construction-management',
		'/programs/mba/online/project-management',
		'/programs/mba/online/health-administration',
		'/programs/mini/online/hotel-management',
		'/programs/mini/online/construction-management',
		'/programs/mini/online/sales-director',
		'/programs/mini/online/small-business-management',
		'/programs/mini/online/marketing-management',
		'/programs/mini/online/human-resource',
		'/programs/mini/online/project-management',
		'/programs/mini/online/health-administration',
		'/programs/mini/online/financial-management',
		'/programs/profession/online/komercheski-director',
		'/programs/profession/online/personnel-management'
	]

	return (
		<>
			<Head>
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1, maximum-scale=1'
				/>
				{!dev && pixelArray.includes(router.state?.asPath) && (
					<script
						type='text/javascript'
						dangerouslySetInnerHTML={{
							__html: `(function (d, w) {
								var n = d.getElementsByTagName('script')[0],
									s = d.createElement('script')
								s.type = 'text/javascript'
								s.async = true
								s.src =
									'https://qoopler.ru/index.php?ref=' +
									d.referrer +
									'&page=' +
									encodeURIComponent(w.location.href)
								n.parentNode.insertBefore(s, n)
							})(document, window)`
						}}>
						{' '}
					</script>
				)}
			</Head>
			<DefaultSeo {...SEO} />
			<LogoJsonLd
				logo='https://moscow.mba/logo.jpg'
				url='https://moscow.mba/'
			/>
			<ContextStaticProps.Provider
				value={{
					programs,
					program,
					configPrograms: [],
					renderPrograms: [],
					curStudyField,
					studyFields,
					studyFieldsWithSlugs,
					setPrograms,
					setProgram,
					setConfigPrograms: () => {},
					setRenderPrograms: () => {},
					setCurStudyField,
					setStudyFields,
					setStudyFieldsWithSlugs
				}}>
				<OverlayState>
					<MenuState>
						<WrapperPage>
							<Header />
							<Main>
								<Component {...pageProps} />
							</Main>
							<Footer />
						</WrapperPage>
					</MenuState>
				</OverlayState>
			</ContextStaticProps.Provider>
		</>
	)
}

export default MyApp
