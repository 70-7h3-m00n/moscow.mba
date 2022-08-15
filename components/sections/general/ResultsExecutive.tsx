import stls from '@/styles/components/sections/ResultsExecutive.module.sass'
import { Wrapper } from '@/components/layout'

const ResultsExecutive = () => {
  const translations = {
    title: (
      <>
        Результаты участия в программе{' '}
        <span className={stls.highlight}>Executive MBA</span>{' '}
      </>
    ),
    subtitleDesktop: 'На практике Вы и ваша команда:',
    subtitleMobile: 'Результаты участия в программе',
    card: (
      <>
        Благодаря программе <span className={stls.bold}>Executive MBA</span>{' '}
        вы научитесь проектировать сложные бизнес-конструкции
      </>
    ),
    list: [
      'Построите авторскую модель глобальной ниши для вашего бизнеса',
      'Научитесь схватывать сущность проблем, создавать инструменты и решения под текущую управленческую ситуацию на международных рынках',
      'Сможете понять, как синхронизировать и трансформировать команду для новых рынков',
      'Разберетесь в особенностях коммерциализации разработок',
      'Продумаете как изменить ключевой процесс для достижения глобальных целей и кратного роста бизнеса',
      'Сможете эффективно управлять интеллектуальным капиталом и изменениями в компании'
    ]
  } as const

  return (
    <section className={stls.container}>
      <Wrapper>
        <div className={stls.content}>
          <div className={stls.left}>
            <h2 className={stls.title}>{translations.title}</h2>
            <div className={stls.card}>
              <p className={stls.card__p}>{translations.card}</p>
            </div>
          </div>
          <div className={stls.right}>
            <h3 className={stls.subtitle}>
              <span className={stls.laptopDesktopWidescreen}>
                {translations.subtitleDesktop}
              </span>
              <span className={stls.phoneTablet}>
                {translations.subtitleMobile}
              </span>
            </h3>
            <ul className={stls.ul}>
              {translations.list.map((item, idx) => (
                <li key={`${item}-${idx}`} className={stls.li}>
                  <p className={stls.li__p}>{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Wrapper>
    </section>
  )
}

export default ResultsExecutive
