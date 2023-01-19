import Link from 'next/link'
import { useConfigProgramsContext } from '../../fractals'
import {
	FilterDuration,
	FilterTrainingFormat,
	FilterTypeProgram,
	FilterDirection
} from './fractals'
import { FilterTypeProgramEnum } from 'modules/programs-page/fractals/enums'
import { SearchField } from '@/components/general'
import stls from './FilterPrograms.module.sass'

const FilterPrograms = () => {
	const { configPrograms } = useConfigProgramsContext()

	return (
		<div className={stls.filters}>
			<div>
				<SearchField />
			</div>
			<div className={stls.filter}>
				<FilterTypeProgram />
			</div>
			<div>
				<Link href='/programs/executive'>
					<a className={stls.highlight}>
						Executive MBA <span className={stls.premium}>Premium</span>
					</a>
				</Link>
			</div>
			<div className={stls.filter}>
				{(configPrograms.filterTypeProgram === FilterTypeProgramEnum.course ||
					configPrograms.filterTypeProgram ===
						FilterTypeProgramEnum.profession) && <FilterDuration />}
			</div>
			<div className={stls.filter}>
				<FilterTrainingFormat />
			</div>
			<div className={stls.filter}>
				{(configPrograms.filterTypeProgram === FilterTypeProgramEnum.course ||
					configPrograms.filterTypeProgram ===
						FilterTypeProgramEnum.profession) && <FilterDirection />}
			</div>
		</div>
	)
}

export default FilterPrograms
