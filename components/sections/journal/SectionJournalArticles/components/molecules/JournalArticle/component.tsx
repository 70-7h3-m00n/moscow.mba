import { TypeLibJournalArticle } from '@/types/index'

import {
    JournalArticlePicture,
    JournalArticleText,
    JournalArticleDate
} from '../../atoms'
import { JournalButton } from '@/components/sections/journal/shared'

import stls from './stls.module.sass'

type TProps = {
    createdDate: Date
} & TypeLibJournalArticle

export const JournalArticle: React.FC<TProps> = ({
    title,
    slug,
    picture: {
        width,
        height,
        url
    },
    journal_category: {
        slug: slugCategory,
        title: titleCategory },
    journal_tag,
    createdAt,
    createdDate
}) => {

    return (
        <div className={stls.journalArticle}>
            <JournalArticlePicture width={width} height={height} src={url} />
            <JournalButton slug={slugCategory}>
                <span>{titleCategory}</span>
            </JournalButton>
            <JournalArticleText title={title} slug={slug} />
            <JournalArticleDate createdDate={createdDate} createdAt={createdAt} />
        </div>
    )
}