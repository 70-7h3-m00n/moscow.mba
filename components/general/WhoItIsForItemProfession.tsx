import stls from '@/styles/components/general/WhoItIsForItemProfession.module.sass'
import { HTMLAttributes } from 'react'

type WhoItIsForItemProfessionProps = HTMLAttributes<HTMLDivElement> & {
	name: string
	description: string
}

const WhoItIsForItemProfession = ({
	name,
	description
}: WhoItIsForItemProfessionProps) => {
	return (
		<div className={stls.container}>
			<h3 className={stls.name}>{name}</h3>
			<p className={stls.description}>{description}</p>
		</div>
	)
}

export default WhoItIsForItemProfession
