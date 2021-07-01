import stls from '@/styles/modules/sections/JumbotronCta.module.sass'
import 'reactjs-popup/dist/index.css'
import Image from 'next/image'
import Link from 'next/link'
import SetString from '@/components/hooks/SetString'
import lang from '@/data/translation/index'
import onSubmitForm from '@/components/hooks/onSubmitForm'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import handlePlaceholder from '@/components/general/forms/handlePlaceholder'
import PopupThankyou from '@/components/popups/PopupThankyou'
import Popup from 'reactjs-popup'
import PopupLoader from '@/components/popups/PopupLoader'
import Until from '@/components/costs/Until'
import { useRouter } from 'next/router'

type FormValues = {
  name: string
  phone: string
}

const JumbotronCta = ({ programTitle = null, programId = null }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<FormValues>()

  const [open, setOpen] = useState(false)
  const [openLoader, setOpenLoader] = useState(false)
  const closeModal = () => setOpen(false)
  const closeLoadingModal = () => setOpenLoader(false)

  const { asPath } = useRouter()

  const onSubmitFormThis = async values => {
    setOpenLoader(o => !o)
    values.programTitle = programTitle
    values.leadPage = asPath
    const req = await onSubmitForm(values)
    if (req === 200) {
      closeLoadingModal()
      setOpen(o => !o)
      reset()
    } else {
      console.log('err')
    }
  }

  const handleKeyUp = e => {
    handlePlaceholder(e)
  }

  return (
    <section className='jumbotron-section jumbotron-section--cta'>
      <Popup open={openLoader} onClose={closeLoadingModal}>
        <PopupLoader closePopUp={closeLoadingModal} />
      </Popup>
      <Popup open={open} closeOnDocumentClick onClose={closeModal}>
        <PopupThankyou
          closePopUp={closeModal}
          programId={programId}
          programTitle={programTitle}
        />
      </Popup>
      <div className='image'>
        <Image
          src='/assets/images/jumbotron_1.jpg'
          alt={'Аудитория MBA'}
          layout='fill'
        />
      </div>
      <div className='container'>
        <div className='jumbotron-content jumbotron-content-cta'>
          <div className='jumbotron-flex'>
            <div className='jumbotron-text'>
              <ul className='jumCta-links desktop'>
                <li>
                  {/* <Link href='/programs/industry'>
                    <a>INDUSTRY MBA</a>
                  </Link> */}
                  INDUSTRY MBA
                </li>
                <li className='jumCta-links__border'></li>
                <li>
                  {/* <Link href='/programs/professional'>
                    <a>PROFESSIONAL MBA</a>
                  </Link> */}
                  PROFESSIONAL MBA
                </li>
                <li className='jumCta-links__border'></li>
                <li>
                  {/* <Link href='/programs/mini'>
                    <a>MINI MBA</a>
                  </Link> */}
                  MINI MBA
                </li>
                <li className='jumCta-links__border'></li>
                <li>{SetString(lang.courses)}</li>
              </ul>

              <ul className='jumCta-links mobile'>
                <li>
                  <Link href='/programs' locale='ru'>
                    <a>{SetString(lang.programsMbaMobileLink)}</a>
                  </Link>
                </li>
              </ul>
              <h1>
                {SetString(lang.headerTitlePreHighlight)}{' '}
                <span className='red'>
                  {SetString(lang.headerTitleHighlight)}
                </span>{' '}
                {SetString(lang.headerTitlePostHighlight)}
              </h1>
              <div className='jumCta-desc-top'>
                <span className='red'>
                  {SetString(lang.headerDescTopHightlight)}
                </span>{' '}
                {SetString(lang.headerDescTop)} <Until preposition={true} />!
              </div>
              <div className='jumCta-form-desc'>
                <p className='jumCta-desc-bottom'>
                  {SetString(lang.headerDescription)}
                </p>
                <form
                  method='post'
                  className='simple-form support-form embedded-form'
                  onSubmit={handleSubmit(onSubmitFormThis)}>
                  <div className='inputs-flex inputs-flex--alt'>
                    <div className='input-block width-33'>
                      <input
                        type='text'
                        aria-label={SetString(lang.inputName)}
                        {...register('name', {
                          maxLength: {
                            value: 32,
                            message: `*${SetString(lang.formErrLongName)}`
                          }
                        })}
                        onKeyUp={handleKeyUp}
                      />
                      <div className='input-placeholder'>
                        {SetString(lang.inputName)}
                      </div>
                      <p className='inpt-err-msg'>
                        {errors.name && errors.name.message}
                      </p>
                    </div>
                    <div className='input-block width-33'>
                      <input
                        type='tel'
                        aria-label={SetString(lang.inputPhone)}
                        {...register('phone', {
                          required: `*${SetString(lang.formErrEmptyPhone)}`,
                          minLength: {
                            value: 5,
                            message: `*${SetString(lang.formErrShortPhone)}`
                          }
                        })}
                        onKeyUp={handleKeyUp}
                      />
                      <div className='input-placeholder'>
                        {SetString(lang.inputPhone)}
                      </div>
                      <p className='inpt-err-msg'>
                        {errors.phone && errors.phone.message}
                      </p>
                    </div>
                    <div className='input-block width-33'>
                      <button
                        type='submit'
                        className={`button red-button ${
                          errors.name || errors.phone ? 'btn-disabled' : ''
                        }`}
                        disabled={errors.name || errors.phone ? true : false}>
                        {SetString(lang.inputSubmitAlt)}
                        <div className='arrow'>
                          <img
                            src='/assets/images/arrow_diagonal.svg'
                            width='17px'
                            alt={'стрелка'}
                          />
                        </div>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <ul className='jumbotron-list'>
              <li>
                <div className='number'>100+</div>
                <p>{SetString(lang.benefitOneDisc)}</p>
              </li>
              <li>
                <div className='number'>2021+</div>
                <p>{SetString(lang.benefitTwoDisc)}</p>
              </li>
              <li>
                <div className='number'>150+</div>
                <p>{SetString(lang.benefitThreeDisc)}</p>
              </li>
              <li>
                <div className='number'>2000+</div>
                <p>{SetString(lang.benefitFourDisc)}</p>
              </li>
            </ul>
          </div>
          <ul className='jumbotron-red-info'>
            <li>
              <div className='detail'>{SetString(lang.jumInfoOne)}</div>
            </li>
            <li>
              <div className='detail'>{SetString(lang.jumInfoTwo)}</div>
            </li>
            <li>
              <div className='detail'>{SetString(lang.jumInfoThree)}</div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default JumbotronCta
