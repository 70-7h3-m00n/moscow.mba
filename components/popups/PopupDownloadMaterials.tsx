import Image from 'next/image'
import cn from 'classnames'

import { getClassNames } from '@/helpers/index'

import { TypeClassNames } from '@/types/index'

import stls from '@/styles/components/popups/PopupDownloadMaterials.module.sass'

import bookDownload from '@/public/assets/images/journal/bookDownload.png'
import lineDownload from '@/public/assets/images/journal/lineDownload.png'
import ellipse from '@/public/assets/images/journal/ellipse.svg'

type TypeSectionPopupCoursesOnTopicProps = {
  handlePopupGetMaterials: () => void
  handlePopupDownloadMaterials: () => void
} & TypeClassNames

const PopupDownloadMaterials = ({
  classNames,
  handlePopupGetMaterials,
  handlePopupDownloadMaterials
}: TypeSectionPopupCoursesOnTopicProps) => (
  <div
    className={
      cn([stls.popupDownloadMaterials], getClassNames({ classNames })) ||
      undefined
    }>
    <button className={stls.btn} onClick={handlePopupGetMaterials}>
      <div className={stls.lineDownload}>
        <Image src={lineDownload} />
      </div>
      <div className={stls.content}>
        <div className={stls.bookDownload}>
          <Image src={bookDownload} width={80} height={92} />
          <div className={stls.ellipse}>
            <Image src={ellipse} />
          </div>
        </div>
        <div className={stls.textContent}>{'Скачать полезные материалы'}</div>
      </div>
    </button>
    <div className={stls.buttonClosed}>
      <button
        className={stls.closed}
        onClick={handlePopupDownloadMaterials}></button>
    </div>
  </div>
)

export default PopupDownloadMaterials
