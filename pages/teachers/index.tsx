import stls from '@/styles/pages/teachers/PageTeachers.module.sass'
import breadcrumbsStls from '@/styles/components/general/Breadcrumbs.module.sass'
import { GetStaticProps } from 'next'
import { NextSeo } from 'next-seo'
import truncate from 'truncate'
import { routesFront, companyName, preview } from '@/config/index'
import { handleGetStaticProps } from '@/lib/index'
import { usePageHandleContext, useAt } from '@/hooks/index'
import { Wrapper } from '@/components/layout'
import { Breadcrumbs } from '@/components/general'
import { SeoOrganizationJsonLd } from '@/components/seo'
import { Teachers } from 'modules'

const PageTeachers = ({ programs, teachers }) => {
	usePageHandleContext({ programs })

	const at = useAt()

	const seoParams = {
		title: `Российские и зарубежные эксперты • MBA - ${companyName}`,
		desc: truncate(
			'Перенимайте уникальный опыт международных экспертов, адаптированный под рынок РФ',
			120
		),
		canonical: `${routesFront.root}${routesFront.teachers}`
	}

	return (
		<>
			<NextSeo
				title={seoParams.title}
				description={seoParams.desc}
				canonical={seoParams.canonical}
				nofollow={preview}
				noindex={preview}
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
			<section className={breadcrumbsStls.jumbotronGeneral}>
				<Wrapper>
					<Breadcrumbs />
				</Wrapper>
			</section>
			<Teachers atStandAlonePage teachers={teachers} />
		</>
	)
}

export const getStaticProps: GetStaticProps = async context =>
	await handleGetStaticProps({ page: routesFront.teachers, context })

export default PageTeachers
