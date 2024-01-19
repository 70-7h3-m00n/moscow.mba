import stls from './FinalProject.module.sass'

import useAt from '@/hooks/useAt'
import { Accordion } from 'modules/program-page/widgets/Accordion/Accordion'
import { useState } from 'react'

export const FinalProject = () => {
	const at = useAt()
	const [activeIdx, setActiveIdx] = useState(null)

	const finalProjectData = {
		final: {
			title: 'Итоговый проект',
			description: (
				<>
					<p className={stls.description}>
						Бизнес-проектирование (подготовка итоговой аттестационной работы,
						консультирование по бизнес-проектированию)
					</p>
					<p className={stls.description}>
						Защита итоговой аттестационной работы
					</p>
				</>
			)
		},
		diploma: {
			title: 'Итоговый проект',
			description: (
				<>
					<p className={stls.description}>
						Мы предложим на выбор три дипломных проекта — ваше решение будет
						зависеть от того, в какой специальности вы хотите развиваться
					</p>
				</>
			)
		}
	}

	const data =
		at.mba || at.mini ? finalProjectData.final : finalProjectData.diploma

	return (
		<div className={stls.content}>
			<Accordion
				className={stls.accordion}
				active={activeIdx === 0}
				item={{ title: data.title }}
				idx={0}
				handler={() => setActiveIdx(activeIdx === 0 ? null : 0)}
				variant='modules'
				final
			>
				{data.description}
			</Accordion>
		</div>
	)
}
