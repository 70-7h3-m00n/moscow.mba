import useAt from '@/components/hooks/useAt'

const Price = ({ discount = false, type = null, format = null }) => {
  const at = useAt()

  const price = {
    regular: {
      mini: {
        online: '107 000',
        blended: '149 000'
      },
      professional: {
        online: '289 000',
        blended: '299 000'
      },
      industry: {
        online: '289 000',
        blended: '299 000'
      },
      executive: '1 400 000'
    },
    discounted: {
      mini: {
        online: '59 000'
      },
      professional: {
        online: '159 000'
      },
      industry: {
        online: '159 000'
      },
      executive: '1 400 000'
    }
  }

  const regularOrDiscounted = discount ? 'discounted' : 'regular'

  if ((!format && at.executive) || (!format && type === 'executive'))
    return <>{price[regularOrDiscounted].executive} Р.</>

  return (
    <>
      <i className={discount ? 'new-price' : 'simple-price'}>
        {price[regularOrDiscounted]?.[type]?.[format]} Р.
      </i>
      {discount && (
        <i className='old-price'>{price.regular[type]?.[format]} Р.</i>
      )}
    </>
  )
}

export default Price
