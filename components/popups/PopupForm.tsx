import stls from '@/styles/components/popups/PopupForm.module.sass'
import { useState } from 'react'
import { useAt } from '@/hooks/index'
import { FormAlpha } from '@/components/forms'
import { LeadLoaderThankyou } from '@/components/general'
import { IconClose } from '@/components/icons'

const Form = ({
  closePopUpForm,
  programTitle = null,
  programId = null,
  title,
  disc = null,
  promoCourseLink = null,
  formName = null
}) => {
  const at = useAt()

  if (!title) title = at.en ? 'Contact us to get help' : 'Поможем в выборе'

  if (!disc)
    disc = at.en
      ? 'Leave your request for a consultation on the MBA programs, their fees, available discounts and admission requirements'
      : 'Оставьте заявку и получите консультацию по программам MBA, узнайте их точную стоимость, возможные варианты скидок и требования к поступлению'

  const [open, setOpen] = useState(false)
  const [openLoader, setOpenLoader] = useState(false)

  return (
    <div className='popup-modal'>
      <LeadLoaderThankyou
        open={open}
        setOpen={setOpen}
        openLoader={openLoader}
        setOpenLoader={setOpenLoader}
        programId={programId}
        programTitle={programTitle}
      />
      <div className='popup-content-origin red-bg'>
        <h2 className={stls.title}>{title}</h2>
        <div className='desc'>
          {!programTitle && disc}{' '}
          {programTitle &&
            !promoCourseLink &&
            `Оставьте заявку и получите консультацию по программе ${programTitle}, узнайте возможные варианты скидок и требования к поступлению`}
          {promoCourseLink &&
            'Оставьте заявку и получите консультацию по программе MBA, узнайте точную стоимость, возможные варианты скидок и требования к поступлению'}
        </div>
        <FormAlpha
          programTitle={programTitle}
          setOpenLoader={setOpenLoader}
          setOpen={setOpen}
          width='33'
          formName={formName}
        />
        <button className='mfp-close' type='button' onClick={closePopUpForm}>
          <IconClose />
        </button>
      </div>
    </div>
  )
}

export default Form
