import Link from 'next/link'
import Image from 'next/image'
import cn from 'classnames'

import {
    Wrapper,
    ContentJournalArticle
} from '@/components/layout'
import { FormAlpha, AskQuestionForm } from '@/components/forms'

import { getClassNames } from '@/helpers/index'

import {
    TypeClassNames,
    TypeLibJournalPdfMaterials,
    TypeLibJournalArticleFormPdfMaterials
} from '@/types/index'

import stls from '@/styles/components/sections/journal/SectionJournalForm.module.sass'

import formJournalPicture from '@/public/assets/images/journal/formJournal.png'
import mockupPicture from '@/public/assets/images/journal/mockup.png'
import pdfImages from '@/public/assets/images/journal/pdf.svg'

type TypeSectionJournalParagraphProps = {
    pdfMaterials: TypeLibJournalPdfMaterials
    formPdfMaterials: TypeLibJournalArticleFormPdfMaterials
} & TypeClassNames

const SectionJournalForm = ({
    classNames,
    formPdfMaterials,
    pdfMaterials
}: TypeSectionJournalParagraphProps) => {
    return (
        <section className={cn(stls.container, getClassNames({ classNames })) || undefined}>
            <Wrapper column>
                <ContentJournalArticle>
                    <div className={stls.form}>
                        <Image
                            src={formJournalPicture}
                            objectFit="cover"
                            layout="fill"
                            className={stls.backgroundImage} />
                        <div className={stls.mockupPicture}>
                            <Image
                                src={mockupPicture}
                                width={207}
                                height={238}
                            />
                        </div>
                        <p className={stls.title}>{formPdfMaterials?.title}</p>
                        <div className={stls.filePdf}>
                            <div className={stls.pdfPicture}>
                                <Image
                                    src={pdfImages}
                                    width={30}
                                    height={38} />
                            </div>
                            <div className={stls.nameFiles}>
                                {
                                    pdfMaterials.map(file =>
                                        <Link href={file.url}>
                                            <a className={stls.nameFile}>{file.name}</a>
                                        </Link>
                                    )
                                }
                            </div>
                        </div>
                        <div className={stls.inputs}>
                            <FormAlpha />
                        </div>
                    </div>
                </ContentJournalArticle>
            </Wrapper>
        </section >
    )
}

export default SectionJournalForm