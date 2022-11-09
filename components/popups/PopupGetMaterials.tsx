import stls from '@/styles/components/popups/PopupGetMaterials.module.sass'
import {
  TypeClassNames,
  TypeLibJournalArticleTitleBody,
  TypeLibJournalPdfMaterials
} from '@/types/index'
import { useState, Fragment } from 'react'
import Image from 'next/image'
import cn from 'classnames'
import { getClassNames } from '@/helpers/index'
import { FormJournalArticle } from '@/components/forms'
import { IconLoader } from '@/components/icons'
import pdfPopupGetMaterials from '@/public/assets/images/journal/pdfPopupGetMaterials.png'
import linePopupGetMaterials from '@/public/assets/images/journal/linePopupGetMaterials.png'
import pdfImage from '@/public/assets/images/journal/pdf.svg'

type TypeSectionPopupCoursesOnTopicProps = {
  handlePopupGetMaterials: () => void
  pdfMaterials: TypeLibJournalPdfMaterials
  title: string
} & TypeClassNames

const PopupGetMaterials = ({
  classNames,
  handlePopupGetMaterials,
  title,
  pdfMaterials
}: TypeSectionPopupCoursesOnTopicProps) => {
  const formName = `Заявка с модальной формы: 7 ошибок разрушения карьеры.\nГайд по профессиям IT`

  const [open, setOpen] = useState(false)
  const [openLoader, setOpenLoader] = useState(false)
  const [isSuccess, setIsSuccess] = useState(true)

  if (!pdfMaterials) return null

  return (
    <>
      <div className={stls.wrapper} onClick={handlePopupGetMaterials}></div>
      <div
        className={
          cn([stls.container], getClassNames({ classNames })) || undefined
        }>
        {!openLoader ? (
          <div className={stls.pdfPopupGetMaterials}>
            {/* todo: should be put in ./componnets/images using ImgTemplate.tsx */}
            <Image src={pdfPopupGetMaterials} width={190} height={230} />
          </div>
        ) : (
          ''
        )}
        <div className={stls.topLinePopupGetMaterials}>
          {/* todo: should be put in ./componnets/images using ImgTemplate.tsx */}
          <Image src={linePopupGetMaterials} width={246} height={246} />
        </div>
        <div className={stls.bottomLinePopupGetMaterials}>
          {/* todo: should be put in ./componnets/images using ImgTemplate.tsx */}
          <Image src={linePopupGetMaterials} width={246} height={246} />
        </div>
        <button
          className={stls.closed}
          onClick={handlePopupGetMaterials}></button>
        <div className={openLoader || open ? stls.formContent : ''}>
          <div className={stls.title}>
            <p className={stls.text}>{title}</p>
            <div className={stls.pdfFiles}>
              {pdfMaterials.map((file, idx) => (
                <div key={`${file?.name}-${idx}`} className={stls.pdfFile}>
                  <div className={stls.pdfFilePicture}>
                    {/* todo: should be put in ./componnets/images using ImgTemplate.tsx */}
                    <Image src={pdfImage} width={30} height={38} />
                  </div>
                  <span
                    className={stls.pdfFileName}
                    key={`${file.name}_${idx}`}>
                    {file.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className={stls.form}>
            <FormJournalArticle
              pdfMaterials={pdfMaterials}
              setOpen={setOpen}
              setOpenLoader={setOpenLoader}
              setIsSuccess={setIsSuccess}
              formName={formName}
              classNames={[stls.submitButton]}>
              <span className={stls.submitText}>{'получить бесплатно'}</span>
            </FormJournalArticle>
          </div>
        </div>
        {open && !openLoader ? (
          <div className={stls.formComplited}>
            <p className={stls.formComplitedTitle}>
              {isSuccess
                ? 'Спасибо! Файл отправлен Вам на почту.'
                : 'Что-то пошло не так. Повторите, пожалуйста, попытку.'}
            </p>
            <button
              className={stls.formComplitedClosed}
              onClick={() => setOpen(open => !open)}>
              {'Вернуться назад'}
            </button>
          </div>
        ) : (
          ''
        )}
        {!open && openLoader ? (
          <div className={stls.formLoading}>
            <IconLoader />
          </div>
        ) : (
          ''
        )}
      </div>
    </>
  )
}

export default PopupGetMaterials
