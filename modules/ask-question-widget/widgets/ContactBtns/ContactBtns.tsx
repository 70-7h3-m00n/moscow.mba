import stls from './ContactBtns.module.sass'

import { BtnContact } from '@/components/btns'
import { waysToContact } from '../../constants'

export const ContactBtns = ({ dataToCreateButtons }) => {
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
				key={wayToContact.way + idx}
				wayToContact={wayToContact}
				chooseWayToContact={selectedWayToContact => {
					handleUserClick(selectedWayToContact, 1, userQuestion)
				}}
			/>
		))
	}

	if (selectMethod) {
		buttons = wayToContact.contactMethods.map((method, idx) => (
			<button
				key={method.name + idx}
				onClick={() => handleUserClick(method.name)}
				className={`button ${stls.formStageButton}`}
			>
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
				onClick={() => setIsContactDataInputTouched(true)}
			>
				Отправить
			</button>
		)
	}

	return <>{buttons}</>
}
