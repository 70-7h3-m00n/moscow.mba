import { TypeLibJournalIcon } from '@/types/index'

type TypeLibJournalRecommendedPrograms = Array<{
  categorySlug?: string | null
  icon?: TypeLibJournalIcon | null
  slug?: string | null
  studyFormatSlug?: string | null
  title?: string | null
}> | null

export default TypeLibJournalRecommendedPrograms
