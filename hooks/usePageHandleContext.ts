import {
	TypeLibJournalCategories,
	TypeLibJournalTags,
	TypeLibJournalArticles,
	TypeLibJournalArticle,
	TypeLibPrograms,
	TypeLibProgram,
	TypeLibUntil
} from '@/types/index'
import { useContext, useEffect } from 'react'
import { ContextStaticProps } from '@/context/index'

type TypeUsePageHandleContextProps = {
	readonly program?: TypeLibProgram
	readonly programs: TypeLibPrograms
	readonly journalCategories?: TypeLibJournalCategories | null
	readonly journalTags?: TypeLibJournalTags | null
	readonly journalArticles?: TypeLibJournalArticles | null
	readonly journalArticlesArticle?: TypeLibJournalArticle | null
	readonly gspContextParamsJournalCategory?: string | null
	readonly gspContextParamsJournalCategoryTag?: string | null
	readonly gspContextParamsJournalCategoryTagArticle?: string | null
	readonly until?: TypeLibUntil | null
}

const usePageHandleContext = ({
	program,
	programs,
	journalCategories,
	journalTags,
	journalArticles,
	journalArticlesArticle,
	gspContextParamsJournalCategory,
	gspContextParamsJournalCategoryTag,
	gspContextParamsJournalCategoryTagArticle,
	until
}: TypeUsePageHandleContextProps) => {
	const { setPrograms, setProgram, setUntil } = useContext(ContextStaticProps)

	useEffect(() => {
		setPrograms(programs || [])
		setProgram(program || null)
		setUntil(until || null)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [program, programs, until])
}

export default usePageHandleContext
