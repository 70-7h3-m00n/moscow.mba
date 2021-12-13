import classNames from 'classnames'
import TrainingPeriod from '@/components/costs/TrainingPeriod'
import ProgramSubjects from '@/components/general/ProgramSubjects'
import { SetString } from '@/helpers/index'
import langMenu from '@/data/translation/menu'
import Discount from '@/components/costs/Discount'
import Until from '@/components/costs/Until'
import ProgramsQty from '@/components/general/ProgramsQty'
import Price from '@/components/costs/Price'
import { IconCheckCircle, IconScreen } from '@/components/icons'
import Link from 'next/link'


const ProgramsMini = ({ data, isMini, isMiniOnline, setIsMiniOnline }) => {


  return (
    <div
      className={classNames({
        'program-tabs-content': true,
        visible: isMini
      })}>
      <div className='top-info'>
        <div className='prog-time'>
          <i>
            <TrainingPeriod type='mini' />
          </i>
          <span>
                    <ProgramSubjects type='mini' sum={true} />{' '}
            {SetString(langMenu.qtSubjects)}{' '}
                  </span>
        </div>
        <div className='prog-status'>
          {SetString(langMenu.newestPrograms)} 2021{' '}
          {SetString(langMenu.newestProgramsYear)}
        </div>
      </div>
      <div className='desc'>{SetString(langMenu.categoryDiscMini)}</div>
      <ul className='program-options-block-tabs--sctn-programs'>
        <li>
          <a
            className={classNames({ active: isMiniOnline })}
            onClick={() => setIsMiniOnline(true)}>
            ONLINE
          </a>
        </li>
        <li>
          <a
            className={classNames({ active: !isMiniOnline })}
            onClick={() => setIsMiniOnline(false)}>
            BLENDED
          </a>
        </li>
      </ul>
      <div className='program-options-detail'>
        <div
          className={classNames({
            'program-options-block': true,
            show: isMiniOnline
          })}>
          <div className='name'>
            {SetString(langMenu.onlineTitle)}
            <div className='discount'>
              <div className='size'>
                <Discount />
              </div>
              <span>
                        <Until />
                      </span>
            </div>
          </div>
          <ProgramsQty
            programs={data}
            type={'mini'}
            format={'online'}
          />
          <div className='price'>
            {SetString(langMenu.price)}:{' '}
            <Price discount={true} type={'mini'} format={'online'} />{' '}
          </div>
          <div className='info-list'>
            <div className='info-flex'>
              <div className='pic'>
                <IconCheckCircle fill={'#C7C7C7'} />
              </div>
              <span>{SetString(langMenu.formatRemote)}</span>
            </div>
            <div className='info-flex'>
              <div className='pic'>
                <IconScreen fill={'#C7C7C7'} />
              </div>
              <span>
                        <ProgramSubjects type='mini' sum={true} />{' '}
                {SetString(langMenu.qtSubjects)}
                      </span>
            </div>
          </div>
          <ul className='program-options-block-list'>
            {data.map(item => {
              if (
                item.category?.type === 'mini' &&
                item.studyFormat === 'online'
              ) {
                return (
                  <li key={item.id || item._id}>
                    <Link
                      href={`/programs/${item.category.type}/${item.studyFormat}/${item.slug}`}
                      locale='ru'>
                      <a>{SetString(item, true)}</a>
                    </Link>
                  </li>
                )
              }
            })}
          </ul>
        </div>
        <div
          className={classNames({
            'program-options-block': true,
            show: !isMiniOnline
          })}>
          <div className='name'>{SetString(langMenu.blendedTitle)}</div>
          <ProgramsQty
            programs={data}
            type={'mini'}
            format={'blended'}
          />
          <div className='price'>
            {SetString(langMenu.price)}:{' '}
            <Price discount={false} type={'mini'} format={'blended'} />{' '}
          </div>
          <div className='info-list'>
            <div className='info-flex'>
              <div className='pic'>
                <IconCheckCircle fill={'#C7C7C7'} />
              </div>
              <span>{SetString(langMenu.formatBlended)}</span>
            </div>
            <div className='info-flex'>
              <div className='pic'>
                <IconScreen fill={'#C7C7C7'} />
              </div>
              <span>
                        <ProgramSubjects type='mini' sum={true} />{' '}
                {SetString(langMenu.qtSubjects)}
                      </span>
            </div>
          </div>
          <ul className='program-options-block-list'>
            {data.map(item => {
              if (
                item.category?.type === 'mini' &&
                item.studyFormat === 'blended'
              ) {
                return (
                  <li key={item.id || item._id}>
                    <Link
                      href={`/programs/${item.category.type}/${item.studyFormat}/${item.slug}`}
                      locale='ru'>
                      <a>{SetString(item, true)}</a>
                    </Link>
                  </li>
                )
              }
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}


export default ProgramsMini