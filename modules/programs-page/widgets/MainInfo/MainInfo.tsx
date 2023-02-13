import { ProgramsQty } from './fractals'
import useAt from '@/hooks/useAt'
import {
	useConfigProgramsContext,
	usePrograms
} from 'modules/programs-page/fractals'
import { FilterTypeProgramEnum } from 'modules/programs-page/fractals/enums'
import stls from './MainInfo.module.sass'

const MainInfo = () => {
	const { configPrograms } = useConfigProgramsContext()
	const { renderPrograms } = usePrograms()
	const at = useAt()

	return (
		<div className={stls.programMainInfo}>
			<div className={stls.title}>
				<h2 className={stls.titleText}>
					{configPrograms.filterTypeProgram === FilterTypeProgramEnum.mini
						? `Mini MBA ${configPrograms.filterTrainingFormat}`
						: configPrograms.filterTypeProgram === FilterTypeProgramEnum.mba
						? `MBA ${configPrograms.filterTrainingFormat}`
						: configPrograms.filterTypeProgram ===
						  FilterTypeProgramEnum.profession
						? 'Профессии'
						: configPrograms.filterTypeProgram === FilterTypeProgramEnum.course
						? 'Курсы'
						: 'Все программы'}
				</h2>
				<ProgramsQty renderPrograms={renderPrograms} />
			</div>
			<div className={stls.subTitle}>
				<p className={stls.description}>
					{configPrograms.filterTypeProgram === FilterTypeProgramEnum.mini
						? at.en
							? `The Mini MBA distance learning program is designed for professionals and
                            managers who want to systematize existing knowledge or
                            get acquainted with the key aspects of a new field of management activity for yourself`
							: `Дистанционная программа Mini MBA разработана для специалистов и 
                            руководителей, которые хотят систематизировать имеющиеся знания или 
                            познакомиться с ключевыми аспектами новой для себя сферы управленческой деятельности`
						: configPrograms.filterTypeProgram === FilterTypeProgramEnum.mba
						? at.en
							? `The distance MBA program is designed for specialists and managers,
                            who want to systematize their existing knowledge or get acquainted with
                            the key aspects of a new field of management activity for themselves`
							: `Дистанционная программа MBA разработана для специалистов и руководителей, 
                            которые хотят систематизировать имеющиеся знания или познакомиться с 
                            ключевыми аспектами новой для себя сферы управленческой деятельности`
						: configPrograms.filterTypeProgram ===
						  FilterTypeProgramEnum.profession
						? at.en
							? `The professional retraining program is designed for specialists
                            and managers who want to systematize existing knowledge or
                            get acquainted with key aspects of a new field for themselves
                            management activities`
							: `Программа профессиональной переподготовки разработана для специалистов
                            и руководителей, которые хотят систематизировать имеющиеся знания или
                            познакомиться с ключевыми аспектами новой для себя сферы
                            управленческой деятельности`
						: configPrograms.filterTypeProgram === FilterTypeProgramEnum.course
						? at.en
							? `The professional development program is designed for specialists and
                            managers who want to systematize existing knowledge or
                            get acquainted with key aspects of a new field for themselves
                            management activities`
							: `Программа повышения квалификации разработана для специалистов и
                            руководителей, которые хотят систематизировать имеющиеся знания или
                            познакомиться с ключевыми аспектами новой для себя сферы
                            управленческой деятельности`
						: ''}
				</p>
			</div>
		</div>
	)
}

export default MainInfo
