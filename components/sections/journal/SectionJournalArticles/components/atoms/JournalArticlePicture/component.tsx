import { TypeClassNames, TypeImg, TypeImgExtended } from '@/types/index'
import { ImgTemplate } from '@/components/images'
import stls from './stls.module.scss'

type TypeImgJournalArticlePictureProps = TypeClassNames &
  TypeImg &
  TypeImgExtended

export const JournalArticlePicture = ({
  classNames,
  src,
  width,
  height,
  alt,
  title
}: TypeImgJournalArticlePictureProps) => {
  if (!src || !width || !height) return null
  return (
    <>
      <ImgTemplate
        classNames={classNames}
        src={src}
        width={width}
        height={height}
        alt={alt || 'Изображение'}
        title={title || 'Изображение'}
      />
    </>
  )
}