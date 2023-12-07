import { SVGProps } from 'react'

export const IconArrow = ({ ...rest }: SVGProps<SVGSVGElement>) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='48'
			height='48'
			viewBox='0 0 48 48'
			fill='none'
			{...rest}
		>
			<path
				d='M5.32731 5.32706C5.83509 4.81929 6.59609 4.6619 7.26363 4.92662L42.0636 18.7266C42.6762 18.9695 43.1071 19.5278 43.1869 20.1819C43.2666 20.8361 42.9826 21.4815 42.4463 21.8646L35.7754 26.6295L42.6729 33.5271C43.3758 34.23 43.3758 35.3697 42.6729 36.0726L36.0729 42.6726C35.3699 43.3756 34.2302 43.3756 33.5273 42.6726L26.6298 35.7751L21.8648 42.4461C21.4818 42.9823 20.8363 43.2664 20.1822 43.1866C19.528 43.1068 18.9698 42.676 18.7269 42.0634L4.92686 7.26338C4.66215 6.59585 4.81953 5.83484 5.32731 5.32706Z'
				fill='#FF3535'
			/>
		</svg>
	)
}