import stls from '@/styles/components/sections/SearchField.module.sass'
import programsContext from '@/context/programs/programsContext'
import { useContext, useState } from 'react'
import Popup from 'reactjs-popup'
import Link from 'next/link'
import IconSearch from '@/components/icons/IconSearch'
import IconClose from '../icons/IconClose'
import { spans } from 'next/dist/build/webpack/plugins/profiling-plugin'




const SearchField = () => {
  const [value, setValue] = useState('')
  const {filteredPrograms, setSearchProgram} = useContext(programsContext)
  console.log('value', filteredPrograms)
  const handleSearch = () => {
    setSearchProgram(value.toLowerCase())
  }




  return (
      <Popup
        modal
        className={stls.popup}
        onClose={() => close}
        trigger={() => <div>
          <div className={stls.trigger}>
            <div className={stls.icon}>
              <IconSearch color={'#000'}/>
            </div>
            <input
              className={stls.input}
              type='text' placeholder={'Поиск'}
              value={value}
            />
          </div>
        </div>}
        >
        {close => (
          <div className={stls.container}>
            <div>
              <div className={stls.search}>
                <div className={stls.icon}>
                  <IconSearch color={'#C4C4C4'}/>
                </div>
                <input
                  className={stls.input}
                  type='text'
                  value={value}
                  onChange={e => setValue(e.target.value)}
                  placeholder={'Поиск'}
                  onKeyUp={handleSearch}
                />
                <span className={stls.cross} onClick={() => close()}>
                  <IconClose/>
                </span>
              </div>

              <ul className={stls.list}>
                {
                  filteredPrograms.map(el => {
                    return (
                      <li key={el.id} className={stls.item}>
                        <Link href={`/programs/${el.category?.slug}/${el.studyFormat}/${el.slug}`}>
                          <a>
                            {
                                Array.from(el?.title).map((str: any) => {

                                  if (value.toLowerCase().indexOf(str.toLowerCase()) !== -1) {
                                    return (
                                      <span className={stls.strong}>{str}</span>
                                    )
                                  } else {
                                    return (
                                      <span>{str}</span>
                                    )
                                  }
                              })
                            }
                          </a>
                        </Link>
                      </li>
                    )
                  })
                }
              </ul>

            </div>
          </div>
        )}

      </Popup>
  )
}

export default SearchField