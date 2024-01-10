import stls from '@/styles/components/lis/LiTeacherContent.module.sass'
import { TypeLibTeacher } from '@/types/index'
import Image from 'next/image'
import cn from 'classnames'
import { base64pixel } from '@/config/index'
import { useAt } from '@/hooks/index'
import { IconMoreThan } from '@/components/icons'

const LiTeacherContent = ({
  teacher,
  atStandAlonePage
}: {
  teacher: TypeLibTeacher | null
  atStandAlonePage?: boolean
}) => {
  const at = useAt()
  return (
    <div className={stls.teachersItem}>
      <div className={stls.teachersItemWrapper}>
        <div className={stls.image}>
          <Image
            src={teacher?.portrait?.url}
            alt={teacher?.name}
            width={teacher?.portrait?.width}
            height={teacher?.portrait?.height}
            layout='responsive'
            placeholder='blur'
            blurDataURL={base64pixel}
          />
        </div>
        <div className={stls.teachersItemContent}>
          <div>
            <div className={stls.name}>
              {at.en ? teacher?.slug?.split('-').join(' ') : teacher?.name}
            </div>
            <p className={stls.description}>{teacher?.description}</p>
          </div>
          <div
            className={cn(stls.bio, stls.phone, {
              [stls.atStandAlonePage]: atStandAlonePage
            })}>
            <p
              className={cn(stls.bioP, {
                [stls.atStandAlonePage]: atStandAlonePage
              })}>
              {at.en ? 'Learn more' : 'Подробнее'}
            </p>
            <IconMoreThan classNames={[stls.icon]} />
          </div>
        </div>
      </div>
      <div
        className={cn(stls.bio, stls.tabletLaptopDesktopWidescreen, {
          [stls.atStandAlonePage]: atStandAlonePage
        })}>
        <p
          className={cn(stls.bioP, {
            [stls.atStandAlonePage]: atStandAlonePage
          })}>
          {at.en ? 'Learn more' : 'Подробнее'}
        </p>
        <IconMoreThan classNames={[stls.icon]} />
      </div>
    </div>
  )
}

export default LiTeacherContent
