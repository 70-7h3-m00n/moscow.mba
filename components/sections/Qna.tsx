import stls from '@/styles/components/sections/Qna.module.sass'
import classNames from 'classnames'
import Popup from 'reactjs-popup'
import PopupForm from '@/components/popups/PopupForm'
import Accordion from '@/components/general/Accordion'

import Script from 'next/script'

const faq = [
  {
    question: 'Можно ли закончить обучение экстерном?',
    answer:
      'Мы считаем, что каждый должен учиться в своем привычном темпе, и поэтому даем возможность окончить программу досрочно. Вы можете сократить обучение на программе в два раза от полного срока обучения',
    isList: false
  },
  {
    question: 'Что будет, если я не уложусь в сроки обучения?',
    answer: [
      'Мы стараемся подбирать сроки обучения таким образом, чтобы Вам было удобно совмещать обучение с работой',
      'В случае, если Вы не смогли закончить обучение в установленный срок, Вы всегда сможете продлить доступ к программе, обратившись к куратору'
    ],
    isList: false
  },
  {
    question: 'Есть ли у Вас аккредитация?',
    answer: [
      'В России Moscow Business Academy имеет все лицензии и аккредитации, позволяющие готовить специалистов международного уровня по направлению MBA',
      'В частности аккредитацию НАСДОБР — самая престижная национальная аккредитация, учрежденная РАБО, Ассоциацией менеджеров, Деловой Россией при поддержке Государственной Думы РФ. Аккредитацию НАСДОБР имеют не более 10 организаций в России',
      'Также Moscow Business Academy является членом Российской Ассоциации Бизнес Образования и имеет государственной лицензию, что подтверждает полное соответствие всех предоставляемых нами программ с образовательным стандартом РФ'
    ],
    isList: false
  },
  {
    question: 'Какие выпускные документы я получу?',
    answer: [
      'Диплом академии установленного образца Министерством Образования науки Российской Федерации, удостоверяющий право на ведение профессиональной деятельности в сфере менеджмента с присвоением степени Мастера Бизнес Администрирования',
      'Международное приложение к диплому Supplement, форма которого была разработана Европейской комиссией, Советом Европы и ЮНЕСКО с целью взаимного признания странами национальных документов о высшем образовании в соответствии с принципами Болонской декларации «Европейская зона высшего образования»'
    ],
    isList: true
  },
  {
    question: 'Кто разрабатывает учебные программы?',
    answer:
      'Программы разрабатывают российские и зарубежные эксперты, которые реализовывали крупные проекты на рынках России, Европы и США, а также прошли многоэтапную проверку Moscow Business Academy и получили аккредитацию на преподавание',
    isList: false
  }
]

const Qna = ({ programId, programTitle }) => {
  return (
    <>
      <section className='faq-section section-pl'>
        <div className='title-pl red'>Узнай все</div>
        <div className='faq-flex'>
          <div className='faq-description'>
            <h2>
              Вопросы <br />и ответы
            </h2>
            <div className='desc'>
              Задавайте вопросы на интересующую тему и наши менеджеры ответят
              Вам в ближайшее время
            </div>
            <Popup
              trigger={
                <a className={classNames('button', stls.emptyBtn)}>
                  Задать вопрос
                </a>
              }
              modal
              nested>
              {close => (
                <PopupForm
                  programId={programId}
                  programTitle={programTitle}
                  title={'Получите консультацию'}
                  closePopUpForm={close}
                />
              )}
            </Popup>
          </div>
          <div className='faq-content'>
            {faq.map((item, idx) => (
              <Accordion
                key={idx}
                title={item.question}
                accordionContent={item.answer}
                isList={item.isList}
              />
            ))}
          </div>
        </div>
      </section>
      <Script src='/assets/js/accordion.js' strategy='lazyOnload' />
    </>
  )
}

export default Qna
