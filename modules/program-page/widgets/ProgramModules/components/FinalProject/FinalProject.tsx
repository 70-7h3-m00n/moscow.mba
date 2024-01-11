import stls from './FinalProject.module.sass'

import { Accordion } from 'modules/program-page/widgets/Accordion/Accordion'
import { useState } from 'react'

export const FinalProject = () => {
	const [activeIdx, setActiveIdx] = useState(null)

	return (
		<div className={stls.content}>
			<Accordion
				className={stls.accordion}
				active={activeIdx === 0}
				item={{ title: 'Итоговый проект' }}
				idx={0}
				handler={() => setActiveIdx(activeIdx === 0 ? null : 0)}
				variant='modules'
				final
			>
				<p className={stls.description}>
					Подберёте оптимальную структуру управления командой. Научитесь
					анализировать и улучшать показатели отдела. Построите воронки продаж,
					сформируете KPI и систему мотивации сотрудников.
				</p>
			</Accordion>
		</div>
	)
}
