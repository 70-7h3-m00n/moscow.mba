import stls from '@/styles/components/sections/journal/SectionJournalForm.module.sass'
import cn from 'classnames'

import Image from 'next/legacy/image'
import { useState } from 'react'
import { ImgTemplate } from '@/components/images'

import { IconLoader } from '@/components/icons'
import { FormJournalArticle } from '@/components/forms'

import { getClassNames } from '@/helpers/index'

import {
	TypeClassNames,
	TypeLibJournalPdfMaterials,
	TypeLibJournalArticleFormPdfMaterials
} from '@/types/index'

import formJournalPicture from '@/public/assets/images/journal/formJournal.png'
import mockupPicture from '@/public/assets/images/journal/mockup.png'
import pdfImage from '@/public/assets/images/journal/pdf.svg'
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
	mounted
}: TypeSectionJournalParagraphProps) => {
	const formName = `Заявка с модальной формы: "${formPdfMaterials?.title}"`

	const [open, setOpen] = useState(false)
	const [openLoader, setOpenLoader] = useState(false)
	const [isSuccess, setIsSuccess] = useState(true)

	if (!pdfMaterials || !formPdfMaterials) return null

	return (
		<div
			className={cn(stls.container, getClassNames({ classNames })) || undefined}
		>
			<div className={stls.form}>
				{/* todo: should be put in ./componnets/images using ImgTemplate.tsx */}
				<Image
					src={formJournalPicture}
					objectFit='cover'
					layout='fill'
					className={stls.backgroundImage}
					alt='Journal Picture'
				/>
				{/* todo: should be put in ./componnets/images using ImgTemplate.tsx */}
				{/* <div className={stls.mockupPicture}>
          <Image src={mockupPicture} width={207} height={238} />
        </div> */}
				{mounted ? (
					windowWidth > 768 ? (
						<div className={stls.lineForm}>
							{/* todo: should be put in ./componnets/images using ImgTemplate.tsx */}
							<ImgTemplate src={lineForm} />
						</div>
					) : (
						<div className={stls.lineFormPhone}>
							{/* todo: should be put in ./componnets/images using ImgTemplate.tsx */}
							<ImgTemplate src={lineFormPhone} />
						</div>
					)
				) : (
					<div className={stls.lineForm}>
						{/* todo: should be put in ./componnets/images using ImgTemplate.tsx */}
						<ImgTemplate src={lineForm} />
					</div>
				)}
				<div className={stls.folderForm}>
					{/* todo: should be put in ./componnets/images using ImgTemplate.tsx */}
					<ImgTemplate src={folderForm} className={stls.folderFormPicture} />
				</div>
				<div className={openLoader || open ? stls.formContent : ''}>
					<p className={stls.title}>{formPdfMaterials?.title}</p>
					<div
						className={cn(stls.pdfFiles, { [stls.pdfFilesHorizontal]: true })}
					>
						{pdfMaterials.map((file, idx) => (
							<div key={`${file?.name}-${idx}`} className={stls.pdfFile}>
								<div className={stls.pdfFilePicture}>
									{/* todo: should be put in ./componnets/images using ImgTemplate.tsx */}
									<ImgTemplate
										className={stls.imgTemplate}
										src={pdfImage}
										width={30}
										height={38}
									/>
								</div>
								<span className={stls.pdfFileName} key={`${file.name}_${idx}`}>
									{file.name}
								</span>
							</div>
						))}
					</div>
					<div className={stls.inputs}>
						<FormJournalArticle
							setOpenLoader={setOpenLoader}
							setOpen={setOpen}
							setIsSuccess={setIsSuccess}
							classNames={[stls.submitButton]}
							formName={formName}
							emailIsRequired
							pdfMaterials={pdfMaterials}
						>
							<span className={stls.submitText}>{'скачать'}</span>
							<div className={stls.pdfIcon}>
								{/* todo: should be put in ./componnets/images using ImgTemplate.tsx */}
								<ImgTemplate src={pdfIcon} />
							</div>
						</FormJournalArticle>
					</div>
				</div>
				{open && !openLoader ? (
					<div className={stls.formComplited}>
						<p className={stls.formComplitedTitle}>
							{isSuccess
								? 'Спасибо! Файл отправлен Вам на почту.'
								: 'Что-то пошло не так. Повторите, пожалуйста, попытку'}
						</p>
						<button
							className={stls.formComplitedClosed}
							onClick={() => setOpen(open => !open)}
						>
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
		</div>
	)
}

export default SectionJournalForm
