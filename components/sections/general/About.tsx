import stls from '@/styles/components/sections/About.module.sass'
import { useAt } from '@/hooks/index'
import { Wrapper } from '@/components/layout'

const About = () => {
  const at = useAt()
  return (
    <section className={stls.container}>
      <Wrapper classNames={[stls.wrapper]}>
        <div className={stls.title}>{at.en ? 'About' : 'Об академии'}</div>
        <div className={stls.flexContainer}>
          <div className={stls.titleDesc}>
            <p className={stls.desc}>
              {at.en
                ? 'Moscow Business Academy is one of the leading business schools in CIS countries. It is also among the few of them who export our domestic MBA to the West and work in the global market'
                : 'Moscow Business Academy является одной из ведущих бизнес-школ на территории СНГ и одной из немногих бизнес-школ, которая экспортирует отечественные MBA на Запад и работает на глобальном рынке'}
            </p>
            <p className={stls.desc}>
              {at.en
                ? 'Each year hundreds of top managers and company owners get a world-class education and make new acquaintances'
                : 'Ежегодно сотни топ-менеджеров и владельцев компаний получают здесь образование международного уровня и завязывают новые знакомства'}
            </p>
          </div>
          <ul className={stls.list}>
            <li className={stls.listItem}>
              <div className={stls.number}>{at.en ? '11 yrs' : '11 лет'}</div>
              <p>{at.en ? 'on the market' : 'на рынке образования'}</p>
            </li>
            <li className={stls.listItem}>
              <div className={stls.number}>9000+</div>
              <p>
                {at.en
                  ? 'graduates all across the world'
                  : 'выпускников по всему миру'}
              </p>
            </li>
            <li className={stls.listItem}>
              <div className={stls.number}>25%</div>
              <p>
                {at.en
                  ? 'international students'
                  : 'студентов – это иностранцы из стран дальнего зарубежья'}
              </p>
            </li>
            <li className={stls.listItem}>
              <div className={stls.number}>150+</div>
              <p>
                {at.en
                  ? 'international-level professors providing the programs'
                  : 'профессоров международного уровня готовят программы'}
              </p>
            </li>
          </ul>
        </div>
      </Wrapper>
    </section>
  )
}

export default About
