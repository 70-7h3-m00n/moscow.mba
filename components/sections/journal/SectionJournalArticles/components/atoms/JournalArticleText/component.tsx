import Link from "next/link"

import { TypeLibJournalArticle } from '@/types/index'
import routes from '@/config/routesFront'
type TProps = {
    title: TypeLibJournalArticle['title'],
    slug: TypeLibJournalArticle['slug']
}

export const JournalArticleText: React.FC<TProps> = ({ title, slug }) => {
    return (
        <Link href={`${routes.root}${routes.journal}/${slug}`}>
            <a>{title}</a>
        </Link>
    )
}