import { IconArrow } from 'modules/program-page/widgets/components'
import stls from './BonusModule.module.sass'

export const BonusModule = () => {
	return (
		<div className={stls.content}>
			<div className={stls.text}>
				После прохождения основной программы вы можете продолжить обучение на
				бонусных модулях, цель которых —&nbsp;закрепить полученные знания
			</div>
			<div className={stls.arrowIcon}>
				<IconArrow className={stls.icon} />
			</div>
		</div>
	)
}
