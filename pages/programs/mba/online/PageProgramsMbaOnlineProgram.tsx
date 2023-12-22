import { usePageHandleContext } from '@/hooks/index'
import { SeoPagesProgram } from '@/components/seo'
import { ProgramPage } from 'modules/program-page/ProgramPage'

export const PageProgramsMbaOnlineProgram = ({ program, programs }) => {
	usePageHandleContext({ programs, program })

	return (
		<>
			<SeoPagesProgram program={program} />
			{/* <OnlineProgram
                program={program}
                programs={programs}
                teachers={program?.teachers}
            /> */}
			<ProgramPage
				program={program}
				programs={programs}
				teachers={programs?.teachers}
			/>
		</>
	)
}
