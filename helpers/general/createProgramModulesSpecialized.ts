import { createProgramModules } from '@/helpers/index'
import { TypeLibProgram } from '@/types/index'

const createProgramModulesSpecialized = (program: TypeLibProgram) =>
	createProgramModules({ program, type: 'specializedSubjects' })

export default createProgramModulesSpecialized
