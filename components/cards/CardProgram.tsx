import stls from '@/styles/components/cards/CardProgram.module.sass'
import Link from 'next/link'
import Price from '@/components/costs/Price'
import { IconArrowTopRight } from '@/components/icons'
import { getStringDeclensionNumber, SetString } from '@/helpers/index'
import lang from '@/data/translation/months'
import TrainingPeriod from '@/components/costs/TrainingPeriod'
import useAt from '@/helpers/useAt'

const CardProgram = ({ professionLayout, program, number, type, format }) => {
  const at = useAt()

  return (
    <Link href={`/programs/${type}/${format}/${program.slug}`}>
      <a className={stls.container}>
        <div className={stls.arrow}>
          <IconArrowTopRight />
        </div>
        <div>
          <span className={stls.category}>
              {at.mini ? 'mini MBA' : at.mba ? 'MBA' : at.profession ? 'Профессии' : at.course ? 'Курсы' : ''}
          </span>
        </div>
        <h3 className={stls.programTitle}>{program.title}</h3>
        <div className={stls.bottomContainer}>
          <div>
            <Price
              discount
              type={type}
              format={format}
              renderedByComponent='CardProgram'
            />
          </div>
          <div className={stls.duration}>
            {
              program.duration ?
                `${
                  program.duration?.minStudyMonths
                } ${SetString(
                  lang.months,
                  false,
                  getStringDeclensionNumber(program.duration?.minStudyMonths)
                )}`
                :
                <TrainingPeriod type={type} />
            }
          </div>
        </div>
      </a>
    </Link>
  )
}

export default CardProgram
