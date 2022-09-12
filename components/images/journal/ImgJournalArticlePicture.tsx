import cn from 'classnames'

import { TypeClassNames, TypeImg, TypeImgExtended } from '@/types/index'

import { getClassNames } from '@/helpers/index'

import {
  Wrapper,
  ContentJournalArticle
} from '@/components/layout'
import { ImgTemplate } from '@/components/images'

//import stls from '@/styles/components/images/journal/ImgJournalArticlePicture.module.sass'

type TypeImgJournalArticlePictureProps = TypeClassNames &
  TypeImg &
  TypeImgExtended

const ImgJournalArticlePicture = ({
  classNames,
  src,
  width,
  height,
  alt,
  title
}: TypeImgJournalArticlePictureProps) => {
  if (!src || !width || !height) return null
  return (
    <section className={cn(getClassNames({ classNames })) || undefined}>
      <Wrapper column>
        <ContentJournalArticle>
          <ImgTemplate
            classNames={classNames}
            src={src}
            width={width}
            height={height}
            alt={alt || 'Изображение'}
            title={title || 'Изображение'}
          />
        </ContentJournalArticle>
      </Wrapper>
    </section>
  )
}

export default ImgJournalArticlePicture
