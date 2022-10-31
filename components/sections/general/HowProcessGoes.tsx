import stls from '@/styles/components/sections/HowProcessGoes.module.sass'
import Image from 'next/image'
import { useEffect, useMemo, useRef, useState } from 'react'
import cn from 'classnames'
import { useAt, useScrollObserver } from '@/hooks/index'
import { Wrapper } from '@/components/layout'
import studentPhoto from '@/public/assets/images/student-using-laptop.jpg'

const HowProcessGoes = () => {
  const [activeStep, setActiveStep] = useState(0)
  const [processStepsNodes, setProcessStepsNodes] = useState<Element[]>()
  const at = useAt()
  const infoContainerRef = useRef(null)
  const isScroll = useScrollObserver(null, processStepsNodes)

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

  useEffect(() => {
    if (!infoContainerRef.current) return
    setProcessStepsNodes(
      processSteps.map((_step, idx) =>
        infoContainerRef.current?.children.item(idx + 1)
      )
    )
  }, [processSteps])

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
        <div className={stls.infoContainer} ref={infoContainerRef}>
          <ul className={stls.tabsList}>
            {processSteps.map((step, idx) => (
              <li
                key={step.tabTitle + idx}
                className={stls.tabItem}
                onClick={() => setActiveStep(idx)}>
                <a
                  className={cn(
                    stls.tabLink,
                    idx === activeStep && stls.activeTabLink
                  )}>
                  {step.tabTitle}
                </a>
              </li>
            ))}
          </ul>
          {processSteps.map((step, idx) => (
            <div
              key={idx + step.tabTitle}
              className={cn(
                stls.processStep,
                idx === activeStep && stls.activeProcessStep,
                isScroll[idx] && stls.processStepScroll
              )}>
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
      </Wrapper>
    </section>
  )
}

export default HowProcessGoes
