import stls from './AboutSection.module.sass'
import cn from 'classnames'
import { AboutSectionProps } from './types'

import { Wrapper } from '@/components/layout'
import { IconDiplomaProject } from '@/components/icons'
import Image from 'next/image'

export const AboutSection = ({ className }: AboutSectionProps) => {
	return (
		<section className={cn(className, stls.section)}>
			<Wrapper classNames={[stls.wrapper]}>
				<div className={stls.mainBox}>
					<h3>Об Академии</h3>
					<p>
						Московская Бизнес Академия является одним из ведущих образовательных
						заведений на территории СНГ. Академия экспортирует отечественные
						образовательные программы за рубеж и работает на глобальном рынке.
						Ежегодно сотни людей получают в Академии качественное образование
						разного уровня и завязывают новые знакомства.
					</p>
				</div>
				<Image
					src={'/assets/images/world_mba_1.jpg'}
					width={520}
					height={233}
					alt='Выпускники со всего мира'
					style={{ objectFit: 'cover' }}
				/>
			</Wrapper>
		</section>
	)
}
