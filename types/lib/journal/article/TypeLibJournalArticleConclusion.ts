import { TypeLibTypename } from '@/types/index'

type TypeLibJournalArticleItem = {
  __typename: TypeLibTypename
  body: string
  title: string
}[]

export default TypeLibJournalArticleItem
