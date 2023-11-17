import stls from './NoResult.module.sass'
import { NoResultProps } from './types'

import useDecodedInput from '@/hooks/useDecodedInput'
import { FormAlpha } from '@/components/forms'

export const NoResult = ({ setOpen, setOpenLoader }: NoResultProps) => {
	const { searchTerm } = useDecodedInput('')

	return (
		<div className={stls.formAlphaContainer}>
			<p className={stls.formAlphaTitle}>По Вашему запросу ничего не найдено</p>
			<p className={stls.formAlphaText}>
				Попробуйте ввести запрос по-другому или свяжитесь со специалистом. Вам
				помогут подобрать нужное направление и ответят на вопросы
			</p>
			<FormAlpha
				programTitle={null}
				setOpenLoader={setOpenLoader}
				setOpen={setOpen}
				classNames={[stls.formAlpha]}
				globalStyle={false}
				formName={`Заявка с поисковой формы "По вашему запросу ничего не найдено, свяжитесь со специалистом"${
					searchTerm ? `, запрос пользователя: ${searchTerm?.toString()}` : ''
				}`}
			/>
		</div>
	)
}
