import stls from '@/styles/components/inputs/InputPhone.module.sass'
import cn from 'classnames'
import { useAt } from '@/hooks/index'
import { handlePlaceholder } from '@/helpers/index'

const InputPhone = ({ register, errors, width = '25' }) => {
  const at = useAt()
  return (
    <div className={`input-block width-${width}`}>
      <input
        type='tel'
        aria-label={at.en ? 'Phone number' : 'Телефон'}
        {...register('phone', {
          required: `*${
            at.en
              ? 'Phone number is required'
              : 'Пожалуйста, введите Ваш номер телефона'
          }`,
          minLength: {
            value: 5,
            message: `*${
              at.en
                ? 'Phone number is too short'
                : 'Номер телефона слишком короткий'
            }`
          }
        })}
        onKeyUp={e => handlePlaceholder(e)}
      />
      <div
        className={cn({
          'input-placeholder': true
        })}>
        {at.en ? 'Phone number' : 'Телефон'}
      </div>
      <p className='inpt-err-msg'>{errors.phone && errors.phone.message}</p>
    </div>
  )
}

export default InputPhone
