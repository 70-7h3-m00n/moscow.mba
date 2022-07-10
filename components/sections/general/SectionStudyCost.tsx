import stls from '@/styles/components/sections/general/SectionStudyCost.module.sass'
import { TypeClassNames } from '@/types/index'
import { useContext, MouseEventHandler } from 'react'
import cn from 'classnames'
import Popup from 'reactjs-popup'
import { useAt } from '@/hooks/index'
import { ContextStaticProps } from '@/context/index'
import { getClassNames, ruCaseMonth } from '@/helpers/index'
import { GeneralStickerDiscount } from '@/components/general'
import { Loan, TrainingPeriod, Until } from '@/components/costs'
import { Wrapper } from '@/components/layout'
import { PopupForm } from '@/components/popups'
import { BtnAlpha } from '@/components/btns'

type TypeSectionStudyCostProps = TypeClassNames

const SectionStudyCost = ({ classNames }: TypeSectionStudyCostProps) => {
  const at = useAt()
  const { program } = useContext(ContextStaticProps)

  const pros = [
    'Практические домашние задания',
    'Современная программа 2022 года',
    'Интерактивные онлайн-семинары',
    'Карьерные консультации',
    'Дипломы заносятся в ФРДО',
    <>Ежедневная помощь от кураторов и&nbsp;преподавателей</>
  ]

  const isDiscounted = at.online || at.mbl

  const studyFieldIsAccounting =
    program?.study_field?.slug?.trim() === 'accounting-analysis-and-audit'

  return (
    <section
      className={
        cn([stls.container], getClassNames({ classNames })) || undefined
      }>
      <Wrapper column classNames={[stls.wrapper]}>
        <div className={stls.heading}>
          <h2 className={stls.title}>
            {at.en ? 'Study Cost' : 'Стоимость обучения'}
          </h2>
          <GeneralStickerDiscount classNames={[stls.stickerDiscount]} />
        </div>
        <div className={stls.content}>
          <div className={stls.left}>
            <div className={stls.programInfos}>
              <div className={stls.programInfo}>
                <p className={stls.programInfoTitle}>
                  {program?.duration?.minStudyMonths ? (
                    `${program?.duration?.minStudyMonths} ${
                      at.en
                        ? 'month'
                        : ruCaseMonth(program?.duration?.minStudyMonths)
                    }`
                  ) : (
                    <TrainingPeriod
                      type={
                        at.mini
                          ? 'mini'
                          : at.mba
                          ? 'mba'
                          : at.executive
                          ? 'executive'
                          : at.mbl
                          ? 'mba'
                          : at.profession
                          ? 'profession'
                          : at.course
                          ? 'course'
                          : null
                      }
                    />
                  )}
                </p>
                <p className={stls.programInfoContent}>
                  Возможно закончить экстерном
                </p>
              </div>
              <div className={stls.programInfo}>
                <p className={stls.programInfoTitle}>
                  {at.blended ? 'С очными модулями' : 'Дистанционно'}
                </p>
                <p className={stls.programInfoContent}>
                  {at.blended
                    ? 'Живое общение с экспертами'
                    : 'Онлайн-встречи с преподавателями'}
                </p>
              </div>
            </div>
            <div className={stls.programAdmission}>
              <p className={stls.programAdmissionTitle}>
                Ближайший набор{' '}
                <span className={stls.highlight}>
                  <Until preposition={false} executive={at.executive} />{' '}
                </span>
              </p>
              <p className={stls.programAdmissionContent}>
                *количество мест ограничено
              </p>
            </div>
            <ul className={stls.pros}>
              {pros.map((pro, idx) => (
                <li key={`${pro}-${idx}`} className={stls.proItem}>
                  <p className={stls.pro}>{pro}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className={stls.right}>
            <div className={stls.ps}>
              <p className={stls.p}>
                Успех в карьере напрямую связывают с&nbsp;получением образования
              </p>
              <p className={stls.p}>
                Получите актульные знания, увеличьте свой доход и продвиньтесь
                по карьерной лестнице!
              </p>
            </div>
            <p className={stls.getStartedTodayP}>
              Запишитесь на курс {!at.profession && !at.course && 'MBA'}{' '}
              сегодня:
            </p>
            <div className={stls.loan}>
              <Loan
                discount={isDiscounted}
                type={program?.category?.type}
                format={program?.studyFormat}
                programPrice={
                  studyFieldIsAccounting
                    ? 59000
                    : (at.profession || at.course) && program?.price
                }
                variant='SectionStudyCost'
              />
            </div>
            <Popup
              trigger={() => (
                <BtnAlpha variant='beta-reverse'>Оставить заявку</BtnAlpha>
              )}
              modal
              lockScroll
              nested
              closeOnDocumentClick>
              {/* @ts-expect-error  */}
              {(close: MouseEventHandler) => (
                <PopupForm
                  programId={program?.id}
                  programTitle={program?.title}
                  title={'Получите консультацию'}
                  closePopUpForm={close}
                  formName={`Заявка с модальной формы "Стоимость обучения"${
                    program?.title
                      ? ` программы ${program?.category?.type || ''} ${
                          program?.studyFormat || ''
                        } ${program.title}`
                      : ''
                  }`}
                />
              )}
            </Popup>

            <p className={stls.btwP}>
              *согласно опросу за 2020 год, 93% наших студентов окупили обучение
              уже на 2-й месяц
            </p>
          </div>
        </div>
      </Wrapper>
    </section>
  )
}

export default SectionStudyCost
