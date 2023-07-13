import { useAt } from '@/hooks/index'

const JumbotronLabel = () => {
	const at = useAt()

	const txt = at.mini
		? 'Mini MBA'
		: at.mba
		? 'MBA'
		: at.profession
		? 'Проф. переподготовка'
		: at.course
		? 'Повышение квалификации'
		: at.executive
		? 'Executive MBA'
		: at.mbl
		? 'MBA'
		: ''

	return (
		<span>
			{at.online
				? `${txt} ${!at.profession && !at.course ? 'ONLINE' : ''}`
				: at.blended
				? `${txt} BLENDED`
				: at.executive
				? txt
				: at.mbl
				? `${txt} ONLINE`
				: ''}
		</span>
	)
}

export default JumbotronLabel
