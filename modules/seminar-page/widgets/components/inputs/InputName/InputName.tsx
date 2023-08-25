import stls from './InputName.module.sass'
import cn from 'classnames'
import { useAt } from '@/hooks/index'

const InputName = ({ register, errors, width = '25' }) => {
	const at = useAt()
	return (
		<div className={`input-block width-${width}`}>
			<input
				className={stls.input}
				type='text'
				aria-label={at.en ? 'Name' : 'Имя'}
				{...register('name', {
					maxLength: {
						value: 32,
						message: `*${
							at.en
								? 'Name should be no longer than 32 symbols'
								: 'Введите имя не длинее, чем 32 символа'
						}`
					}
				})}
				onFocus={e => e.target.classList.add('texted')}
				onBlur={e =>
					e.target.value === '' ? e.target.classList.remove('texted') : ''
				}
			/>
			<div
				className={cn(stls.placeholder, {
					'input-placeholder': true
				})}>
				{at.en ? 'Name' : 'Имя'}
			</div>
			<p className='inpt-err-msg'>{errors.name && errors.name.message}</p>
		</div>
	)
}

export default InputName
