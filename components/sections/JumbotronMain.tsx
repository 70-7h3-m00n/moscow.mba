import stls from '@/styles/components/sections/JumbotronMain.module.sass'
import Link from 'next/link'
import Image from 'next/image'
import SetString from '@/components/hooks/SetString'
import lang from '@/data/translation/index'
import Breadcrumbs from '@/components/general/Breadcrumbs'
import { base64pixel } from '@/config/index'

const JumbotronMain = () => {
  return (
    <section className='jumbotron-section main-jumbotron'>
      <div className='image'>
        {/* should replace following alt with english supported version */}
        <Image
          src='/assets/images/jumbotron_1.jpg'
          layout='fill'
          alt={'Студенты обучаются'}
        />
      </div>
      <div className='container'>
        <div className='jumbotron-content'>
          <Breadcrumbs />
          <div className='jumbotron-flex'>
            <div className='jumbotron-text'>
              <div className='image-text'>
                <Image
                  src='/assets/images/mba_text.png'
                  alt='Moscow Business Academy'
                  width={482}
                  height={146}
                  placeholder='blur'
                  blurDataURL={base64pixel}
                />
              </div>
              <h1>Moscow Business Academy</h1>
              <div className='desc main-desc'>
                {SetString(lang.headerSubtitle)}
              </div>
            </div>
          </div>
          <Link href='/programs/mini/online' locale='ru'>
            <a className='jumbotron-squad'>
              <p>{SetString(lang.redCubeLink)}</p>
              <div className='arrow'>
                <img src='/assets/images/arrow_diagonal.svg' />
              </div>
            </a>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default JumbotronMain
