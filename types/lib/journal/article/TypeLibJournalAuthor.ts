import { TypeLibPicture } from '@/types/index'

type TypeLibJournalAuthor = {
    label: string | null
    authorPosition?: string | null
    authorName: string | null
    portrait: TypeLibPicture
}
export default TypeLibJournalAuthor