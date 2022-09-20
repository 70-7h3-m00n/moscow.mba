import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import cn from 'classnames'

import { LeadLoaderThankyou } from '@/components/general'

import { ContentJournalArticle } from '@/components/layout'
import { FormJournalArticle } from '@/components/forms'

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
    const [open, setOpen] = useState(false)
    const [openLoader, setOpenLoader] = useState(false)

    return (
        <section className={cn(stls.container, getClassNames({ classNames })) || undefined}>
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
                        <FormJournalArticle
                            programTitle={null}
                            setOpenLoader={setOpenLoader}
                            setOpen={setOpen} />
                    </div>
                </div>
            </ContentJournalArticle>
            <LeadLoaderThankyou
                open={open}
                setOpen={setOpen}
                openLoader={openLoader}
                setOpenLoader={setOpenLoader}
                programId={null}
                programTitle={null}
            />
        </section >
    )
}

export default SectionJournalForm