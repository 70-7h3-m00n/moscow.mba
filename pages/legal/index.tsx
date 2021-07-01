import stls from '@/styles/pages/legal/Index.module.sass'
import { NextSeo } from 'next-seo'
import { backendUrl, apiProgramsReqUrl } from '@/config/index'
import Breadcrumbs from '@/components/general/Breadcrumbs'
import breadcrumbsStls from '@/styles/components/general/Breadcrumbs.module.sass'

const legal = ({ programs }) => {
  return (
    <>
      <NextSeo
        title={'Нормативные документы - Moscow Business Academy'}
        description={
          'Лицензия на осуществление образовательной деятельности, приложение к...'
        }
        canonical={'https://moscow.mba/legal'}
      />

      <section
        className={`jumbotron-section ${breadcrumbsStls.jumbotronGeneral}`}>
        <div className='container'>
          <Breadcrumbs />
        </div>
      </section>
      <div className='container'>
        <h1 className={stls.h1}>НОРМАТИВНЫЕ ДОКУМЕНТЫ</h1>
        <ul className={stls.list}>
          <li className={stls.listItem}>
            <a href='/legaldocuments/doc-1.pdf'>
              ЛИЦЕНЗИЯ НА ОСУЩЕСТВЛЕНИЕ ОБРАЗОВАТЕЛЬНОЙ ДЕЯТЕЛЬНОСТИ.pdf
            </a>
          </li>
          <li className={stls.listItem}>
            <a href='/legaldocuments/doc-2.pdf'>
              ПРИЛОЖЕНИЕ К ЛИЦЕНЗИИ НА ОСУЩЕСТВЛЕНИЕ ОБРАЗОВАТЕЛЬНОЙ
              ДЕЯТЕЛЬНОСТИ.pdf
            </a>
          </li>
          <li className={stls.listItem}>
            <a href='/legaldocuments/doc-3.pdf'>
              ПОЛОЖЕНИЕ О ПЕДАГОГИЧЕСКОМ СОВЕТЕ.pdf
            </a>
          </li>
          <li className={stls.listItem}>
            <a href='/legaldocuments/doc-4.pdf'>
              ПОЛОЖЕНИЕ О ПОРЯДКЕ ЗАПОЛНЕНИЯ И ВЫДАЧИ СПРАВОК ОБ ОБУЧЕНИИ ИЛИ О
              ПЕРИОДЕ ОБУЧЕНИЯ УСТАНОВЛЕННОГО ОБРАЗЦА.pdf
            </a>
          </li>
          <li className={stls.listItem}>
            <a href='/legaldocuments/doc-5.pdf'>
              ПОЛОЖЕНИЕ О ПОРЯДКЕ ОКАЗАНИЯ ПЛАТНЫХ ОБРАЗОВАТЕЛЬНЫХ УСЛУГ В
              АВТОНОМНОЙ НЕКОММЕРЧЕСКОЙ ОРГАНИЗАЦИИ ДОПОЛНИТЕЛЬНОГО
              ПРОФЕССИОНАЛЬНОГО ОБРАЗОВАНИЯ.pdf
            </a>
          </li>
          <li className={stls.listItem}>
            <a href='/legaldocuments/doc-6.pdf'>
              ПОЛОЖЕНИЕ О ПОРЯДКЕ ОТЧИСЛЕНИЯ, ВОССТАНОВЛЕНИЯ И ПЕРЕВОДА
              СЛУШАТЕЛЕЙ.pdf
            </a>
          </li>
          <li className={stls.listItem}>
            <a href='/legaldocuments/doc-7.pdf'>
              ПОЛОЖЕНИЕ О ПОРЯДКЕ ФОРМИРОВАНИЯ И ХРАНЕНИЯ ЛИЧНЫХ ДЕЛ СЛУШАТЕЛЕЙ
              ДОПОЛНИТЕЛЬНЫХ ПРОФЕССИОНАЛЬНЫХ ПРОГРАММ ПРОФЕССИОНАЛЬНОЙ
              ПЕРЕПОДГОТОВКИ.pdf
            </a>
          </li>
          <li className={stls.listItem}>
            <a href='/legaldocuments/doc-8.pdf'>
              ПОЛОЖЕНИЕ О ПРЕДОСТАВЛЕНИИ ПЕРЕРЫВА В ОБУЧЕНИИ СЛУШАТЕЛЯМ
              АВТОНОМНОЙ НЕКОММЕРЧЕСКОЙ ОРГАНИЗАЦИИ ДОПОЛНИТЕЛЬНОГО
              ПРОФЕССИОНАЛЬНОГО ОБРАЗОВАНИЯ «МОСКОВСКАЯ БИЗНЕС АКАДЕМИЯ».pdf
            </a>
          </li>
          <li className={stls.listItem}>
            <a href='/legaldocuments/doc-9.pdf'>
              ПОЛОЖЕНИЕ О ПРИМЕНЕНИИ ДОТ В АНО ДПО МБА.pdf
            </a>
          </li>
          <li className={stls.listItem}>
            <a href='/legaldocuments/doc-10.pdf'>ПОЛОЖЕНИЕ О СКИДКЕ МБА.pdf</a>
          </li>
          <li className={stls.listItem}>
            <a href='/legaldocuments/doc-11.pdf'>
              ПОЛОЖЕНИЕ ОБ ИТОГОВОЙ АТТЕСТАЦИИ СЛУШАТЕЛЕЙ ДОПОЛНИТЕЛЬНЫХ
              ПРОФЕССИОНАЛЬНЫХ ПРОГРАММ.pdf
            </a>
          </li>
          <li className={stls.listItem}>
            <a href='/legaldocuments/doc-12.pdf'>
              ПОЛОЖЕНИЕ ОБ ОРГАНИЗАЦИИ И ОСУЩЕСТВЛЕНИИ ОБРАЗОВАТЕЛЬНОЙ
              ДЕЯТЕЛЬНОСТИ.pdf
            </a>
          </li>{' '}
          <li className={stls.listItem}>
            <a href='/legaldocuments/doc-13.pdf'>
              ПРАВИЛА ВНУТРЕННЕГО РАСПОРЯДКА ДЛЯ СЛУШАТЕЛЕЙ В АВТОНОМНОЙ
              НЕКОММЕРЧЕСКОЙ ОРГАНИЗАЦИИ ДОПОЛНИТЕЛЬНОГО ПРОФЕССИОНАЛЬНОГО
              ОБРАЗОВАНИЯ «МОСКОВСКАЯ БИЗНЕС АКАДЕМИЯ».pdf
            </a>
          </li>
          <li className={stls.listItem}>
            <a href='/legaldocuments/doc-14.pdf'>
              ПРАВИЛА ВНУТРЕННЕГО ТРУДОВОГО РАСПОРЯДКА АВТОНОМНОЙ НЕКОММЕРЧЕСКОЙ
              ОРГАНИЗАЦИИ ДОПОЛНИТЕЛЬНОГО ПРОФЕССИОНАЛЬНОГО ОБРАЗОВАНИЯ
              «МОСКОВСКАЯ БИЗНЕС АКАДЕМИЯ».pdf
            </a>
          </li>
          <li className={stls.listItem}>
            <a href='/legaldocuments/doc-15.pdf'>
              ПРАВИЛА ПРИЕМА НА ОБУЧЕНИЕ в АНО ДПО МБА.pdf
            </a>
          </li>
          <li className={stls.listItem}>
            <a href='/legaldocuments/doc-16.pdf'>
              Федеральный закон об образовании в Российской Федерации от
              29.12.2012 № 273-ФЗ.pdf
            </a>
          </li>
          <li className={stls.listItem}>
            <a href='/legaldocuments/doc-17.pdf'>
              Разъяснения о законодательном и нормативном правовом обеспечении
              дополнительного профессионального образования (Департамент
              государственной политик.pdf
            </a>
          </li>
          <li className={stls.listItem}>
            <a href='/legaldocuments/doc-18.pdf'>
              Приказ от г. № 1244 «О внесении изменений в порядок организации и
              осуществления образовательной деятельности по дополнительным
              профессиональным про.pdf
            </a>
          </li>
          <li className={stls.listItem}>
            <a href='/legaldocuments/doc-19.pdf'>
              Приказ Минобрнауки РФ от 23.08.2017 N 816 ОБ УТВЕРЖДЕНИИ ПОРЯДКА
              ПРИМЕНЕНИЯ ОРГАНИЗАЦИЯМИ, ОСУЩЕСТВЛЯЮЩИМИ ОБРАЗОВАТЕЛЬНУЮ
              ДЕЯТЕЛЬНОСТЬ, ЭЛЕКТРОННОГО.pdf
            </a>
          </li>
          <li className={stls.listItem}>
            <a href='/legaldocuments/doc-20.pdf'>
              Приказ № 9 от 14.01.2013 г. «О комиссии Министерства образования и
              науки РФ по развитию дополнительного профессионального
              образования».pdf
            </a>
          </li>
          <li className={stls.listItem}>
            <a href='/legaldocuments/doc-21.pdf'>
              Постановление Правительства РФ от 08.08.2013 № 678 Об утверждении
              номенклатуры должностей педагогических работников организаций,
              осуществляющих обр.pdf
            </a>
          </li>
          <li className={stls.listItem}>
            <a href='/legaldocuments/doc-22.pdf'>
              Постановление Правительства РФ №582 от 10.07.2013 г. Об
              утверждении Правил размещения на официальном сайте образовательной
              организации в информацио.pdf
            </a>
          </li>
          <li className={stls.listItem}>
            <a href='/legaldocuments/doc-23.pdf'>
              Постановление Правительства Российской Федерации от 15 августа
              2013 г. № 706 «Правила оказания платных образовательных услуг».pdf
            </a>
          </li>
          <li className={stls.listItem}>
            <a href='/legaldocuments/doc-24.pdf'>
              Письмо Минобрнауки России от 7 мая 2014 г. № ак-126106 «Об
              особенностях законодательного и нормативного правового обеспечения
              в сфере ДПО».pdf
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}

export async function getStaticProps() {
  const res = await fetch(`${backendUrl}${apiProgramsReqUrl}`)
  const { data } = await res.json()

  return {
    props: {
      programs: data
    }
  }
}

export default legal
