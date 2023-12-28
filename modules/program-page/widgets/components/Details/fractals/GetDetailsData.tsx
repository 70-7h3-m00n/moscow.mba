import stls from '../Details.module.sass'

import React, { useContext } from 'react'
import useAt from '@/hooks/useAt'
import { ProgramPageContext } from 'modules/program-page/fractals/context/context'

import { TrainingPeriod, Until } from '@/components/costs'
import { ruCase } from '@/helpers/index'
import { FRDO } from '../components/FRDO'
import { InfoTooltip } from '@/components/popups/InfoTooltip/InfoTooltip'

export const GetDetailsData = () => {
	const at = useAt()
	const { state } = useContext(ProgramPageContext)
	const { program } = state

	const durationHours = at.mini
		? 1260
		: at.mba
		? 3420
		: +program?.duration?.studyHours

	return [
		{
			title: 'Срок обучения',
			description: (
				<>
					<TrainingPeriod
						period={program?.duration?.minStudyMonths}
						type={program?.category?.type}
					/>
					<InfoTooltip>
						<p className={stls.durationHours}>
							<span className={stls.bold}>Длительность:</span>{' '}
							{`${durationHours} ${ruCase(durationHours, [
								'час',
								'часа',
								'часов'
							])}`}
						</p>
					</InfoTooltip>
				</>
			)
		},
		{
			title: 'Форма обучения',
			description: `${at.blended ? 'С очными модулями' : 'Дистанционная'}`
		},
		{
			title: 'Ближайшее зачисление',
			description: (
				<Until preposition={false} executive={at.executive && false} />
			)
		},
		{
			title: 'Диплом',
			description: (
				<>
					Заносится в ФРДО{' '}
					<InfoTooltip>
						<FRDO />
					</InfoTooltip>
				</>
			)
		}
	]
}
