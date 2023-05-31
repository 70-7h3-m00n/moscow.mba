import stls from '@/styles/pages/Sitemap.module.sass'
import Link from 'next/link'
import { routesFront } from '@/config/index'
import { GetStaticProps, NextPage } from 'next'
import { handleGetStaticProps } from '@/lib/index'
import { TypePageJournalArticlesProps } from '@/types/index'

const Sitemap: NextPage<TypePageJournalArticlesProps> = ({
	programs,
	journalArticles
}) => {
	return (
		<div className={stls.container}>
			<h1 className={stls.mainTitle}>Карта сайта</h1>
			<ul>
				<li>
					<ul className={stls.list}>
						<li>
							{' '}
							<Link className={stls.linkTitle} href='/'>
								<h3>Главная</h3>
							</Link>
						</li>
						<li>
							<Link className={stls.link} href='/about'>
								Об академии
							</Link>
						</li>
						<li>
							<Link className={stls.link} href='/legal'>
								Сведения об организации
							</Link>
						</li>
						<li>
							<Link className={stls.link} href='/corporate-clients'>
								Корпоративное обучение для бизнеса
							</Link>
						</li>
						<li>
							<Link className={stls.link} href='/payment'>
								Способы оплаты
							</Link>
						</li>
						<li>
							<Link className={stls.link} href='/contact'>
								Контакты
							</Link>
						</li>
						<li>
							<Link className={stls.link} href='/webinars'>
								Вебинары
							</Link>
						</li>
					</ul>
				</li>

				<li>
					<Link className={stls.linkTitle} href='/programs'>
						<h2>Программы</h2>
					</Link>
					<Link
						className={stls.linkTitle}
						href={'https://moscow.mba/programs?filterTypeProgram=mba'}>
						<h3>MBA</h3>
					</Link>
					<ul className={stls.list}>
						{programs
							?.filter(program => program.category.type === 'mba')
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
					<Link
						className={stls.linkTitle}
						href={'https://moscow.mba/programs?filterTypeProgram=mini'}>
						<h3>Mini MBA</h3>
					</Link>
					<ul className={stls.list}>
						{programs
							?.filter(program => program.category.type === 'mini')
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
					<Link
						className={stls.linkTitle}
						href={'https://moscow.mba/programs?filterTypeProgram=course'}>
						<h3>Курсы</h3>
					</Link>
					<ul className={stls.list}>
						{programs
							?.filter(program => program.category.type === 'course')
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
					<Link
						className={stls.linkTitle}
						href={'https://moscow.mba/programs?filterTypeProgram=profession'}>
						<h3>Профессии</h3>
					</Link>
					<ul className={stls.list}>
						{programs
							?.filter(program => program.category.type === 'profession')
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
				</li>
				<li>
					<Link className={stls.linkTitle} href='/journal'>
						<h3>Журнал</h3>
					</Link>
					<ul className={stls.list}>
						{journalArticles
							?.sort((a, b) => a.title.localeCompare(b.title))
							?.map(article => (
								<li key={article.slug}>
									<Link href={`/journal/${article.slug}`}>
										{`${article.title}`}
									</Link>
								</li>
							))}
					</ul>
				</li>
			</ul>
		</div>
	)
}

export default Sitemap

export const getStaticProps: GetStaticProps = async context =>
	await handleGetStaticProps({ page: routesFront.journal, context })
