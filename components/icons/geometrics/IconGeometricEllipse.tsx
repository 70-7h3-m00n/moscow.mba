import { SVGProps } from 'react'

interface IconGeometricEllipseProps extends SVGProps<SVGSVGElement> {
	width: number
	height: number
	stroke?: string
}

export default function IconGeometricEllipse({
	width,
	height,
	stroke = '#FF3535',
	className,
	...rest
}: IconGeometricEllipseProps) {
	return (
		<svg
			className={className}
			width={width}
			height={height}
			viewBox='0 0 601 601'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			{...rest}>
			<circle cx='300.5' cy='300.5' r='300' stroke={stroke} />
		</svg>
	)
}
