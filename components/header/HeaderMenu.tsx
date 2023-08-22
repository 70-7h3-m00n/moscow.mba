import stls from '@/styles/components/header/HeaderMenu.module.sass'
import { useState } from 'react'
import { useAt, useWindowWidth } from '@/hooks/index'
import {
	HeaderPrograms,
	HeaderTabs,
	HeaderMobileTabs
} from '@/components/header'

const HeaderMenu = ({ programs, handleMenu }) => {
	// TODO: this should be avoided and replaced with native css solution (media queries and display nones) because event listener on resize unnecessary slows apps perfomance, expecially on less powerful cpus. It will be ok for screen readers & robots. Screen readers don't read markup with display none. Robots are used to reading repeated content for mobile & desktop menus as long as semantics are good, so it won't effect seo
	// TODO: useWindowWidth should be removed
	const widthWindowMobile = useWindowWidth() < 1020

	const at = useAt()
	const links = [
		{
			href: '/about',
			val: at.en ? 'About' : 'Об академии',
			red: at.about
		},
		{
			href: '/teachers',
			val: at.en ? 'Experts' : 'Эксперты',
			red: at.teachers,
			locale: at.en ? 'ru' : undefined
		},
		{
			href: '/webinars',
			val: at.en ? 'Webinars' : 'Вебинары',
			red: at.webinars,
			locale: at.en ? 'ru' : undefined
		},
		{
			href: '/journal',
			val: at.en ? 'Journal' : 'Журнал',
			red: at.journal,
			locale: at.en ? 'ru' : undefined
		},
		{
			href: '/contact',
			val: at.en ? 'Contact' : 'Контакты',
			red: at.contact,
			locale: at.en ? 'ru' : undefined
		},
		{
			href: '/legal',
			val: at.en ? 'Legal' : 'Сведения об организации',
			red: at.legal,
			locale: at.en ? 'ru' : undefined
		}
	]

	const tabs = [
		{
			href: '/programs/mini/online',
			val: 'Mini MBA'
		},
		{
			href: '/programs/mba/online',
			val: 'MBA'
		},
		{
			href: '/programs/profession/online',
			val: at.en ? 'Professions' : 'Профессии'
		},
		{
			href: '/programs/course/online',
			val: at.en ? 'Courses' : 'Курсы'
		},
		{
			href: '/programs',
			val: at.en ? 'All programs' : 'Все программы'
		}
	]

	const [visible, setVisible] = useState('')
	const handleMouseEnter = e => setVisible(e.target.dataset.tab)

	return (
		<div className={stls.container}>
			<div className={stls.content}>
				{widthWindowMobile ? (
					<HeaderMobileTabs
						tabs={tabs}
						links={links}
						programs={programs}
						handleMenu={handleMenu}
						handleMouseEnter={handleMouseEnter}
						visible={visible}
					/>
				) : (
					<>
						<HeaderTabs
							tabs={tabs}
							handleMouseEnter={handleMouseEnter}
							handleMenu={handleMenu}
							visible={visible}
						/>
						<HeaderPrograms programs={programs} visible={visible} />
					</>
				)}
			</div>
		</div>
	)
}

export default HeaderMenu
