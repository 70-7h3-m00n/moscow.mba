import stls from '@/styles/components/header/HeaderNav.module.sass'
import Link from 'next/link'
import cn from 'classnames'
import { getClassNames } from '@/helpers/index'
import { useAt } from '@/hooks/index'
import { Wrapper } from '@/components/layout'
import { useRouter } from 'next/router'

const HeaderNav = ({ links, handleMenu, openMenu, classNames = [] }) => {
	const at = useAt()
	const router = useRouter()
	return (
		<div
			className={
				cn([stls.container], getClassNames({ classNames })) || undefined
			}>
			<Wrapper>
				<div className={stls.menu}>
					<div
						className={cn(stls.toggle, { [stls.opened]: openMenu })}
						// onClick={() => handleMenu(!openMenu)}
						onClick={() => router.push('/programs')}>
						<div className={stls.icon}>
							<i className={stls.line} />
							<i className={stls.line} />
						</div>
						<span>{at.en ? 'Programs' : 'Программы'}</span>
						{/* <Link href={'/programs'}>{at.en ? 'Programs' : 'Программы'}</Link> */}
					</div>
				</div>
				<ul className={stls.list}>
					{links.map((item, idx) => (
						<li key={item.val + idx} className={stls.item}>
							<Link
								legacyBehavior
								href={item.href}
								{...(item?.locale ? { locale: item.locale } : undefined)}>
								<a
									onClick={() => handleMenu(false)}
									className={cn(stls.link, {
										[stls.last]: idx + 1 === links.length,
										[stls.active]: item.red
									})}>
									{item.val}
								</a>
							</Link>
						</li>
					))}
				</ul>
			</Wrapper>
		</div>
	)
}

export default HeaderNav
