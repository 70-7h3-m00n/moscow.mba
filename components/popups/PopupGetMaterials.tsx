import Image from 'next/image'
import cn from 'classnames'
import { useState } from 'react'

import { getClassNames } from '@/helpers/index'

import {
    TypeClassNames,
    TypeLibJournalPdfMaterials
} from '@/types/index'

import { FormJournalArticle } from '@/components/forms'
import { IconLoader } from '@/components/icons'

import pdfPopupGetMaterials from '@/public/assets/images/journal/pdfPopupGetMaterials.png'
import linePopupGetMaterials from '@/public/assets/images/journal/linePopupGetMaterials.png'

import stls from '@/styles/components/popups/PopupGetMaterials.module.sass'

type TypeSectionPopupCoursesOnTopicProps = {
    handlePopupGetMaterials: () => void
    pdfMaterials: TypeLibJournalPdfMaterials
}
    & TypeClassNames

const PopupGetMaterials = ({
    classNames,
    handlePopupGetMaterials,
    pdfMaterials
}: TypeSectionPopupCoursesOnTopicProps) => {
    if (!pdfMaterials) return null

    const [open, setOpen] = useState(false)
    const [isSuccess, setIsSuccess] = useState(true)
    const [openLoader, setOpenLoader] = useState(false)

    return (
        <>
            <div
                className={stls.wrapper}
                onClick={handlePopupGetMaterials}
            ></div>
            <div className={cn([stls.container], getClassNames({ classNames })) || undefined}>
                {
                    (!openLoader)
                        ? <div className={stls.pdfPopupGetMaterials}>
                            <Image
                                src={pdfPopupGetMaterials}
                                width={190}
                                height={230}
                            />
                        </div>
                        : ''
                }
                <div className={stls.topLinePopupGetMaterials}>
                    <Image
                        src={linePopupGetMaterials}
                        width={246}
                        height={246}
                    />
                </div>
                <div className={stls.bottomLinePopupGetMaterials}>
                    <Image
                        src={linePopupGetMaterials}
                        width={246}
                        height={246}
                    />
                </div>
                <button
                    className={stls.closed}
                    onClick={handlePopupGetMaterials}></button>
                <div className={openLoader || open ? stls.formContent : ''}>
                    <div className={stls.title}>
                        <p className={stls.text}>{'7 ошибок разрушения карьеры.\nГайд по профессиям IT '}</p>
                    </div>
                    <div className={stls.form}>
                        <FormJournalArticle
                            programTitle={null}
                            setOpenLoader={setOpenLoader}
                            setOpen={setOpen}
                            setIsSuccess={setIsSuccess}
                            classNames={[stls.submitButton]}
                            pdfMaterials={pdfMaterials}
                        >
                            <span className={stls.submitText}>{'получить бесплатно'}</span>
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
                                onClick={() => setOpen(open => !open)}>Вернуться назад
                            </button>
                        </div>
                        : ''
                }
                {
                    (!open && openLoader)
                        ? <div className={stls.formLoading}><IconLoader /></div>
                        : ''
                }
            </div>
        </>
    )
}

export default PopupGetMaterials