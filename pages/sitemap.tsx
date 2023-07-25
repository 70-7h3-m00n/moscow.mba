import React from 'react'
import { GetStaticProps, NextPage } from 'next'
import Link from 'next/link'
import stls from '@/styles/pages/Sitemap.module.sass'
import { routesFront } from '@/config/index'
import { handleGetStaticProps } from '@/lib/index'
import { TypePageJournalArticlesProps } from '@/types/index'

const Sitemap: NextPage<TypePageJournalArticlesProps> = ({
	programs,
	journalArticles
}) => {
	// Список типов программ и соответствующие URL-ссылки
	const programTypes = [
		{
			type: 'mba',
			title: 'MBA',
			url: `${routesFront.root}${routesFront.programsMbaOnline}`
		},
		{
			type: 'mini',
			title: 'Mini MBA',
			url: `${routesFront.root}${routesFront.programsMiniOnline}`
		},
		{
			type: 'course',
			title: 'Курсы',
			url: `${routesFront.root}${routesFront.programsCoursesOnline}`
		},
		{
			type: 'profession',
			title: 'Профессии',
			url: `${routesFront.root}${routesFront.programsProfessionOnline}`
		}
	]

	const links = [
		{ title: 'Об академии', href: '/about' },
		{ title: 'Сведения об организации', href: '/legal' },
		{ title: 'Корпоративное обучение для бизнеса', href: '/corporate-clients' },
		{ title: 'Способы оплаты', href: '/payment' },
		{ title: 'Контакты', href: '/contact' },
		{ title: 'Вебинары', href: '/webinars' }
	]

	// Функция для создания элемента списка ссылок
	const renderLinkListItem = ({ title, href }) => (
		<li className={stls.nestedListItem} key={title}>
			<Link className={stls.link} href={href}>
				{title}
			</Link>
		</li>
	)

	// Функция для создания элемента списка программы
	const renderProgramListItem = program => (
		<li className={stls.nestedListItem} key={program._id}>
			<Link
				className={stls.link}
				href={`${routesFront.programs}/${program.category.type}/${program.studyFormat}/${program.slug}`}>
				{program.title}
			</Link>
			{program.studyFormat === 'online' && (
				<span className={stls.span}>ONLINE</span>
			)}
		</li>
	)

	// Функция для создания списка программ определенного типа
	const renderProgramListByType = type => (
		<React.Fragment key={type.type}>
			<Link
				className={stls.linkTitle}
				href={`${routesFront.programs}/${type.type}`}>
				<h3>{type.title}</h3>
			</Link>
			<ul className={stls.nestedList}>
				{programs
					?.filter(program => program.category.type === type.type)
					?.sort((a, b) => a.title.localeCompare(b.title))
					?.map(renderProgramListItem)}
			</ul>
		</React.Fragment>
	)

	// Функция для создания элемента списка статей журнала
	const renderJournalArticleListItem = article => (
		<li className={stls.nestedListItem} key={article.slug}>
			<Link
				className={stls.link}
				href={`/journal/${article.slug}`}>{`${article.title}`}</Link>
		</li>
	)

	return (
		<div className={stls.container}>
			<h1 className={stls.mainTitle}>Карта сайта</h1>
			<ul className={stls.mainList}>
				<li className={stls.mainItem}>
					<h2 className={stls.nestedTitle}>Главная</h2>
					<ul className={stls.nestedList}>{links.map(renderLinkListItem)}</ul>
				</li>
				<li className={stls.mainItem}>
					<h2 className={stls.nestedTitle}>Программы</h2>
					{programTypes.map(renderProgramListByType)}
				</li>
				<li className={stls.mainItem}>
					<Link className={stls.linkTitle} href='/journal'>
						<h2 className={stls.nestedTitle}>Журнал</h2>
					</Link>
					<ul className={stls.nestedList}>
						{journalArticles
							?.sort((a, b) => a.title.localeCompare(b.title))
							?.map(renderJournalArticleListItem)}
					</ul>
				</li>
			</ul>
		</div>
	)
}

export default Sitemap

export const getStaticProps: GetStaticProps = async context =>
	await handleGetStaticProps({ page: routesFront.journal, context })
