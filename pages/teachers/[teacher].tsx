import stls from '@/styles/pages/teachers/PageTeachersTeacher.module.sass'
import type { NextPage } from 'next'
import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { TypePageTeacherProps } from '@/types/index'
import { NextSeo } from 'next-seo'
import cn from 'classnames'
import truncate from 'truncate'
import parse from 'html-react-parser'
import { marked } from 'marked'
import { getImageHeight } from '@/helpers/index'
import { handleGetStaticPaths, handleGetStaticProps } from '@/lib/index'
import { usePageHandleContext } from '@/hooks/index'
import { routesFront, companyName, preview } from '@/config/index'
import { Wrapper } from '@/components/layout'
import { ImgTeachersTeacher } from '@/components/images'
import { SeoOrganizationJsonLd } from '@/components/seo'

const PageTeachersTeacher: NextPage<TypePageTeacherProps> = ({
	programs,
	teacher
}) => {
	usePageHandleContext({ programs })

	const router = useRouter()

	// router.beforePopState(state => {
	//   state.options.scroll = false
	//   return true
	// })

	const image = (
		<ImgTeachersTeacher
			src={teacher?.portrait?.url}
			width={teacher?.portrait?.url ? 270 : undefined}
			height={getImageHeight({
				width: 270,
				widthInitial: teacher?.portrait?.width,
				heightInitial: teacher?.portrait?.height
			})}
			alt={teacher?.name}
			title={teacher?.name}
		/>
	)

	// const teachersRemoveCanonical = [
	// 	'mariya-tatkina',
	// 	'bragin-vladimir',
	// 	'dmitrij-chernobrovkin',
	// 	'elena-chigaeva',
	// 	'maksim-sokolovskij'
	// ]

	// const removeCanonical =
	// 	teachersRemoveCanonical.includes(teacher?.slug) || !!teacher?.slug

	const seoParams = {
		title: `${teacher?.name || 'Преподаватель'}${` • MBA - ${companyName}`}`,
		desc: truncate(
			`${
				teacher?.description ||
				'Эксперт по бизнес-планированию, инвестиционному и финансовому анализу'
			}`,
			120
		),
		canonical: `${routesFront.root}${routesFront.teachers}/${
			teacher?.slug || ''
		}`
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
			<section>
				<Wrapper column>
					{/* <button
            className={cn('button', stls.btnBack)}
            onClick={() => router.back()}>
            Назад
          </button> */}
					<div className={stls.content}>
						<div className={cn(stls.left, stls.laptopDesktopWidescreen)}>
							{image}
						</div>
						<div className={stls.right}>
							<h1 className={stls.title}>{teacher?.name || 'Преподаватель'}</h1>
							<div className={stls.about}>
								<div className={stls.phoneTablet}>{image}</div>
								<h2 className={stls.subtitle}>Об эксперте:</h2>
								{teacher?.descriptionItems?.length > 0 ? (
									<ul className={stls.list}>
										{teacher.descriptionItems
											.filter(item => item?.item)
											.map((item, idx) => (
												<li
													key={`${item || 'teacherListItem'}-${idx}`}
													className={stls.listItem}>
													{parse(marked(item?.item))}
												</li>
											))}
									</ul>
								) : (
									<p className={stls.p}>{teacher?.description}</p>
								)}
							</div>
						</div>
					</div>
				</Wrapper>
			</section>
		</>
	)
}

export const getStaticPaths: GetStaticPaths = async () =>
	await handleGetStaticPaths({ page: routesFront.teachersTeacher })

export const getStaticProps: GetStaticProps = async context =>
	await handleGetStaticProps({ page: routesFront.teachersTeacher, context })

export default PageTeachersTeacher
