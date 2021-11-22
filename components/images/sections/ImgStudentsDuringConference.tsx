import { TypeImg } from '@/types/index'
import { ImgTemplate } from '@/components/images'
import { useAt } from '@/helpers/index'
import src from '@/public/assets/images/sections/students-during-conference.png'

const ImgStudentsDuringConference = ({
  classNames = [],
  width,
  height
}: TypeImg) => {
  const at = useAt()
  return (
    <ImgTemplate
      src={src}
      width={width}
      height={height}
      alt={at.en ? 'Students at the conference' : 'Слушатели на конференции'}
      classNames={classNames}
    />
  )
}

export default ImgStudentsDuringConference
