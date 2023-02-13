import stls from './InfoRectangle.module.sass'
import cn from 'classnames'
import { useAt } from '@/hooks/index'
import { PopupInfo } from '@/components/popups'
import { Until } from '@/components/costs'
import { useConfigProgramsContext } from 'modules/programs-page/fractals'
import { FilterTypeProgramEnum } from 'modules/programs-page/fractals/enums'

// TODO:: improve styles for rectangle. It's content is not vertically centered on tablet & laptop, it goes full width on smaller screen but should have padding left & right
const InfoRectangle = ({ programPage = false }) => {
	const at = useAt()
	const date = new Date()
	const month = date.toLocaleString('default', { month: 'long' })
	const monthUpperCase = month[0].toUpperCase() + month.slice(1)
	const year = date.getFullYear()
	const { configPrograms } = useConfigProgramsContext()

	const infoRectangleContent = {
		programInfo: [
			{
				itemTitle: 'Курс обновлен',
				itemDetail: `${monthUpperCase} ${year} года`
			},
			{
				itemTitle: 'Рассрочка',
				itemDetail: 'Рассрочка 0%'
			},
			{
				itemTitle: 'Старт',
				itemDetail: (
					<Until preposition={false} executive={at.executive && false} />
				)
			},
			{
				itemTitle: (
					<PopupInfo
						title={'Диплом'}
						content={{
							title: 'ФРДО — ',
							subtitle: 'Федеральный реестр сведений документов об образовании',
							description: 'Цели Федерального реестра:',
							items: [
								'Ликвидация оборота поддельных документов государственного образца об образовании',
								'Обеспечение ведомств и работодателей достоверной информацией о квалификации претендентов на\n' +
									'трудоустройство',
								'Сокращение числа нарушений и коррупции в образовательных учреждениях',
								'Повышение качества образования за счет обеспечения общественности достоверной информацией о выпускниках'
							]
						}}
						classNames={stls.popupInfo}
					/>
				),
				itemDetail: 'Заносится в ФРДО'
			}
		],
		academyInfo: [
			{
				itemDetail: at.en ? 'International diplomas' : 'Международные дипломы'
			},
			{
				itemDetail: at.en
					? 'Online and offline formats'
					: 'ONLINE и очные форматы обучения'
			},
			{
				itemDetail: at.en
					? 'Practical examples'
					: 'Разборы практических бизнес-кейсов'
			}
		]
	}

	const typeOfContent = at.index || at.promo ? 'academyInfo' : 'programInfo'

	if (
		!(
			configPrograms.filterTypeProgram === FilterTypeProgramEnum.mini ||
			configPrograms.filterTypeProgram === FilterTypeProgramEnum.mba
		)
	) {
		return null
	}

	return (
		<ul
			className={cn(stls.container, {
				[stls.programsPageContainer]: programPage,
				[stls.academyInfoContainer]: at.index || at.promo
			})}>
			{infoRectangleContent[typeOfContent].map((item, idx) => (
				<li
					key={idx + item.itemDetail}
					className={cn(stls.item, {
						[stls.academyInfoItem]: at.index || at.promo
					})}>
					{item.itemTitle && (
						<div className={stls.itemTitle}>{item.itemTitle}</div>
					)}
					<div
						className={cn(stls.itemDetail, {
							[stls.academyInfoItemDetail]: at.index || at.promo
						})}>
						{item.itemDetail}
					</div>
				</li>
			))}
		</ul>
	)
}

export default InfoRectangle
