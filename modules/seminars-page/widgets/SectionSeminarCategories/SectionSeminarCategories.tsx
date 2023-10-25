import stls from './SectionSeminarCategories.module.sass'
import cn from 'classnames'
import { SectionSeminarCategoriesProps } from './types'
import { useContext } from 'react'
import { contextStaticPropsSeminars } from 'pages/seminars'

const SectionSeminarCategories = ({}: SectionSeminarCategoriesProps) => {
	const {
		seminars,
		setShowSeminars,
		seminarCategories,
		selectedCategory,
		setSelectedCategory
	} = useContext(contextStaticPropsSeminars)

	const categories = [
		{ id: 'all', categoryName: 'Все семинары', slug: 'all' },
		...seminarCategories
	]

	const handlerCategory = (selectedSeminarCategory: string) => {
		setSelectedCategory(selectedSeminarCategory)
	}

	return (
		<>
			<ul className={stls.categoryList}>
				{categories.map(category => (
					<li className={stls.categoryItem} key={category.id}>
						<button
							className={cn(stls.categoryBtn, {
								[stls.active]: category.slug === selectedCategory
							})}
							onClick={() => handlerCategory(category.slug)}
						>
							{category.categoryName.charAt(0).toUpperCase() +
								category.categoryName.slice(1).toLowerCase()}
						</button>
					</li>
				))}
			</ul>
		</>
	)
}

export default SectionSeminarCategories
