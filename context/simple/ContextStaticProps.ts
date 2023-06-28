import { createContext, Dispatch } from 'react'

// TODO: figure out better types
const ContextStaticProps = createContext<{
	programs: any
	renderPrograms: any
	configPrograms: any
	program: any
	curStudyField: any
	studyFields: any
	studyFieldsWithSlugs: any
	sorting: any
	duration: any
	setPrograms: Dispatch<any>
	setRenderPrograms: Dispatch<any>
	setConfigPrograms: Dispatch<any>
	setProgram: Dispatch<any>
	setCurStudyField: Dispatch<any>
	setStudyFields: Dispatch<any>
	setStudyFieldsWithSlugs: Dispatch<any>
	setSorting: Dispatch<any>
	setDuration: Dispatch<any>
}>({
	programs: [],
	renderPrograms: [],
	configPrograms: [],
	program: null,
	curStudyField: null,
	studyFields: null,
	studyFieldsWithSlugs: null,
	sorting: null,
	duration: null,
	setPrograms: () => {},
	setRenderPrograms: () => {},
	setConfigPrograms: () => {},
	setProgram: () => {},
	setCurStudyField: () => {},
	setStudyFields: () => {},
	setStudyFieldsWithSlugs: () => {},
	setSorting: () => {},
	setDuration: () => {}
})

export default ContextStaticProps
