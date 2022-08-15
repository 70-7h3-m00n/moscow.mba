import stls from '@/styles/components/forms/AskQuestionFormStage.module.sass'
import { useState, useEffect, useContext } from 'react'
import { useRouter } from 'next/router'
import TagManager from 'react-gtm-module'
import { BtnContact } from '@/components/btns'
import { v4 as uuidv4 } from 'uuid'
import { useAt } from '@/hooks/index'
import { colors } from '@/config/index'
import { ContextStaticProps } from '@/context/index'
// import {
//   IconArrowLeft,
//   IconTelegram,
//   IconWhatsapp,
//   IconViber,
//   IconVk,
//   IconEmail,
//   IconCheck,
//   IconPhoneAlt
// } from '@/components/icons'
import IconArrowLeft from '@/components/icons/IconArrowLeft'
import IconTelegram from '@/components/icons/IconTelegram'
import IconWhatsapp from '@/components/icons/IconWhatsapp'
import IconViber from '@/components/icons/IconViber'
import IconVk from '@/components/icons/IconVk'
import IconEmail from '@/components/icons/IconEmail'
import IconCheck from '@/components/icons/IconCheck'
import IconPhoneAlt from '@/components/icons/IconPhoneAlt'

// TODO: translate this whole file to EN with useAt

const waysToContact = [
  {
    name: 'Telegram',
    stageStep: 1,
    svg: <IconTelegram />,
    contactMethods: [
      {
        name: 'Позвонить',
        icon: <IconPhoneAlt />
      },
      {
        name: 'Написать',
        icon: <IconTelegram />
      }
    ],
    validationRules: {
      shouldBeValidated: true,
      validationType: 'phone'
    },
    contactButtonClass: 'telegramButton'
  },
  {
    name: 'WhatsApp',
    stageStep: 1,
    svg: <IconWhatsapp />,
    contactMethods: [
      {
        name: 'Позвонить',
        icon: <IconPhoneAlt />
      },
      {
        name: 'Написать',
        icon: <IconTelegram />
      }
    ],
    validationRules: {
      shouldBeValidated: true,
      validationType: 'phone'
    },
    contactButtonClass: 'whatsAppButton'
  },
  {
    name: 'Viber',
    stageStep: 1,
    svg: <IconViber />,
    contactMethods: [
      {
        name: 'Позвонить',
        icon: <IconPhoneAlt />
      },
      {
        name: 'Написать',
        icon: <IconTelegram />
      }
    ],
    validationRules: {
      shouldBeValidated: true,
      validationType: 'phone'
    },
    contactButtonClass: 'viberButton'
  },
  {
    name: 'VK',
    stageStep: 2,
    svg: <IconVk />,
    contactMethods: [
      {
        name: 'Написать',
        icon: <IconTelegram />
      }
    ],
    validationRules: {
      shouldBeValidated: true,
      validationType: 'vk'
    },
    contactButtonClass: 'vkButton'
  },
  {
    name: 'Телефон',
    stageStep: 2,
    svg: <IconPhoneAlt />,
    contactMethods: [
      {
        name: 'Позвонить',
        icon: <IconPhoneAlt />
      }
    ],
    validationRules: {
      shouldBeValidated: true,
      validationType: 'phone'
    },
    contactButtonClass: 'mobilePhoneButton'
  },
  {
    name: 'Email',
    stageStep: 2,
    svg: <IconEmail />,
    contactMethods: [
      {
        name: 'Написать',
        icon: <IconTelegram />
      }
    ],
    validationRules: {
      shouldBeValidated: true,
      validationType: 'email'
    },
    contactButtonClass: 'emailButton'
  }
]

const createWayToContactTitle = (wayToContact, enterContactData) => {
  let wayToContactTitle = wayToContact.name

  if (enterContactData && wayToContact.selectedMethod)
    wayToContactTitle += ` / ${wayToContact.selectedMethod}`

  return <p className={stls.wayToContactTitle}>{wayToContactTitle}</p>
}

const createFormStageTitleContainer = dataToCreateTitleContainer => {
  const { wayToContact, enterContactData, handleUserGoingBack } =
    dataToCreateTitleContainer
  const { stageStep } = wayToContact

  const wayToContactTitle = createWayToContactTitle(
    wayToContact,
    enterContactData
  )

  const formStageTitleContainer = (
    <div className={stls.wayToContactTitleContainer}>
      <button
        className={stls.goBackArrow}
        onClick={() => handleUserGoingBack(stageStep)}>
        <IconArrowLeft
          classNames={[stls.IconArrowLeft]}
          color={colors['beta-2']}
          title={'Назад'}
        />
      </button>
      {wayToContactTitle}
    </div>
  )

  return formStageTitleContainer
}

const createButtons = dataToCreateButtons => {
  const {
    wayToContact,
    selectWay,
    selectMethod,
    enterContactData,
    handleUserClick,
    setIsContactDataInputTouched,
    userQuestion
  } = dataToCreateButtons

  let buttons

  if (selectWay) {
    buttons = waysToContact.map((wayToContact, idx) => (
      <BtnContact
        key={wayToContact.name + idx}
        wayToContact={wayToContact}
        chooseWayToContact={selectedWayToContact => {
          handleUserClick(
            selectedWayToContact,
            wayToContact.stageStep,
            userQuestion
          )
        }}
      />
    ))
  }

  if (selectMethod) {
    buttons = wayToContact.contactMethods.map((method, idx) => (
      <button
        key={method.name + idx}
        onClick={() => handleUserClick(method.name)}
        className={`button ${stls.formStageButton}`}>
        <div className={stls.btnContent}>
          {method.icon} {method.name}
        </div>
      </button>
    ))
  }

  if (enterContactData) {
    buttons = (
      <button
        className={`button ${stls.formStageButton} ${stls.sendButton}`}
        onClick={() => setIsContactDataInputTouched(true)}>
        Отправить
      </button>
    )
  }

  return buttons
}

const showSelectWayStage = dataToShowThisStage => {
  const {
    userQuestion,
    setUserQuestion,
    questionTextareaPlaceholder,
    isQuestionTextareaTouched,
    setIsQuestionTextareaTouched
  } = dataToShowThisStage

  const questionTextareaPlaceholderClasses = [stls.questionTextareaPlaceholder]

  if (isQuestionTextareaTouched)
    questionTextareaPlaceholderClasses.push(
      stls.questionTextareaPlaceholderInvisible
    )

  const buttons = createButtons(dataToShowThisStage)

  return (
    <>
      <textarea
        autoFocus
        placeholder='Напишите вопрос...'
        value={userQuestion}
        onChange={e => setUserQuestion(e.target.value)}
        className={stls.questionTextarea}
      />
      <p className={questionTextareaPlaceholderClasses.join(' ')}>
        {questionTextareaPlaceholder}
      </p>
      <div className={stls.waysToContactGrid}>
        <p className={stls.howToContact}>Куда ответить:</p>
        {buttons}
      </div>
    </>
  )
}

const showSelectMethodStage = dataToShowThisStage => {
  const formStageTitleContainer =
    createFormStageTitleContainer(dataToShowThisStage)
  const buttons = createButtons(dataToShowThisStage)

  return (
    <>
      {formStageTitleContainer}
      <div className={stls.bottomContainer}>{buttons}</div>
    </>
  )
}

const showEnterContactDataStage = dataToShowThisStage => {
  const {
    wayToContact,
    handleUserClick,
    isContactDataInputTouched,
    setIsContactDataInputTouched,
    inputPlaceholderText,
    setInputPlaceholderText,
    leadPage,
    programTitle
  } = dataToShowThisStage

  const inputPlaceholderClasses = [stls.inputPlaceholder]

  if (isContactDataInputTouched)
    inputPlaceholderClasses.push(stls.inputPlaceholderSmall)

  const formStageTitleContainer =
    createFormStageTitleContainer(dataToShowThisStage)

  const buttons = createButtons(dataToShowThisStage)

  const {
    validationRules: { shouldBeValidated, validationType }
  } = wayToContact

  const checkEnteredContactDataValidity = enteredContactData => {
    if (!shouldBeValidated) return true

    const validationPatterns = {
      phone: /.{5}/,
      email:
        /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
      vk: /.{1}/
    }

    const isValid = validationPatterns[validationType].test(enteredContactData)

    return isValid
  }

  const handleFormSubmit = e => {
    e.preventDefault()

    const contactDataInput = e.target.querySelector('input')
    const enteredContactData = contactDataInput.value

    const isValid = checkEnteredContactDataValidity(enteredContactData)

    if (!isValid && validationType === 'phone') {
      setInputPlaceholderText('*Номер указан неверно')
    }

    if (!isValid && validationType === 'email') {
      setInputPlaceholderText('*Адрес почты указан неверно')
    }

    if (!isValid && validationType === 'vk') {
      setInputPlaceholderText('*ID ВКонтакте указан неверно')
    }

    if (!isValid) contactDataInput.focus()

    if (isValid) {
      const { name, selectedMethod, question } = wayToContact

      const userDataToSend = {
        contactWay: name,
        contactMethod: selectedMethod,
        [validationType]: enteredContactData,
        question,
        leadPage,
        programTitle
      }

      handleUserClick(userDataToSend)
    }
  }

  return (
    <>
      {formStageTitleContainer}
      <form onSubmit={handleFormSubmit}>
        <div className={stls.bottomContainer}>
          <div className={stls.inputContainer}>
            <input
              type='text'
              className={stls.contactDataInput}
              onClick={() => setIsContactDataInputTouched(true)}
            />
            <span className={inputPlaceholderClasses.join(' ')}>
              {inputPlaceholderText}
            </span>
          </div>
          {buttons}
        </div>
      </form>
    </>
  )
}

const showFormSubmittedStage = () => {
  return (
    <div
      className={`${stls.formSubmitted} thanks-popup-content thanks-popup-content--question`}>
      <div className={`circle ${stls.circle}`}>
        <IconCheck />
      </div>
      <h3 className={stls.thanksForSubmitting}>Спасибо за заявку!</h3>
      <p className={stls.weWillContactYouPara}>
        Менеджер свяжется с Вами в ближайшее время
      </p>
    </div>
  )
}

const AskQuestionFormStage = ({
  wayToContact,
  handleUserClick,
  handleUserGoingBack,
  selectWay = false,
  selectMethod = false,
  enterContactData = false,
  formSubmitted = false
}) => {
  const router = useRouter()
  const leadPage = router.asPath
  const at = useAt()
  const { program } = useContext(ContextStaticProps)

  let validationType

  if (wayToContact) validationType = wayToContact.validationRules.validationType

  const whatDataToEnter = {
    phone: 'номер',
    email: 'электронную почту',
    vk: 'ID ВКонтакте'
  }

  const [userQuestion, setUserQuestion] = useState(wayToContact?.question ?? '')

  const [isContactDataInputTouched, setIsContactDataInputTouched] =
    useState(false)

  const [inputPlaceholderText, setInputPlaceholderText] = useState(
    `Введите ${whatDataToEnter[validationType]}`
  )

  const dataToShowSpecificStage = {
    wayToContact,
    selectWay,
    selectMethod,
    enterContactData,
    handleUserClick,
    handleUserGoingBack,
    userQuestion,
    setUserQuestion,
    isContactDataInputTouched,
    setIsContactDataInputTouched,
    inputPlaceholderText,
    setInputPlaceholderText,
    leadPage,
    programTitle: program?.title
  }

  useEffect(() => {
    if (formSubmitted) {
      const tagManagerArgs = {
        dataLayer: {
          event: 'generate_lead',
          ecommerce: {
            add: {
              actionField: {
                id: uuidv4()
              },
              products: [
                {
                  id: 'question',
                  name: 'question',
                  programFormat: at.online
                    ? 'online'
                    : at.blended
                    ? 'blended'
                    : null,
                  programType: at.mini
                    ? 'mini'
                    : at.mba
                    ? 'mba'
                    : at.profession
                    ? 'profession'
                    : at.course
                    ? 'course'
                    : null
                }
              ]
            }
          }
        },
        dataLayerName: 'dataLayer'
      }
      TagManager.dataLayer(tagManagerArgs)
    }
  }, [])

  if (selectWay) return showSelectWayStage(dataToShowSpecificStage)

  if (selectMethod) return showSelectMethodStage(dataToShowSpecificStage)

  if (enterContactData)
    return showEnterContactDataStage(dataToShowSpecificStage)

  if (formSubmitted) return showFormSubmittedStage()
}

export default AskQuestionFormStage
