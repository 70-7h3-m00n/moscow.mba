import stls from '@/styles/pages/promo/Index.module.sass'
import { GetStaticProps } from 'next'
import { NextSeo } from 'next-seo'
import truncate from 'truncate'
import { routesFront, companyName } from '@/config/index'
import { handleGetStaticProps } from '@/lib/index'
import { usePageHandleContext, useAt } from '@/hooks/index'
import {
	JumbotronCta,
	WhatWillYouLearn,
	CourseOptions,
	ProgramDesc,
	ContactUs,
	Accreditation,
	Diploma,
	WhoItIsFor
} from '@/components/sections'
import { SeoOrganizationJsonLd } from '@/components/seo'

const PagePromo = ({ programs }) => {
	usePageHandleContext({ programs })

	const at = useAt()

	const courseOptions = {
		whoIsFor: [
			{
				name: 'Online MBA',
				description: (
					<>
						<span className={stls.firstPara}>
							Программа проходит в онлайн-формате. Разработана специально для
							предпринимателей и руководителей, которые ценят свое время и хотят
							пройти обучение без отрыва от работы.{' '}
						</span>{' '}
						Во время обучения Вы будете получать обратную связь от экспертов по
						решению кейсов, проектным работам и домашним заданиям. Сможете в
						любое время задать вопрос и получить полезные советы и рекомендации.
					</>
				)
			},
			{
				name: 'Blended MBA',
				description: (
					<>
						<span className={stls.firstPara}>
							Смешанная программа MBA с очными сессиями. Разработана для
							предпринимателей и руководителей, которые готовы выделять время на
							посещение наших кампусов в Москве.{' '}
						</span>{' '}
						Во время обучения Вы сможете как в онлайн формате, так и очно
						получать обратную связь от экспертов и коллег по решению кейсов,
						проектным работам и домашним заданиям.
					</>
				)
			}
		]
	}

	const seoParams = {
		title: `Программы Mini MBA • ${companyName}`,
		desc: truncate('Программы Mini MBA', 120),
		canonical: `${routesFront.root}${routesFront.promo}`
	}

	return (
		<>
			<NextSeo
				title={seoParams.title}
				description={seoParams.desc}
				canonical={seoParams.canonical}
				openGraph={{
					url: seoParams.canonical,
					title: seoParams.title,
					description: seoParams.desc,
					images: [
						{
							url: `${routesFront.root}${routesFront.assetsImgsIconsManifestIcon512}`,
							width: 512,
							height: 512,
							alt: companyName,
							type: 'image/png'
						}
					],
					site_name: companyName
				}}
			/>
			<SeoOrganizationJsonLd />
			<JumbotronCta />
			<div className={stls.container}>
				<CourseOptions />
				<ContactUs
					title={
						at.en
							? 'Receive a consultation on the MBA programs'
							: 'Получите консультацию по программам'
					}
				/>
				<WhatWillYouLearn />
				<ProgramDesc />
				<Accreditation />
				<Diploma darkBackground />
				<WhoItIsFor program={courseOptions} />
				<ContactUs
					title={'Есть вопросы?'}
					titleNewStr={'Получите консультацию по программам MBA'}
					overlapsFooter
				/>
			</div>
		</>
	)
}

export const getStaticProps: GetStaticProps = async context =>
	await handleGetStaticProps({ page: routesFront.promo, context })

export default PagePromo
