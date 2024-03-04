import '@/styles/app.sass'

import { useEffect, useState } from 'react'
import Head from 'next/head'
import Router from 'next/router'

import SEO from '../seo.config'
import TagManager from 'react-gtm-module'
import { DefaultSeo, NextSeo, LogoJsonLd } from 'next-seo'
import { Roistat } from '@/components/seo/Roistat'

import 'reactjs-popup/dist/index.css'
import NProgress from 'nprogress'
import { useAt, usePreserveScroll } from '@/hooks/index'
import { dev, gtmId, routesFront } from '@/config/index'
import { filledUpFormWithoutSubmission } from '../helpers'
import { MenuState, OverlayState, ContextStaticProps } from '@/context/index'
import {
	Header,
	Main,
	WrapperPage,
	Footer,
	FooterNew
} from '@/components/layout'

function MyApp({ Component, pageProps, router }) {
	const at = useAt()
	const [programs, setPrograms] = useState(pageProps.programs || null)
	const [program, setProgram] = useState(pageProps.program || null)
	const [until, setUntil] = useState(pageProps.until || null)
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
				urlUtmsArr?.split('&')?.forEach(utm => {
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

		// vercel previews
		const fullDomainName = window.location.host
		if (fullDomainName === 'moscow-mba-git-dev-ipe.vercel.app') {
			console.log('fullDomainName: >>>>>>>>> moscow-mba-git-dev-ipe.vercel.app')
		}

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

	return (
		<>
			<Head>
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1, maximum-scale=1'
				/>
				{!dev && <Roistat />}
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
					setStudyFieldsWithSlugs,
					until,
					setUntil: () => {}
				}}
			>
				<OverlayState>
					<MenuState>
						<WrapperPage>
							<Header />
							<Main>
								<Component {...pageProps} />
							</Main>
							{at.new ? <FooterNew /> : <Footer />}
						</WrapperPage>
					</MenuState>
				</OverlayState>
			</ContextStaticProps.Provider>
		</>
	)
}

export default MyApp
