import stls from '@/styles/components/sections/CheckLicenses.module.sass'
import IconRosObrInsignia from '@/components/icons/IconRosObrInsignia'

const CheckLicenses = () => {
  const containerClasses = [stls.container, stls.darkBgColor, stls.noMargin]
  const btnStyles = [stls.btn, stls.pointer]

  return (
    <div className={containerClasses.join(' ')}>
      <div className={stls.content}>
        <IconRosObrInsignia />
        <h4 className={stls.title}>
          Проверьте действующие лицензии на сайте РОСОБРНАДЗОРА
        </h4>
        <a
          href='http://isga.obrnadzor.gov.ru/rlic/details/2df11621-2d30-4173-9389-2fecc24a7639/'
          target='_blank'
          rel='noreferrer'
          className={btnStyles.join(' ')}>
          ПРОВЕРИТЬ
        </a>
      </div>
    </div>
  )
}

export default CheckLicenses
