import stls from '@/styles/components/general/SearchField.module.sass'
import { useContext, useState, MouseEventHandler, useEffect } from 'react'
import Link from 'next/link'
import Popup from 'reactjs-popup'
import Highlighter from 'react-highlight-words'
import { colors } from '@/config/index'
import { ProgramsContext } from '@/context/index'
import { useAt } from '@/hooks/index'
import { LeadLoaderThankyou } from '@/components/general'
import { Wrapper } from '@/components/layout'
import { FormAlpha } from '@/components/forms'
import { IconSearch, IconClose } from '@/components/icons'

const SearchField = () => {
  const at = useAt()

  const [inputIsFocused, setInputIsFocused] = useState(false)

  const { programs } = useContext(ProgramsContext)

  const [searchTerm, setSearchTerm] = useState('')

  const [open, setOpen] = useState(false)
  const [openLoader, setOpenLoader] = useState(false)

  const programsNotBlended = programs.filter(
    program => program.studyFormat !== 'blended'
  )

  const filteredPrograms = programsNotBlended.filter(
    program => searchTerm && program?.title?.toLowerCase().includes(searchTerm)
  )

  useEffect(() => {
    inputIsFocused && document.getElementById('SearchField-input')?.focus()
  }, [inputIsFocused])

  return (
    <>
      <Popup
        trigger={() => (
          <button className={stls.btn}>
            <IconSearch classNames={[stls.iconSearchAtBtn]} /> Поиск
          </button>
        )}
        modal
        lockScroll
        nested
        closeOnDocumentClick
        closeOnEscape
        onOpen={() => setInputIsFocused(true)}
        onClose={() => setInputIsFocused(false)}
        position={'top center'}
        className='popup-SearchField'>
        {(close: MouseEventHandler) => (
          <div className={stls.popupContainer}>
            <a href='#!' onClick={close} className={stls.iconCloseBtn}>
              <IconClose
                classNames={[stls.iconClose]}
                stroke={colors.omicron}
              />
            </a>
            <Wrapper column classNames={[stls.wrapper, stls.wrapper2]}>
              <div className={stls.inputGroup}>
                <IconSearch
                  classNames={[stls.iconSearchAtInput]}
                  color={colors.omicron}
                />{' '}
                <input
                  id={'SearchField-input'}
                  type='text'
                  className={stls.input}
                  value={searchTerm}
                  placeholder={'Поиск'}
                  onChange={e => setSearchTerm(e.target.value.toLowerCase())}
                />
                {searchTerm && (
                  <a
                    href='#!'
                    onClick={() => setSearchTerm('')}
                    className={stls.iconClearBtn}>
                    <IconClose
                      classNames={[stls.iconClear]}
                      stroke={colors.alpha}
                    />
                  </a>
                )}
              </div>
              <ul className={stls.list}>
                {filteredPrograms.map((program, idx) => (
                  <li
                    key={program?.id || `SearchField__filteredPrograms-${idx}`}
                    className={stls.listItem}>
                    <Link
                      href={`/programs/${program?.category?.type}/${program?.studyFormat}/${program?.slug}`}>
                      <a className={stls.listItemLink}>
                        <p className={stls.p}>
                          <Highlighter
                            highlightClassName={stls.highlight}
                            searchWords={[searchTerm]}
                            autoEscape={true}
                            highlightTag={'span'}
                            textToHighlight={program?.title}
                          />
                        </p>
                        <span className={stls.label}>
                          {program?.category?.type === 'mini'
                            ? 'Mini MBA'
                            : program?.category?.type === 'profession'
                            ? 'Профессия'
                            : program?.category?.type === 'course'
                            ? 'Курс'
                            : program?.category?.type === 'executive'
                            ? 'Executive MBA'
                            : 'MBA'}
                        </span>
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
              {searchTerm && filteredPrograms.length === 0 && (
                <>
                  <div className={stls.formAlphaContainer}>
                    <p className={stls.formAlphaTitle}>
                      По Вашему запросу ничего не найдено
                    </p>
                    <p className={stls.formAlphaText}>
                      Попробуйте ввести запрос по-другому или свяжитесь со
                      специалистом. Вам помогут подобрать нужное направление и
                      ответят на вопросы
                    </p>
                    <FormAlpha
                      programTitle={null}
                      setOpenLoader={setOpenLoader}
                      setOpen={setOpen}
                      classNames={[stls.formAlpha]}
                      globalStyle={false}
                      formName={`Заявка с поисковой формы "По вашему запросу ничего не найдено, свяжитесь со специалистом"${
                        searchTerm
                          ? `, запрос пользователя: ${searchTerm?.toString()}`
                          : ''
                      }`}
                    />
                  </div>
                </>
              )}
            </Wrapper>
          </div>
        )}
      </Popup>
      <LeadLoaderThankyou
        open={open}
        setOpen={setOpen}
        openLoader={openLoader}
        setOpenLoader={setOpenLoader}
        programId={null}
        programTitle={null}
      />
    </>
  )
}

export default SearchField
