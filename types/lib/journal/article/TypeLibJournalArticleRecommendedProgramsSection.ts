import { TypeLibJournalIcon } from '@/types/index'

type TypeLibJournalArticleRecommendedProgramsSection = {
    btnVal: string | null
    title: Array<{
        titlePart: string | null
        isHighlighted?: boolean | null
    }> | []
    shortTextAtTheBottom:
    Array<{
        textPart: string | null
        isHighlighted?: boolean | null
    }>
    | []
    programs: Array<{
        title: string | null
        slug: string | null
        categorySlug: string | null
        studyFormatSlug: string | null
        icon: TypeLibJournalIcon | null
    }>
    | []
}

export default TypeLibJournalArticleRecommendedProgramsSection