import stls from '@/styles/components/sections/ProgramDesc.module.sass'
import cn from 'classnames'
import { useAt } from '@/hooks/index'
import Image from 'next/image'
import { Wrapper } from '@/components/layout'

const ProgramDesc = () => {
  const at = useAt()
  return (
    <section className={stls.container}>
      <Wrapper classNames={[stls.wrapper]}>
        <div
          className={cn(stls.content, {
            [stls.smallPl]: at.profession || at.course || at.promo
          })}>
          {!at.profession && !at.course && !at.promo && (
            <div className={stls.title}>О&nbsp;программе</div>
          )}
          <h2>
            {at.mini && at.online && 'MBA Mini ONLINE'}
            {at.mba && at.online && 'MBA ONLINE'}
            {at.mini && at.blended && 'MBA Mini BLENDED'}
            {at.mba && at.blended && 'MBA BLENDED'}
            {!at.profession &&
              !at.course &&
              !at.promo &&
              !at.mbl &&
              ' — путь руководителя к росту'}
            {at.profession && 'Вы получите востребованные на рынке компетенции'}
            {at.course && 'Вы получите востребованные на рынке компетенции'}
            {at.promo && 'Вы получите востребованные на рынке компетенции'}
            {at.mbl && 'MBA ONLINE'}
          </h2>
          <div className={stls.desc}>
            {at.mini &&
              at.online &&
              'Программа Mini MBA Online является усеченной версией полуторогодового курса MBA. На курсе Mini MBA Вы сможете повысить свою квалификацию более интенсивно и освоите только ключевые модули длинной программы'}
            {at.mba &&
              at.online &&
              'MBA Online — престижная программа высокого уровня, на которой Вы углубленно изучите менеджмент, маркетинг, финансы, получите востребованные soft skills и расширите карьерные возможности'}
            {at.mini &&
              at.blended &&
              'Программа Mini MBA Blended является усеченной версией полуторогодового курса MBA. На курсе Mini MBA Вы сможете повысить свою квалификацию более интенсивно и освоите только ключевые модули длинной программы'}
            {at.mba &&
              at.blended &&
              'MBA Blended — престижная программа высокого уровня, на которой Вы углубленно изучите менеджмент, маркетинг, финансы, получите востребованные soft skills и расширите карьерные возможности'}
            {at.profession &&
              'Мы проводим более 100 исследований ежегодно и добавляем в программу то, что требуют топовые работодатели. После обучения вы будете на 100% готовы к новым профессиональным вызовам'}
            {at.course &&
              'Мы проводим более 100 исследований ежегодно и добавляем в программу то, что требуют топовые работодатели. После обучения вы будете на 100% готовы к новым профессиональным вызовам'}
            {at.promo &&
              'Мы проводим более 100 исследований ежегодно и постоянно добавляем в программу самые современные инструменты для построения высокодоходных бизнес-систем.  После обучения вы будете на 100% готовы к новым профессиональным вызовам.'}
            {at.mbl &&
              'Дистанционная программа MBA разработана для специалистов и руководителей, которые хотят систематизировать имеющиеся знания или познакомиться с ключевыми аспектами новой для себя сферы управленческой деятельности'}
          </div>
        </div>
        <div className={stls.imageContainer}>
          {!at.profession && !at.course && !at.promo && (
            <Image
              src='/assets/images/top_path_pic_1.jpg'
              alt='Слушатели на конференции'
              width={503}
              height={503}
            />
          )}
          {(at.profession || at.course || at.promo) && (
            <Image
              src='/assets/images/handsome-business-man.jpg'
              alt='Слушатели на конференции'
              width={503}
              height={503}
            />
          )}
        </div>
      </Wrapper>
    </section>
  )
}

export default ProgramDesc
