import React from 'react'
import { GetStaticProps, NextPage } from 'next'
import Link from 'next/link'
import stls from '@/styles/pages/Sitemap.module.sass'
import { routesFront } from '@/config/index'
import { handleGetStaticProps } from '@/lib/index'
import { TypePageJournalArticlesProps } from '@/types/index'

const Archive: NextPage<TypePageJournalArticlesProps> = ({ programs }) => {
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
			title: 'Профессиональная переподготовка',
			url: `${routesFront.root}${routesFront.programsProfessionOnline}`
		}
	]

	// Функция для создания элемента списка программы
	const renderProgramListItem = program => (
		<li className={stls.nestedListItem} key={program._id}>
			<Link
				className={stls.link}
				href={`${routesFront.programs}/${program.category.type}/${program.studyFormat}/${program.slug}`}
			>
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
				href={`${routesFront.programs}/${type.type}`}
			>
				<h3>{type.title}</h3>
			</Link>
			<ul className={stls.nestedList}>
				{programs
					?.filter(program => program.isActive === null)
					?.filter(program => program.category.type === type.type)
					?.sort((a, b) => a.title.localeCompare(b.title))
					?.map(renderProgramListItem)}
			</ul>
		</React.Fragment>
	)

	return (
		<div className={stls.container}>
			<h1 className={stls.mainTitle}>Архивные программы</h1>
			<ul className={stls.mainList}>
				<li className={stls.mainItem}>
					<h2 className={stls.nestedTitle}>Программы</h2>
					{programTypes.map(renderProgramListByType)}
				</li>
			</ul>
		</div>
	)
}

export default Archive

export const getStaticProps: GetStaticProps = async context =>
	await handleGetStaticProps({ page: routesFront.journal, context })
