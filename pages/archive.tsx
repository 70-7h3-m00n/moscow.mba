import stls from '@/styles/pages/Sitemap.module.sass'
import Link from 'next/link'
import { routesFront } from '@/config/index'
import { GetStaticProps, NextPage } from 'next'
import { handleGetStaticProps } from '@/lib/index'
import { TypePageJournalArticlesProps } from '@/types/index'

const Archive: NextPage<TypePageJournalArticlesProps> = ({ programs }) => {
	return (
		<div className={stls.container}>
			<h1 className={stls.mainTitle}>Архивные программы</h1>
			<ul className={stls.list}>
				{programs
					?.filter(program => !program.isActive)
					?.sort((a, b) => a.title.localeCompare(b.title))
					?.map(program => (
						<li className={stls.item} key={program._id}>
							<Link
								className={stls.link}
								href={`/programs/${program.category.type}/${program.studyFormat}/${program.slug}`}>
								<p className={stls.linkParagraph}>{program.title}</p>
							</Link>
							{program.studyFormat === 'online' && (
								<span className={stls.span}>ONLINE</span>
							)}
						</li>
					))}
			</ul>
		</div>
	)
}

export default Archive

export const getStaticProps: GetStaticProps = async context =>
	await handleGetStaticProps({ page: routesFront.journal, context })
