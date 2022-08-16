import stls from '@/styles/components/sections/Qna.module.sass'
import { useRouter } from 'next/router'
import Popup from 'reactjs-popup'
import { routesFront } from '@/config/index'
import { useAt } from '@/hooks/index'
import PopupForm from '@/components/popups/PopupForm'
import { AccordionsContainer } from '@/components/general'
import { Wrapper } from '@/components/layout'
import { clickedAskQuestion } from '@/helpers/index'

const Qna = ({ programId, programTitle }) => {
  const at = useAt()
  const router = useRouter()
  const qna = at.profession
    ? [
        {
          title: 'Какой график обучения? Получится ли совмещать его с работой?',
          content:
            'Вы можете изучать материалы курса в удобном Вам режиме, совмещать обучение с работой и личной жизнью. Более того, все уроки будут доступны и по окончании курса, так что Вы сможете освежить свои знания в любой момент.',
          isList: false
        },
        {
          title: 'Я смогу общаться с преподавателями?',
          content:
            'Да, Вы сможете задавать вопросы преподавателям через нашу образовательную платформу. Преподаватели прокомментирует домашние задания и дадут полезные советы. Так Вы сможете перенять опыт, профессиональные знания и компетенции от ведущих специалистов.',
          isList: false
        },
        {
          title: 'Какие выпускные документы я получу?',
          content:
            'Диплом академии установленного образца Министерством Образования науки Российской Федерации, удостоверяющий право на ведение профессиональной деятельности.',
          isList: false
        },
        {
          title: 'Что будет, если я не уложусь в сроки обучения?',
          content:
            'Мы стараемся подбирать сроки обучения таким образом, чтобы Вам было удобно совмещать обучение с работой. В случае, если Вы не смогли закончить обучение в установленный срок, Вы всегда сможете продлить доступ к программе, обратившись к куратору.',
          isList: false
        },
        {
          title: 'Можно ли закончить обучение экстерном?',
          content:
            'Мы считаем, что каждый должен учиться в своем привычном темпе, и поэтому даем возможность окончить программу досрочно. Вы можете сократить обучение на программе в два раза от полного срока обучения.',
          isList: false
        }
      ]
    : at.course
    ? [
        {
          title: 'Какой график обучения? Получится ли совмещать его с работой?',
          content:
            'Вы можете изучать материалы курса в удобном Вам режиме, совмещать обучение с работой и личной жизнью. Более того, все уроки будут доступны и по окончании курса, так что Вы сможете освежить свои знания в любой момент.',
          isList: false
        },
        {
          title: 'Я смогу общаться с преподавателями?',
          content:
            'Да, Вы сможете задавать вопросы преподавателям через нашу образовательную платформу. Преподаватели прокомментирует домашние задания и дадут полезные советы. Так Вы сможете перенять опыт, профессиональные знания и компетенции от ведущих специалистов.',
          isList: false
        },
        {
          title: 'Что будет, если я не уложусь в сроки обучения?',
          content:
            'Мы стараемся подбирать сроки обучения таким образом, чтобы Вам было удобно совмещать обучение с работой. В случае, если Вы не смогли закончить обучение в установленный срок, Вы всегда сможете продлить доступ к программе, обратившись к куратору.',
          isList: false
        },
        {
          title: 'Можно ли закончить обучение экстерном?',
          content:
            'Мы считаем, что каждый должен учиться в своем привычном темпе, и поэтому даем возможность окончить программу досрочно. Вы можете сократить обучение на программе в два раза от полного срока обучения.',
          isList: false
        }
      ]
    : [
        {
          title: 'Можно ли закончить обучение экстерном?',
          content:
            'Мы считаем, что каждый должен учиться в своем привычном темпе, и поэтому даем возможность окончить программу досрочно. Вы можете сократить обучение на программе в два раза от полного срока обучения',
          isList: false
        },
        {
          title: 'Что будет, если я не уложусь в сроки обучения?',
          content: [
            'Мы стараемся подбирать сроки обучения таким образом, чтобы Вам было удобно совмещать обучение с работой',
            'В случае, если Вы не смогли закончить обучение в установленный срок, Вы всегда сможете продлить доступ к программе, обратившись к куратору'
          ],
          isList: false
        },
        {
          title: 'Есть ли у Вас аккредитация?',
          content: [
            'В России Moscow Business Academy имеет все лицензии и аккредитации, позволяющие готовить специалистов международного уровня по направлению MBA',
            'В частности аккредитацию НАСДОБР — самая престижная национальная аккредитация, учрежденная РАБО, Ассоциацией менеджеров, Деловой Россией при поддержке Государственной Думы РФ. Аккредитацию НАСДОБР имеют не более 10 организаций в России',
            'Также Moscow Business Academy является членом Российской Ассоциации Бизнес Образования и имеет государственной лицензию, что подтверждает полное соответствие всех предоставляемых нами программ с образовательным стандартом РФ'
          ],
          isList: false
        },
        {
          title: 'Какие выпускные документы я получу?',
          content: [
            'Диплом академии установленного образца Министерством Образования науки Российской Федерации, удостоверяющий право на ведение профессиональной деятельности в сфере менеджмента с присвоением степени Мастера Бизнес Администрирования',
            'Международное приложение к диплому Supplement, форма которого была разработана Европейской комиссией, Советом Европы и ЮНЕСКО с целью взаимного признания странами национальных документов о высшем образовании в соответствии с принципами Болонской декларации «Европейская зона высшего образования»'
          ],
          isList: true
        },
        {
          title: 'Кто разрабатывает учебные программы?',
          content:
            'Программы разрабатывают российские и зарубежные эксперты, которые реализовывали крупные проекты на рынках России, Европы и США, а также прошли многоэтапную проверку Moscow Business Academy и получили аккредитацию на преподавание',
          isList: false
        }
      ]

  return (
    <section className={stls.container}>
      <Wrapper classNames={[stls.wrapper]}>
        <p className={stls.title}>Узнай все</p>
        <div className={stls.flexContent}>
          <div className={stls.descContainer}>
            <h2 className={stls.descTitle}>
              Вопросы <br />и ответы
            </h2>
            <p className={stls.desc}>
              Задавайте вопросы на интересующую тему и наши менеджеры ответят
              Вам в ближайшее время
            </p>
            <Popup
              trigger={<a className={stls.button}>Задать вопрос</a>}
              modal
              lockScroll
              nested
              closeOnDocumentClick
              onOpen={() => {
                clickedAskQuestion({
                  url: `${routesFront.root}${router.asPath}`
                })
              }}>
              {/* @ts-expect-error  */}
              {close => (
                <PopupForm
                  programId={programId}
                  programTitle={programTitle}
                  title={'Получите консультацию'}
                  closePopUpForm={close}
                  formName='Заявка с модальной формы "Задать вопрос"'
                />
              )}
            </Popup>
          </div>
          <div className={stls.content}>
            <AccordionsContainer
              accordionsItems={qna}
              firstAccordionActive={false}
              closeAll={false}
              setCloseAll={() => {}}
            />
          </div>
        </div>
      </Wrapper>
    </section>
  )
}

export default Qna
