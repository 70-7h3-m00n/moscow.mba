import stls from '@/styles/components/sections/MemberOfRabe.module.sass'
import ImageContainer from '@/components/general/ImageContainer'
import rabeP1 from '@/public/legaldocuments/rabe-p1.jpg'

const rabeImage = {
  path: rabeP1,
  name: 'Свидетельство РАБО',
  fullWidth: 1326,
  fullHeight: 1875,
  smallWidth: 342,
  smallHeight: 508
}

const MemberOfRABE = () => {
  const rabeClassNames = [stls.legalSection, stls.memberOfRabe]

  return (
    <section className={rabeClassNames.join(' ')}>
      <div className={stls.descRabe}>
        <h2 className={stls.subHeading}>Членство в РАБО</h2>
        <p>
          Moscow Business Academy является членом Российской Ассоциации
          Бизнес-образования, что подтвеждает высокий уровень образовательных
          программ.
        </p>
        <p>
          В России членство РАБО имеют ограниченное количество организаций,
          которые соответствуют требованиям качества образовательных программ.
        </p>
        <p>
          В настоящий момент за РАБО закрепился статус признанного лидера,
          инициатора и координатора программ подготовки кадров для
          предпринимательства и бизнеса.
        </p>
      </div>
      <ImageContainer
        image={rabeImage}
        imageWidth={rabeImage.smallWidth}
        imageHeight={rabeImage.smallHeight}
      />
    </section>
  )
}

export default MemberOfRABE
