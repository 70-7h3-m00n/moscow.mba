import stls from '../Details.module.sass'

import { useContext } from 'react'
import useAt from '@/hooks/useAt'
import { ProgramPageContext } from 'modules/program-page/fractals/context/context'
import { TrainingPeriod, Until } from '@/components/costs'
import { FRDO } from '../components/FRDO'
import { InfoTooltip } from '@/components/popups/InfoTooltip/InfoTooltip'

export const GetDetailsData = () => {
	const at = useAt()
	const { state } = useContext(ProgramPageContext)
	const { program } = state

	console.log(' GetDetailsData =>>>>>> FRDO', program?.frdo)

	return [
		{
			title: 'Срок обучения',
			description: (
				<>
					<TrainingPeriod
						period={program?.duration?.minStudyMonths}
						type={program?.category?.type}
					/>
					<InfoTooltip color='#000' textColor='#fff'>
						<p className={stls.durationTitle}>Как можно сократить?</p>
						<p className={stls.durationDesc}>
							Вы можете пройти программу в ускоренном темпе, если уже имеете
							необходимые знания или профильный опыт работы
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
		program?.frdo !== false &&
			!at.course && {
				title: 'Диплом',
				description: (
					<>
						Заносится в ФРДО{' '}
						<InfoTooltip color='#000' textColor='#fff'>
							<FRDO />
						</InfoTooltip>
					</>
				)
			}
	]
}
