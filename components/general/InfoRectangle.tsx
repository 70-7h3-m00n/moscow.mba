import stls from '@/styles/components/general/InfoRectangle.module.sass'
import cn from 'classnames'
import { useAt } from '@/hooks/index'
// import { Wrapper } from '@/components/layout'
import { PopupInfo } from '@/components/popups'
import { Until, TrainingPeriod } from '@/components/costs'

// TODO:: improve styles for rectangle. It's content is not vertically centered on tablet & laptop, it goes full width on smaller screen but should have padding left & right
const InfoRectangle = ({
  programPage = false,
  type = null,
  format = null,
  studyDurationMonths = null
}) => {
  const at = useAt()
  const isDiscounted =
    (at.mini && at.online) ||
    (at.mba && at.online) ||
    (at.profession && at.online) ||
    (at.course && at.online) ||
    at.mbl

  const infoRectangleContent = {
    programInfo: [
      {
        itemTitle: 'Срок обучения:',
        itemDetail: <TrainingPeriod period={studyDurationMonths} type={type} />
      },
      {
        itemTitle: 'Форма обучения:',
        itemDetail: at.online
          ? at.en
            ? 'Remotely'
            : 'Дистанционно'
          : at.blended
          ? at.en
            ? 'Half in-person'
            : 'С очными модулями'
          : at.executive
          ? at.en
            ? 'In person'
            : 'Очно'
          : at.mbl
          ? at.en
            ? 'Remotely'
            : 'Дистанционно'
          : ''
      },
      {
        itemTitle: 'Ближайшее зачисление:',
        itemDetail: (
          <Until preposition={false} executive={at.executive && false} />
        )
      },
      {
        // itemTitle: 'Стоимость:',
        itemTitle: 'Диплом:',
        itemDetail: (
          // <Price
          //   discount={isDiscounted}
          //   type={type}
          //   format={format}
          //   renderedByComponent='InfoRectangle'
          // />

          // 'Заносится в ФРДО'
          <PopupInfo
            title={'Заносится в ФРДО'}
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
          />
        )
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
          {item.itemTitle && <p className={stls.itemTitle}>{item.itemTitle}</p>}
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
