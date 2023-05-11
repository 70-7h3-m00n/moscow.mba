import stls from '@/styles/components/header/HeaderTabs.module.sass'
import Link from 'next/link'
import { useAt } from '@/hooks/index'

const HeaderTabs = ({ tabs, handleMouseEnter, handleMenu, visible }) => {
	const currentTab = (visible && visible.slice(-1) - 1) || 0
	const at = useAt()
	return (
		<ul className={stls.container}>
			{tabs.map((item, idx) => (
				<li key={item.val + idx} className={stls.item}>
					<Link
						legacyBehavior
						href={item.href}
						{...(at.en ? { locale: 'ru' } : undefined)}>
						<a
							className={
								idx === currentTab
									? stls.active
									: item.val === (at.en ? 'All programs' : 'Все программы')
									? stls.all
									: undefined
							}
							data-tab={
								item.val !== (at.en ? 'All programs' : 'Все программы') &&
								`#header-podmenu-${idx + 1}`
							}
							onClick={() => handleMenu(false)}
							onMouseEnter={e => handleMouseEnter(e)}>
							{item.val}
						</a>
					</Link>
				</li>
			))}

			<div className={stls.executive}>
				<div className={stls.label}>
					<span className={stls.text}>Premium</span>
				</div>
				<Link
					legacyBehavior
					href='/programs/executive'
					{...(at.en ? { locale: 'ru' } : undefined)}>
					<a className={stls.link} onClick={() => handleMenu(false)}>
						Executive MBA
					</a>
				</Link>
			</div>
		</ul>
	)
}

export default HeaderTabs
