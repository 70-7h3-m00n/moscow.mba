import { Wrapper } from '@/components/layout'
import stls from './SocialMedia.module.sass'
import * as socials from './socialLogos'
import { Reducer, useReducer } from 'react'
import cn from 'classnames'

const SocialMedia = () => {
	const socialsArr = Object.entries(socials).map(([key, Social]) => ({
		key,
		Social
	}))
	const [isHover, toggleIsHover] = useReducer<Reducer<boolean[], number>>(
		(prev, idx) => prev.map((v, innerIdx) => innerIdx === idx && !v),
		Array.from({ length: socialsArr.length }, () => false)
	)

	return (
		<section className={stls.sectionContainer}>
			<Wrapper column>
				<h2 className={stls.title}>Наши соц.сети</h2>
				<div className={stls.socialsWrapp}>
					{socialsArr.map(({ key, Social }, idx) => (
						<button
							key={key}
							className={cn(stls.socialButtons, stls[`btn${key}`])}
							onMouseEnter={() => toggleIsHover(idx)}
							onMouseLeave={() => toggleIsHover(idx)}>
							<Social
								fillOuter={isHover[idx] ? '#fff' : '#000'}
								fillInner={isHover[idx] ? `#FF3535` : '#fff'}
							/>
						</button>
					))}
				</div>
			</Wrapper>
		</section>
	)
}

export default SocialMedia
