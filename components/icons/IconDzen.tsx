import stls from '@/styles/components/icons/IconDzen.module.sass'
import { TypeClassNames, TypeColor } from '@/types/index'
import cn from 'classnames'
import { colors } from '@/config/index'
import { getClassNames } from '@/helpers/index'
import { IconContainer } from '@/components/layout'

type TIconDzenProps = {
	fill?: TypeColor
	classNames?: string[]
}

// TODO: improve structure
const IconDzen = ({ fill = '#fff', classNames }: TIconDzenProps) => {
	return (
		<span className={cn(stls.container, classNames)}>
			<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'>
				<path
					fill={fill}
					d='M42.26 22.927c.014 0 .027 0 .041 0 .427 0 .833-.182 1.118-.5.294-.329.429-.771.367-1.208-1.23-8.814-8.247-15.811-17.063-17.015-.436-.057-.869.073-1.196.362S25.015 5.274 25.02 5.71C25.198 19.959 27.776 22.534 42.26 22.927zM42.261 25.071C27.774 25.456 25.196 28.031 25.02 42.29c-.005.437.18.854.507 1.143.275.244.63.376.993.376.067 0 .135-.004.203-.014 8.818-1.204 15.835-8.202 17.063-17.017.062-.437-.073-.878-.367-1.207C43.124 25.242 42.698 25.049 42.261 25.071zM5.736 25.063c-.438-.022-.863.171-1.156.5-.294.329-.428.77-.367 1.206 1.225 8.82 8.242 15.821 17.064 17.026.068.009.136.014.203.014.363 0 .718-.132.993-.376.327-.289.512-.706.507-1.143C22.804 28.008 20.225 25.432 5.736 25.063zM21.277 4.205C12.455 5.41 5.438 12.411 4.213 21.231c-.061.437.073.877.367 1.206.284.319.691.5 1.118.5.013 0 .025 0 .038 0C20.225 22.568 22.804 19.992 22.98 5.71c.005-.437-.18-.854-.507-1.143C22.147 4.279 21.716 4.148 21.277 4.205z'
				/>
			</svg>
		</span>
	)
}

export default IconDzen