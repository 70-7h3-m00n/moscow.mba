import stls from '@/styles/components/btns/BtnChangeLang.module.sass'
import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import cn from 'classnames'
import { useAt } from '@/hooks/index'
import { IconTriangleBottom } from '@/components/icons'

const BtnChangeLang = () => {
	const [isVisible, setIsVisible] = useState(false)
	const router = useRouter()
	const at = useAt()

	return (
		<div className={cn(stls.lang, { [stls.redHighlight]: isVisible })}>
			<a className={stls.btn} onClick={() => setIsVisible(!isVisible)}>
				{at.en ? 'EN' : 'RU'}{' '}
				<IconTriangleBottom fill={`${isVisible ? '#FF3535' : '#000'}`} />
			</a>
			<ul className={cn(stls.list, { [stls.show]: isVisible })}>
				<li className={stls.listItem}>
					<Link legacyBehavior href={`${router.pathname}`} locale='ru'>
						<a
							className={stls.listItemLink}
							onClick={() => setIsVisible(!isVisible)}>
							<span>&#x1F1F7;&#x1F1FA; {/* ru flag */}</span>РУССКИЙ
						</a>
					</Link>
				</li>
				<li className={stls.listItem}>
					<Link legacyBehavior href={`${router.pathname}`} locale='en-US'>
						<a
							className={stls.listItemLink}
							onClick={() => setIsVisible(!isVisible)}>
							<span>&#x1F1FA;&#x1F1F8; {/* us flag */}</span>ENGLISH
						</a>
					</Link>
				</li>
				{/* <li className={stls.listItem}>
          <Link href={`${router.pathname}`} locale='kk_KZ'>
            <a
              className={stls.listItemLink}
              onClick={() => setIsVisible(!isVisible)}>
              <span>&#x1F1FA;&#x1F1F8; </span>ENGLISH
            </a>
          </Link>
        </li> */}
			</ul>
		</div>
	)
}

export default BtnChangeLang
