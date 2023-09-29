import stls from '@/styles/components/sections/About.module.sass'
import cn from 'classnames'

import { useAt } from '@/hooks/index'
import { Wrapper } from '@/components/layout'
import { DetailedHTMLProps, HTMLAttributes } from 'react'

interface AboutProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {}

const About = ({ className, ...rest }: AboutProps) => {
	const at = useAt()
	return (
		<section className={cn(className, stls.container)} {...rest}>
			<Wrapper classNames={[stls.wrapper, at.partner && stls.partner]}>
				<div className={cn(stls.title, at.partner && stls.partner)}>
					{at.en ? 'About' : 'Об академии'}
				</div>
				<div className={stls.flexContainer}>
					<div className={cn(stls.titleDesc, at.partner && stls.partner)}>
						<p className={stls.desc}>
							{at.en
								? 'Moscow Business Academy is one of the leading business schools in CIS countries. It is also among the few of them who export our domestic MBA to the West and work in the global market'
								: 'Moscow Business Academy является одной из ведущих бизнес-школ на территории СНГ и одной из немногих бизнес-школ, которая экспортирует отечественные MBA на Запад и работает на глобальном рынке'}
						</p>
						<p className={stls.desc}>
							{at.en
								? 'Each year hundreds of top managers and company owners get a world-class education and make new acquaintances'
								: 'Ежегодно сотни топ-менеджеров и владельцев компаний получают здесь образование международного уровня и завязывают новые знакомства'}
						</p>
					</div>
					<ul className={cn(stls.list, at.partner && stls.partner)}>
						<li className={stls.listItem}>
							<div className={stls.number}>
								<span className={stls.years}>11</span>
								{at.en ? ' yrs' : ' лет'}
							</div>
							<p>{at.en ? 'on the market' : 'на рынке образования'}</p>
						</li>
						<li className={stls.listItem}>
							<div className={stls.number}>
								<span>9000</span>+
							</div>
							<p>
								{at.en
									? 'graduates all across the world'
									: 'выпускников по всему миру'}
							</p>
						</li>
						<li className={stls.listItem}>
							<div className={stls.number}>
								<span>25</span>%
							</div>
							<p>
								{at.en
									? 'international students'
									: 'студентов – это иностранцы из стран дальнего зарубежья'}
							</p>
						</li>
						<li className={stls.listItem}>
							<div className={stls.number}>
								<span>150</span>+
							</div>
							<p>
								{at.en
									? 'international-level professors providing the programs'
									: 'профессоров международного уровня готовят программы'}
							</p>
						</li>
					</ul>
				</div>
			</Wrapper>
		</section>
	)
}

export default About
