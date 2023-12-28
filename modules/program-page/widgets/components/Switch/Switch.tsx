import stls from './Switch.module.sass'
import cn from 'classnames'
import { SwitchProps } from './types'

import useAt from '@/hooks/useAt'
import { useRouter } from 'next/router'
import { useContext, useState } from 'react'
import { ContextStaticProps } from '@/context/index'
import { JumbotronLabel } from '@/components/general'
import { Tag } from '../Tag/Tag'

export const Switch = ({ className, ...rest }: SwitchProps) => {
	const at = useAt()
	const router = useRouter()
	const { programs } = useContext(ContextStaticProps)

	const [toggleSwitch, setToggleSwitch] = useState(at.mini)

	const currentSlug = router.query.slug

	const alternativeType = at.mba ? 'mini' : at.mini ? 'mba' : null
	const alternativeStydyFormat = at.online ? 'online' : 'blended'

	const alternativeProgram =
		programs &&
		programs?.filter(
			prog =>
				prog.slug === currentSlug &&
				prog.category.type === alternativeType &&
				prog.studyFormat === alternativeStydyFormat &&
				prog.isActive
		)

	const alternativeLink =
		alternativeProgram &&
		alternativeProgram[0] &&
		`/programs/${alternativeType}/${alternativeStydyFormat}/${currentSlug}`

	const handleToggleSwitch = event => {
		setToggleSwitch(event.target.checked)
		router.push(alternativeLink)
	}

	return (
		<div className={cn(className, stls.wrapper)}>
			{!!alternativeLink ? (
				<div className={stls.container}>
					<input
						className={stls.check}
						id='checkbox_toggle'
						type='checkbox'
						defaultChecked={toggleSwitch}
						onChange={handleToggleSwitch}
						{...rest}
					/>
					<div className={stls.checkbox}>
						<label className={stls.slide} htmlFor='checkbox_toggle'>
							<label className={stls.toggle} htmlFor='checkbox_toggle'></label>
							<label className={stls.text} htmlFor='checkbox_toggle'>
								MBA online
							</label>
							<label
								className={cn(stls.text, stls.mini)}
								htmlFor='checkbox_toggle'
							>
								Mini MBA
							</label>
						</label>
					</div>
				</div>
			) : (
				<Tag variant='delta'>
					<JumbotronLabel />
				</Tag>
			)}
		</div>
	)
}
