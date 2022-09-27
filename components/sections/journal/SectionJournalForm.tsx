import Image from 'next/image'
import { useState } from 'react'
import cn from 'classnames'

import { IconLoader } from '@/components/icons'
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
import lineForm from '@/public/assets/images/journal/lineForm.svg'
import lineFormPhone from '@/public/assets/images/journal/lineFormPhone.svg'
import folderForm from '@/public/assets/images/journal/folderForm.png'
import pdfIcon from '@/public/assets/images/journal/form/pdf.svg'

type TypeSectionJournalParagraphProps = {
    pdfMaterials: TypeLibJournalPdfMaterials
    formPdfMaterials: TypeLibJournalArticleFormPdfMaterials
    windowWidth: number
    mounted: boolean
} & TypeClassNames

const SectionJournalForm = ({
    classNames,
    formPdfMaterials,
    pdfMaterials,
    windowWidth,
    mounted,
}: TypeSectionJournalParagraphProps) => {
    if (!pdfMaterials || !formPdfMaterials) return null

    const formName = `Заявка с модальной формы: "${formPdfMaterials?.title}"`

    const [open, setOpen] = useState(false)
    const [openLoader, setOpenLoader] = useState(false)
    const [isSuccess, setIsSuccess] = useState(true)

    return (
        <div className={cn(stls.container, getClassNames({ classNames })) || undefined}>
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
                        height={238} />
                </div>
                {
                    mounted
                        ? (windowWidth > 768)
                            ? <div className={stls.lineForm}>
                                <Image src={lineForm} />
                            </div>
                            : <div className={stls.lineFormPhone}>
                                <Image src={lineFormPhone} />
                            </div>
                        : <div className={stls.lineForm}>
                            <Image src={lineForm} />
                        </div>
                }
                <div className={stls.folderForm}>
                    <Image
                        src={folderForm}
                        className={stls.folderFormPicture} />
                </div>
                <div className={(openLoader || open) ? stls.formContent : ''}>
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
                                pdfMaterials.map((file, idx) =>
                                    <span
                                        className={stls.nameFile}
                                        key={`${file.name}_${idx}`}>
                                        {file.name}
                                    </span>
                                )
                            }
                        </div>
                    </div>
                    <div className={stls.inputs}>
                        <FormJournalArticle
                            programTitle={null}
                            setOpenLoader={setOpenLoader}
                            setOpen={setOpen}
                            setIsSuccess={setIsSuccess}
                            classNames={[stls.submitButton]}
                            formName={formName}
                            pdfMaterials={pdfMaterials}>
                            <span className={stls.submitText}>{'скачать'}</span>
                            <div className={stls.pdfIcon}>
                                <Image src={pdfIcon} />
                            </div>
                        </FormJournalArticle>
                    </div>
                </div>
                {
                    (open && !openLoader)
                        ? <div className={stls.formComplited}>
                            <p className={stls.formComplitedTitle}>
                                {
                                    isSuccess
                                        ? 'Спасибо! Файл отправлен Вам на почту.'
                                        : 'Что-то пошло не так. Повторите, пожалуйста, попытку.'
                                }
                            </p>
                            <button
                                className={stls.formComplitedClosed}
                                onClick={() => setOpen(open => !open)}>{'Вернуться назад'}</button>
                        </div>
                        : ''
                }
                {
                    (!open && openLoader)
                        ? <div className={stls.formLoading}>
                            <IconLoader />
                        </div>
                        : ''
                }
            </div>
        </div>
    )
}

export default SectionJournalForm