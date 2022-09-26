import cn from 'classnames'

import {
    TypeClassNames,
    TypeLibJournalArticle
} from '@/types/index'

import {
    getClassNames,
    getImageHeight
} from '@/helpers/index'

import { ContentJournalArticle } from '@/components/layout'
import { ImgTemplate } from '@/components/images'

import stls from '@/styles/components/sections/journal/SectionJournalTitlePicture.module.sass'

type TypeImgJournalArticleTitlePicture = {
    journalArticle: TypeLibJournalArticle
} & TypeClassNames

const widthArticlePicture = 1070

const SectionJournalTitlePicture = ({
    classNames,
    journalArticle
}: TypeImgJournalArticleTitlePicture) => {
    if (!journalArticle?.picture) return null

    return (
        <div className={cn(stls.container, getClassNames({ classNames })) || undefined}>
            <ContentJournalArticle>
                <ImgTemplate
                    classNames={[stls.articlePicture]}
                    src={journalArticle?.picture?.url || undefined}
                    width={journalArticle?.picture?.width && widthArticlePicture}
                    height={getImageHeight({
                        width: widthArticlePicture,
                        widthInitial: journalArticle?.picture?.width,
                        heightInitial: journalArticle?.picture?.height
                    })}
                    alt={journalArticle?.picture?.alt || 'Изображение'}
                    title={journalArticle?.picture?.alt || 'Изображение'}
                />
            </ContentJournalArticle>
        </div>
    )
}

export default SectionJournalTitlePicture