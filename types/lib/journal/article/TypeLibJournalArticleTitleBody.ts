import { TypeLibTypename } from '@/types/index'

type TypeLibJournalArticleTitleBody = {
  __typename: TypeLibTypename
  isHighlighted?: boolean | null
  text: string | null
  hType: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | null
}[]

export default TypeLibJournalArticleTitleBody
