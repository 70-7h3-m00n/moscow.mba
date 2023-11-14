import App from 'next/app'
import '@/styles/app.sass'
import 'reactjs-popup/dist/index.css'
import { useEffect, useState } from 'react'
import Head from 'next/head'
import Router from 'next/router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import TagManager from 'react-gtm-module'
import { DefaultSeo, LogoJsonLd } from 'next-seo'
import SEO from '../seo.config'
import { usePreserveScroll } from '@/hooks/index'
import { dev, gtmId, mangoScript, routesFront } from '@/config/index'
import { Header, Main, WrapperPage, Footer } from '@/components/layout'
import { MenuState, OverlayState, ContextStaticProps } from '@/context/index'
import { filledUpFormWithoutSubmission } from '../helpers'

function MyApp({ Component, pageProps, router }) {
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
		const fullDomainName = `${window.location.protocol}//${window.location.host}`
		console.log('fullDomainName: ', fullDomainName)

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
				<meta name='yandex-verification' content='535e6f9322915158' />
				<meta name='yandex-verification' content='0529f05a80cf0830' />
				{!dev && (
					<script
						type='text/javascript'
						dangerouslySetInnerHTML={{
							__html: `
					(function(w, d, s, h, id) {
							w.roistatProjectId = id; w.roistatHost = h;
							var p = d.location.protocol == "https:" ? "https://" : "http://";
							var u = /^.*roistat_visit=[^;]+(.*)?$/.test(d.cookie) ? "/dist/module.js" : "/api/site/1.0/"+id+"/init?referrer="+encodeURIComponent(d.location.href);
							var js = d.createElement(s); js.charset="UTF-8"; js.async = 1; js.src = p+h+u; var js2 = d.getElementsByTagName(s)[0]; js2.parentNode.insertBefore(js, js2);
					})(window, document, 'script', 'cloud.roistat.com', '4c5a69eb8374b9673e7545e55aa19050');`
						}}
					/>
				)}
				<script
					className='js-whatsapp-message-container'
					type='text/javascript'
					dangerouslySetInnerHTML={{
						__html: `"[Номер заявки: {roistat_visit}] Здравствуйте! Хочу уточнить информацию по поводу  "`
					}}
				/>
				<script
					className='js-whatsapp-message-container'
					type='text/javascript'
					dangerouslySetInnerHTML={{
						__html: `
							(function() {
									if (window.roistat !== undefined) {
											handler();
									} else {
											var pastCallback = typeof window.onRoistatAllModulesLoaded === "function" ? window.onRoistatAllModulesLoaded : null;
											window.onRoistatAllModulesLoaded = function () {
													if (pastCallback !== null) {
															pastCallback();
													}
													handler();
											};
									}
					
									function handler() {
											function init() {
													appendMessageToLinks();
					
													var delays = [1000, 5000, 15000];
													setTimeout(function func(i) {
															if (i === undefined) {
																	i = 0;
															}
															appendMessageToLinks();
															i++;
															if (typeof delays[i] !== 'undefined') {
																	setTimeout(func, delays[i], i);
															}
													}, delays[0]);
											}
					
											function replaceQueryParam(url, param, value) {
													var explodedUrl = url.split('?');
													var baseUrl = explodedUrl[0] || '';
													var query = '?' + (explodedUrl[1] || '');
													var regex = new RegExp("([?;&])" + param + "[^&;]*[;&]?");
													var queryWithoutParameter = query.replace(regex, "$1").replace(/&$/, '');
													return baseUrl + (queryWithoutParameter.length > 2 ? queryWithoutParameter  + '&' : '?') + (value ? param + "=" + value : '');
											}
					
											function appendMessageToLinks() {
													var message = document.querySelector('.js-whatsapp-message-container').text;
													var text = message.replace(/{roistat_visit}/g, window.roistatGetCookie('roistat_visit'));
													text = encodeURI(text);
													var linkElements = document.querySelectorAll('[href*="//wa.me"], [href*="//api.whatsapp.com/send"], [href*="//web.whatsapp.com/send"], [href^="whatsapp://send"]');
													for (var elementKey in linkElements) {
															if (linkElements.hasOwnProperty(elementKey)) {
																	var element = linkElements[elementKey];
																	element.href = replaceQueryParam(element.href, 'text', text);
															}
													}
											}
											if (document.readyState === 'loading') {
													document.addEventListener('DOMContentLoaded', init);
											} else {
													init();
											}
									};
							})();`
					}}
				/>
				{!dev && (
					<script
						type='text/javascript'
						dangerouslySetInnerHTML={{
							__html: mangoScript
						}}
					/>
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
							<Footer />
						</WrapperPage>
					</MenuState>
				</OverlayState>
			</ContextStaticProps.Provider>
		</>
	)
}

export default MyApp
