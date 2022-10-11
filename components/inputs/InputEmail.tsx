import stls from '@/styles/components/inputs/InputEmail.module.sass'
import cn from 'classnames'
import { useAt } from '@/hooks/index'

const InputEmail = ({ register, errors, width = '25', ...props }) => {
  const at = useAt()

  return (
    <div className={`input-block width-${width} ${props.className}`}>
      <input
        {...props}
        type='email'
        aria-label={at.en ? 'Email address' : 'Электронная почта'}
        {...register('email', {
          pattern: {
            value:
              /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
            message: `*${at.en ? 'Email address invalid' : 'Адрес почты введен неверно'
              }`
          }
        })}
        onFocus={e => e.target.classList.add('texted')}
        onBlur={e => (e.target.value === '')
          ? e.target.classList.remove('texted')
          : ''}
      />
      <div
        className={cn({
          'input-placeholder': true
        })}>
        {at.en ? 'Email address' : 'Электронная почта'}
      </div>
      <p className='inpt-err-msg'>{errors.email && errors.email.message}</p>
    </div>
  )
}

export default InputEmail
