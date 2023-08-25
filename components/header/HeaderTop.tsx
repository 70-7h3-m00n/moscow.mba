import stls from '@/styles/components/header/HeaderTop.module.sass'
import { useAt } from '@/hooks/index'
import { HeaderNav, HeaderInformation } from '@/components/header'

const HeaderTop = ({ handleMenu, openMenu }) => {
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
			red: at.teachers && !at.teachersTeacher,
			locale: at.en ? 'ru' : undefined
		},
		{
			href: '/seminars',
			val: at.en ? 'Seminars' : 'Семинары',
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

	return (
		<>
			<HeaderInformation
				classNames={[stls.border]}
				handleMenu={handleMenu}
				openMenu={openMenu}
			/>
			{!at.promo && (
				<HeaderNav
					links={links}
					classNames={[stls.border]}
					handleMenu={handleMenu}
					openMenu={openMenu}
				/>
			)}
		</>
	)
}

export default HeaderTop
