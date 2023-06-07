import stls from '@/styles/components/icons/IconUser.module.sass'
import { TypeClassNames, TypeColor } from '@/types/index'
import cn from 'classnames'
import { colors } from '@/config/index'
import { getClassNames } from '@/helpers/index'
import { IconContainer } from '@/components/layout'
import React from 'react'

type TIconSearchProps = TypeClassNames & {
	color?: TypeColor
	style?: React.CSSProperties
	onClick?: React.MouseEventHandler
}

// TODO: improve structure
const IconUser: React.FC<TIconSearchProps> = ({
	classNames,
	color,
	style = {},
	...props
}): JSX.Element => {
	return (
		<IconContainer
			classNames={[
				cn(stls.container, getClassNames({ classNames })) || undefined
			]}
			{...props}>
			<svg
				style={style}
				width='24'
				height='24'
				viewBox='0 0 24 24'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'>
				<path
					d='M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21'
					fill={color || colors.omega}
				/>
				<path
					d='M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21H20Z'
					stroke={color || colors.omega}
					strokeWidth='2'
					strokeLinecap='square'
					strokeLinejoin='round'
				/>
				<path
					d='M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z'
					fill={color || colors.omega}
					stroke={color || colors.omega}
					strokeWidth='2'
					strokeLinecap='square'
					strokeLinejoin='round'
				/>
			</svg>
		</IconContainer>
	)
}

export default IconUser
