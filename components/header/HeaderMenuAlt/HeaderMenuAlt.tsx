import stls from './HeaderMenuAlt.module.sass'
import { useContext, useState } from 'react'
import { useAt, useWindowWidth } from '@/hooks/index'
import {
	HeaderPrograms,
	HeaderTabs,
	HeaderMobileTabs
} from '@/components/header'
import { ContextStaticProps } from '@/context/index'
import { HeaderMobileTabsAlt } from './HeaderMobileTabsAlt/HeaderMobileTabsAlt'

export const HeaderMenuAlt = ({ programs, handleMenu }) => {
	// TODO: this should be avoided and replaced with native css solution (media queries and display nones) because event listener on resize unnecessary slows apps perfomance, expecially on less powerful cpus. It will be ok for screen readers & robots. Screen readers don't read markup with display none. Robots are used to reading repeated content for mobile & desktop menus as long as semantics are good, so it won't effect seo
	// TODO: useWindowWidth should be removed
	const widthWindowMobile = useWindowWidth() < 1020
	const at = useAt()

	const { program } = useContext(ContextStaticProps)

	const menuData = [
		{ val: 'Как проходит обучение', href: '#process' },
		{ val: 'Программа', href: '#program-modules' },
		{ val: 'Стоимость', href: '#study-cost' },
		{ val: 'Преподаватели', href: '#experts' },
		{ val: 'Отзывы', href: '#reviews' },
		...(program?.employment === false
			? []
			: [{ val: 'Трудоустройство', href: '#employment' }])
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
					<HeaderMobileTabsAlt
						tabs={tabs}
						links={menuData}
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
