import stls from '@/styles/components/general/WhoItIsForItem.module.sass'
import classNames from 'classnames'

const WhoItIsForItem = ({ name, description, moduleIndex }) => {
  const itemIdx =
    moduleIndex <= 9 ? `0${moduleIndex + 1}` : `${moduleIndex + 1}`

  return (
    <div className={stls.container}>
      <p className={stls.itemIdx}>{itemIdx}</p>
      <div className={stls.content}>
        <h3 className={stls.name}>{name}</h3>
        <p className={stls.description}>{description}</p>
      </div>
    </div>
  )
}

export default WhoItIsForItem
