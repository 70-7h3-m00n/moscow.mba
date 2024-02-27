import stls from './BreadcrumbsSection.module.sass'
import cn from 'classnames'
import { BreadcrumbsSectionProps } from './types'

import { BreadcrumbsAlt } from '@/components/general/BreadcrumbsAlt/BreadcrumbsAlt'
import { Wrapper } from '@/components/layout'
import React, { useContext } from 'react'
import { ProgramPageContext } from 'modules/program-page/fractals/context/context'

export const BreadcrumbsSection = ({
	className,
	program,
	...rest
}: BreadcrumbsSectionProps) => {
	return (
		<div className={cn(className, stls.container)} {...rest}>
			<Wrapper classNames={[stls.content]}>
				<BreadcrumbsAlt programChunkData={program} />
			</Wrapper>
		</div>
	)
}
