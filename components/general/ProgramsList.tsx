import stls from '@/styles/components/general/ProgramsList.module.sass'
import { Fragment, useContext } from 'react'
import Link from 'next/link'
import cn from 'classnames'
import { useAt } from '@/hooks/index'
import {
  ContextStaticProps,
  MenuContext,
  OverlayContext
} from '@/context/index'
import { Until, Discount, TrainingPeriod } from '@/components/costs'
import { ProgramSubjects } from '@/components/general'
import { IconArrowLeft, IconClock, IconPaperCorner } from '@/components/icons'

const ProgramsList = ({ data, id, type }) => {
  const at = useAt()
  const { closeMenu } = useContext(MenuContext)
  const { hideOverlay } = useContext(OverlayContext)
  const { studyFieldsWithSlugs } = useContext(ContextStaticProps)

  const handleLinkClick = () => {
    closeMenu()
    hideOverlay()
  }

  // TODO: figure out a better way to do this
  const programs = []
  studyFieldsWithSlugs?.map(studyField => {
    let filter = {
      title: '',
      fields: []
    }
    let fields = []
    data.map(item => {
      if (
        item.category?.type === type &&
        item.studyFormat === 'online' &&
        studyField.slug === item?.study_field?.slug
      ) {
        fields.push(item)
        filter.title = studyField.label
        filter.fields = fields
      }
    })
    programs.push(filter)
  })

  const columnPrograms = array => {
    return array.map((key, i) => {
      const getEncodeStudyFieldsTitle = () =>
        encodeURIComponent(
          studyFieldsWithSlugs
            .filter(item => item.label === key.title)
            .map(item => item.label)
            .join()
        )

      const encodedStudyFieldTitle = getEncodeStudyFieldsTitle()

      const studyFieldLink = `/programs/${type}/online`

      return (
        <Fragment key={`columnPrograms-${i}`}>
          <Link
            href={{
              pathname: studyFieldLink,
              query: { curStudyField: encodedStudyFieldTitle }
            }}
            {...(at.en ? { locale: 'ru' } : undefined)}>
            <a className={stls.listTitle} onClick={handleLinkClick}>
              {key.title}
            </a>
          </Link>
          {key.fields.map((item, idx) => {
            if (idx < 5) {
              return (
                <div key={item.id} className={stls.listItem}>
                  <Link
                    href={`/programs/${item.category.type}/${item.studyFormat}/${item.slug}`}
                    {...(at.en ? { locale: 'ru' } : undefined)}>
                    <a onClick={handleLinkClick}>
                      {at.en
                        ? item?.slug?.split('-').join(' ') || item?.title
                        : item?.title}
                    </a>
                  </Link>
                </div>
              )
            } else if (idx === 5) {
              return (
                <div key={item.id} className={stls.listItem}>
                  <Link
                    href={{
                      pathname: studyFieldLink,
                      query: { curStudyField: encodedStudyFieldTitle }
                    }}
                    {...(at.en ? { locale: 'ru' } : undefined)}>
                    <a className={stls.link} onClick={handleLinkClick}>
                      {at.en ? 'View all' : 'Посмотреть все'}
                      <IconArrowLeft classNames={[stls.IconArrowLeft]} />
                    </a>
                  </Link>
                </div>
              )
            }
          })}
        </Fragment>
      )
    })
  }
  return (
    <div id={id} className={cn(stls.container)}>
      <div className={stls.programInfo}>
        <div className={stls.programTitle}>
          {type === 'profession'
            ? at.en
              ? 'Professions'
              : 'Профессии'
            : type === 'course'
            ? at.en
              ? 'Courses'
              : 'Курсы'
            : null}
          <div className={stls.itemDiscount}>
            <div className={stls.itemDiscountAmount}>
              <Discount />
            </div>
            <span>
              <Until />
            </span>
          </div>
        </div>
        <p className={stls.programDesc}>
          {type === 'profession'
            ? at.en
              ? ''
              : 'Длинные программы для полного погружения в направление. В ней несколько курсов. Она поможет Вам полностью освоить новую профессию с нуля или получить самые актуальные знания и навыки в Вашей сфере деятельности'
            : type === 'course'
            ? at.en
              ? ''
              : 'Короткие программы, чтобы изучить один конкретный навык или инструмент. Состоит из нескольких модулей с видеоматериалами и практикой'
            : null}
        </p>
      </div>
      <div className={stls.bottomInfo}>
        {/* <div className={stls.bottomTitle}>
          {type === 'profession'
            ? at.en
              ? 'Professions'
              : 'Профессии'
            : type === 'course'
            ? at.en
              ? 'Courses'
              : 'Курсы'
            : null}
        </div> */}
        {(!at.profession || !at.course) && (
          <div className={stls.itemBottom}>
            <IconClock classNames={[stls.iconBottom]} />
            <TrainingPeriod type={type} />
          </div>
        )}

        <p className={stls.textBottom}>
          {type === 'profession'
            ? at.en
              ? ''
              : 'Программа профессиональной переподготовки разработана для специалистов и руководителей, которые хотят систематизировать имеющиеся знания или познакомиться с ключевыми аспектами новой для себя сферы управленческой деятельности'
            : type === 'course'
            ? at.en
              ? ''
              : 'Дистанционная программа MBA разработана для специалистов и руководителей, которые хотят систематизировать имеющиеся знания или познакомиться с ключевыми аспектами новой для себя сферы управленческой деятельности'
            : null}
        </p>
        <div className={stls.itemBottom}>
          <IconPaperCorner classNames={[stls.iconBottom]} />
          <span>
            <ProgramSubjects type={type} subjects='base' />{' '}
            {at.en ? 'management subjects' : 'дисциплин об управлении'}
          </span>
        </div>
      </div>
      <div className={stls.itemDetails}>
        <ul className={stls.list}>
          {programs?.length > 3 ? (
            <>
              <li className={stls.column}>
                {columnPrograms(
                  programs.slice(0, Math.ceil(programs.length / 2))
                )}
              </li>
              <li className={stls.column}>
                {columnPrograms(
                  programs.slice(
                    Math.ceil(programs.length / 2),
                    programs.length
                  )
                )}
              </li>
            </>
          ) : (
            <li className={stls.column}>{columnPrograms(programs)}</li>
          )}
        </ul>
      </div>
    </div>
  )
}

export default ProgramsList
