import stls from '@/styles/components/general/CourseAccordion.module.sass'
import classNames from 'classnames'
import { useState, useEffect } from 'react'
import { Transition } from 'react-transition-group'
import Popup from 'reactjs-popup'
import PopupForm from '@/components/popups/PopupForm'
import Until from '@/components/costs/Until'
import TrainingPeriod from '@/components/costs/TrainingPeriod'
import { IconCheckCircle, IconClock, IconScreen } from '@/components/icons'

const duration = 0.6

const initialStyles = {
  opacity: 0,
  transition: `all ${duration}s ease-out`
}

const transitionStyles = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 }
}

const CourseAccordion = ({
  course,
  accordionIndex,
  activeAccordion,
  setActiveAccordion
}) => {
  const [isShown, setIsShown] = useState(false)
  const { title, whatWillYouLearn, mbaTypeOfProgram, mbaFormat, url } = course

  useEffect(() => setIsShown(true), [])

  const coursePros = [
    'Международный диплом установленного образца с присвоением степени MBA',
    <>
      <span>Последнее обновление </span>
      программы было в 2021 г.
    </>,
    <>
      <span>Разработана по </span>
      международным стандартам
    </>,
    <>
      <span>Спикеры являются </span>
      практикующими специалистами
    </>
  ]

  const handleAccordionClick = () => {
    if (activeAccordion) setActiveAccordion(-1)

    if (!activeAccordion && setActiveAccordion)
      setActiveAccordion(accordionIndex)
  }

  return (
    <Transition in={isShown} timeout={duration}>
      {state => (
        <div
          style={{ ...initialStyles, ...transitionStyles[state] }}
          className={classNames(stls.container, {
            [stls.opened]: activeAccordion
          })}>
          <div
            className={stls.mainInfoContainer}
            onClick={handleAccordionClick}>
            <span className={stls.accordionLabel}>Курс MBA</span>
            <ul className={stls.courseMainInfoList}>
              <li className={stls.courseMainInfoItem}>
                От {<TrainingPeriod type={mbaTypeOfProgram} />}
              </li>
              <li className={stls.courseMainInfoItem}>Очно или дистанционно</li>
              <li className={stls.courseMainInfoItem}>
                Ближайшее зачисление {<Until preposition={false} />}
              </li>
            </ul>
            <h3 className={stls.courseTitle}>{title}</h3>
            <div className={stls.plus}>
              <i></i>
              <i></i>
            </div>
          </div>
          <div className={stls.additionalInfoContainer}>
            <p className={stls.listTitle}>Чему научитесь:</p>
            <ul className={stls.whatWillLearnList}>
              {whatWillYouLearn.map(item => (
                <li key={item} className={stls.whatWillLearnItem}>
                  {item}
                </li>
              ))}
            </ul>
            <ul className={stls.courseAdditionalInfoList}>
              <li className={stls.courseAdditionalInfoItem}>
                <IconClock fill={'#ff3535'} />
                От {<TrainingPeriod type={mbaTypeOfProgram} />}
              </li>
              <li className={stls.courseAdditionalInfoItem}>
                <IconScreen fill={'#ff3535'} />
                Дистанционное или очное обучение
              </li>
            </ul>
            <ul className={stls.courseProsList}>
              {coursePros.map((pro, idx) => (
                <li key={idx} className={stls.courseProsItem}>
                  <IconCheckCircle fill={'#ff3535'} />
                  <p className={stls.courseProDesc}>{pro}</p>
                </li>
              ))}
            </ul>
            <Popup
              trigger={
                <a className={stls.learnMoreBtn}>Узнать больше о программе</a>
              }
              modal
              nested>
              {close => (
                <PopupForm
                  title={'Получите консультацию по программе'}
                  closePopUpForm={close}
                  programTitle={title}
                  promoCourseLink={`/programs/${mbaTypeOfProgram}/${mbaFormat}/${url}`}
                />
              )}
            </Popup>
          </div>
        </div>
      )}
    </Transition>
  )
}

export default CourseAccordion
