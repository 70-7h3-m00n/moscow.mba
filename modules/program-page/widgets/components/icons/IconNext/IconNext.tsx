import { SVGProps } from 'react'

export const IconNext = ({ ...rest }: SVGProps<SVGSVGElement>) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'
			{...rest}
		>
			<circle cx='12' cy='12' r='12' fill='#18191A' />
			<path
				d='M10.1741 8.17705L10.1031 8.10655C9.97303 8.23743 9.9 8.41448 9.9 8.59902C9.9 8.78353 9.973 8.96055 10.1031 9.09142C10.1031 9.09144 10.1031 9.09147 10.1031 9.09149L12.9958 12.0134L10.1033 14.9058L10.1031 14.906C9.97303 15.0369 9.9 15.2139 9.9 15.3985C9.9 15.5829 9.97293 15.7598 10.1029 15.8907C10.1675 15.9566 10.2446 16.009 10.3296 16.0449C10.4148 16.0809 10.5062 16.0996 10.5986 16.1L10.5994 16.1C10.6919 16.0996 10.7833 16.0809 10.8684 16.0449C10.9534 16.009 11.0304 15.9566 11.095 15.8908C11.0951 15.8907 11.0953 15.8906 11.0954 15.8904L14.481 12.5108C14.5512 12.4456 14.6073 12.3667 14.6457 12.279C14.6844 12.1906 14.7044 12.0952 14.7044 11.9987C14.7044 11.9023 14.6844 11.8068 14.6457 11.7185C14.6073 11.6307 14.5512 11.5519 14.481 11.4867L11.095 8.10663C11.0949 8.10657 11.0949 8.10651 11.0948 8.10645C11.0299 8.04106 10.9527 7.98915 10.8677 7.95372C10.7825 7.91826 10.6912 7.9 10.599 7.9C10.5068 7.9 10.4155 7.91826 10.3304 7.95372C10.2452 7.98919 10.168 8.04115 10.1031 8.10663L10.1741 8.17705ZM10.1741 8.17705C10.2297 8.12095 10.2959 8.07642 10.3688 8.04603C10.4418 8.01564 10.52 8 10.599 8C10.678 8 10.7563 8.01564 10.8292 8.04603C10.9021 8.07642 10.9683 8.12095 11.024 8.17705L10.1741 9.02099C10.0626 8.90885 10 8.75715 10 8.59902C10 8.44089 10.0626 8.28919 10.1741 8.17705Z'
				fill='white'
				stroke='white'
				strokeWidth='0.2'
			/>
		</svg>
	)
}