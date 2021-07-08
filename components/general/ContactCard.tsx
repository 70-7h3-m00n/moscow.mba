import stls from '@/styles/components/general/ContactCard.module.sass'
import { IconLocation } from '@/components/icons'
import { Fragment } from 'react'

const ContactCard = ({
  city,
  address,
  numbers,
  email,
  numNonClickable = false
}) => {
  return (
    <div>
      <address className='vcard'>
        <span className='adr'>
          <h2 className={`locality ${stls.h2}`}>
            <IconLocation large={true} />
            {city}
          </h2>
        </span>
        <ul className={stls.list}>
          <li>
            <span className='adr'>
              <span className='street-address'>
                {address.split(',').map((str, idx) =>
                  idx > 0 ? (
                    <Fragment key={idx}>
                      ,<br />
                      {str}
                    </Fragment>
                  ) : (
                    str
                  )
                )}
              </span>
            </span>
          </li>
          <li>
            <span>
              {numbers.map((number, idx) => (
                <Fragment key={idx}>
                  {idx > 0 && (
                    <>
                      ,<br />
                    </>
                  )}
                  {numNonClickable ? (
                    number.val
                  ) : (
                    <a key={idx} href={number.href} className='tel'>
                      {number.val}
                    </a>
                  )}
                </Fragment>
              ))}
            </span>
          </li>
          <li>
            <span className='email'>{email}</span>
          </li>
        </ul>
      </address>
    </div>
  )
}

export default ContactCard
