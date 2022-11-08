import stls from '@/styles/components/sections/HowProcessGoes.module.sass'
import Image from 'next/image'
import React, { RefObject, useEffect, useMemo, useRef, useState } from 'react'
import cn from 'classnames'
import { useAt, useScrollObserver } from '@/hooks/index'
import { Wrapper } from '@/components/layout'
import studentPhoto from '@/public/assets/images/student-using-laptop.jpg'

const HowProcessGoes = () => {
  const [activeStep, setActiveStep] = useState<number>(null)
  const [touchPoint, setTouchPoint] = useState<number>(null)
  const at = useAt()

  const processSteps = useMemo(
    () => [
      {
        tabTitle: 'Поступление',
        stepTitle: 'Поступление',
        listItems: [
          'Вы проходите собеседование со специалистом приемной комиссии, подписываете договор, осуществляете оплату и получаете доступ в образовательную платформу',
          'Ваш личный куратор презентует программу и расскажет о процессе обучения на вводном персональном занятии',
          'В личном кабинете Вам будет доступна вся информация по обучению: модули, график мероприятий, видеолекции и другие сервисы'
        ]
      },
      {
        tabTitle: 'Обучение',
        stepTitle: 'Обучение',
        listItems: [
          'Вы проходите программу последовательно: от модуля к модулю, от темы к теме',
          'Вы будете закреплять полученные знания на специальных кейсах, тренажерах и тестированиях',
          'В процессе обучения Вы будете выполнять домашние задания, участвовать в групповых заданиях и выполнять проектные работы'
        ]
      },
      {
        tabTitle: 'Помощь и обратная связь',
        stepTitle: 'Помощь и обратная связь от экспертов',
        listItems: [
          'Вы будете получать обратную связь по решению кейсов, проектным работам и домашним заданиям',
          'Вы сможете задать любой вопрос и получить советы и рекомендации',
          ...(!at.profession && !at.course
            ? [
                'В конце каждого модуля студенты принимают участие во внедренческих вебинарах, где разбираются итоги модуля и вопросы слушателей программы'
              ]
            : [])
        ]
      },
      {
        tabTitle: 'Сопровождение процесса обучения',
        stepTitle: 'Сопровождение процесса обучения',
        listItems: [
          'Вы получаете личного куратора, который поддерживает Вас по телефону и в мессенджерах и готов всегда ответить на Ваши вопросы',
          'Мы гарантируем результат за счет особой системы поддержки процесса обучения'
        ]
      },
      {
        tabTitle: 'Завершение обучения',
        stepTitle: 'Завершение обучения',
        listItems: [
          'Вы сдаете финальный экзамен по всей программе, готовитесь и защищаете выпускной проект перед аттестационной комиссией',
          at.profession || at.course
            ? 'По окончании обучения вы получаете престижный диплом установленного образца'
            : 'По окончании обучения вы получаете 2 престижных диплома'
        ]
      }
    ],
    [at.course, at.profession]
  )

  const stepsRefs = useRef<RefObject<HTMLDivElement>[]>(
    processSteps.map(() => React.createRef())
  )
  const tabsRefs = useRef<RefObject<HTMLLIElement>[]>(
    processSteps.map(() => React.createRef())
  )

  const isScroll = useScrollObserver(null, stepsRefs)

  useEffect(() => {
    const tabElement = tabsRefs.current[activeStep]?.current
    tabElement &&
      tabElement.scrollIntoView({
        inline: 'center',
        block: 'nearest',
        behavior: 'auto'
      })
  }, [activeStep])

  useEffect(() => {
    const stepElement = stepsRefs.current[activeStep]?.current
    stepElement &&
      stepElement.scrollIntoView({
        inline: 'start',
        block: 'nearest',
        behavior: 'smooth'
      })
  }, [activeStep])

  return (
    <section className={stls.container}>
      <Wrapper classNames={[stls.content]}>
        <div className={stls.titleContainer}>
          <h2 className={stls.title}>Как проходит процесс обучения</h2>
          {at.profession ||
            (at.course && (
              <div className={stls.studentPhoto}>
                <Image
                  src={studentPhoto}
                  height={337}
                  width={506}
                  alt={'Студент академии сидит перед ноутбуком'}
                />
              </div>
            ))}
        </div>
        <div className={stls.infoContainer}>
          <ul className={stls.tabsList}>
            {processSteps.map((step, idx) => (
              <li
                key={step.tabTitle + idx}
                className={stls.tabItem}
                ref={tabsRefs.current[idx]}
                onClick={() => {
                  setActiveStep(idx)
                }}>
                <a
                  className={cn(
                    stls.tabLink,
                    !activeStep && idx === 0 && stls.activeTabLink,
                    idx === activeStep && stls.activeTabLink
                  )}>
                  {step.tabTitle}
                </a>
              </li>
            ))}
          </ul>
          <div className={stls.stepsWrap}>
            {processSteps.map((step, idx) => (
              <div
                ref={stepsRefs.current[idx]}
                key={idx + step.tabTitle}
                onTouchStart={e => {
                  e.preventDefault()
                  setTouchPoint(e.changedTouches[0].clientX)
                }}
                onTouchEnd={e => {
                  e.preventDefault()
                  if (e.changedTouches[0].clientX === touchPoint) return
                  if (
                    e.changedTouches[0].clientX - touchPoint < 30 &&
                    e.changedTouches[0].clientX - touchPoint > -30
                  )
                    return
                  if (e.changedTouches[0].clientX < touchPoint)
                    return setActiveStep(prev =>
                      prev + 1 < processSteps.length ? ++prev : prev
                    )
                  setActiveStep(prev => (prev - 1 >= 0 ? --prev : prev))
                }}
                className={cn(stls.processStep)}>
                <span
                  className={stls.redStick}
                  style={{
                    height: `calc(${Number(isScroll[idx]) * 100}% - 48px)`
                  }}
                />
                <div className={stls.processStepNumber}>{idx + 1}</div>
                <div className={stls.processStepTitle}>{step.stepTitle}</div>
                <ul className={stls.list}>
                  {step.listItems.map((item, idx) => (
                    <li key={item + idx} className={stls.listItem}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Wrapper>
    </section>
  )
}

export default HowProcessGoes
