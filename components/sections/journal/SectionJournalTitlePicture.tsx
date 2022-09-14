import cn from 'classnames'

import { TypeClassNames, TypeLibJournalArticle } from '@/types/index'

import { getClassNames, getImageHeight } from '@/helpers/index'

import { ContentJournalArticle } from '@/components/layout'
import { ImgTemplate } from '@/components/images'

import stls from '@/styles/components/sections/journal/SectionJournalTitlePicture.module.sass'
type TypeImgJournalArticleTitlePicture = {
    journalArticle: TypeLibJournalArticle
} & TypeClassNames

const widthArticlePicture = 850

const SectionJournalTitlePicture = ({
    classNames,
    journalArticle
}: TypeImgJournalArticleTitlePicture) => (
    <section className={cn(stls.container, getClassNames({ classNames })) || undefined}>
        <ContentJournalArticle>
            <ImgTemplate
                classNames={[stls.articlePicture]}
                src={journalArticle.picture.url || undefined}
                width={journalArticle.picture.width && widthArticlePicture}
                height={getImageHeight({
                    width: widthArticlePicture,
                    widthInitial: journalArticle.picture.width,
                    heightInitial: journalArticle.picture.height
                })}
                alt={journalArticle.picture?.alt || 'Изображение'}
                title={journalArticle.picture.alt || 'Изображение'}
            />
        </ContentJournalArticle>
    </section >
)

export default SectionJournalTitlePicture