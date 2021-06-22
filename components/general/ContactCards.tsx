import stls from '@/styles/modules/ContactCards.module.sass'
import ContactCard from '@/components/general/ContactCard'
import contactData from '@/data/contactData'
import SetString from '@/components/hooks/SetString'

const ContactCards = () => {
  const contactInfo = contactData()
  return (
    <div className={stls.locations}>
      <div className={stls.row}>
        <ContactCard
          city={SetString(contactInfo.ru.address.city)}
          address={SetString(contactInfo.ru.address.street)}
          numbers={contactInfo.ru.tels}
          email={contactInfo.ru.email.val}
        />
        <ContactCard
          city={SetString(contactInfo.kz[0].address.city)}
          address={SetString(contactInfo.kz[0].address.street)}
          numbers={contactInfo.kz[0].tels}
          email={contactInfo.kz[0].email.val}
        />
        <ContactCard
          city={SetString(contactInfo.us.address.city)}
          address={SetString(contactInfo.us.address.street)}
          numbers={contactInfo.us.tels}
          email={contactInfo.us.email.val}
          numNonClickable
        />
        <ContactCard
          city={SetString(contactInfo.uz.address.city)}
          address={SetString(contactInfo.uz.address.street)}
          numbers={contactInfo.uz.tels}
          email={contactInfo.uz.email.val}
        />
        <ContactCard
          city={SetString(contactInfo.kz[1].address.city)}
          address={SetString(contactInfo.kz[1].address.street)}
          numbers={contactInfo.kz[1].tels}
          email={contactInfo.kz[1].email.val}
        />
        <ContactCard
          city={SetString(contactInfo.de.address.city)}
          address={SetString(contactInfo.de.address.street)}
          numbers={contactInfo.de.tels}
          email={contactInfo.de.email.val}
          numNonClickable
        />
      </div>
      <div className={stls.row}></div>

      {/* <div className={stls.col}>
        <ContactCard
          city={SetString(contactInfo.ru.address.city)}
          address={SetString(contactInfo.ru.address.street)}
          numbers={contactInfo.ru.tels}
          email={contactInfo.ru.email.val}
        />
        <ContactCard
          city={SetString(contactInfo.uz.address.city)}
          address={SetString(contactInfo.uz.address.street)}
          numbers={contactInfo.uz.tels}
          email={contactInfo.uz.email.val}
        />
      </div>
      <div className={stls.col}>
        <ContactCard
          city={SetString(contactInfo.kz[0].address.city)}
          address={SetString(contactInfo.kz[0].address.street)}
          numbers={contactInfo.kz[0].tels}
          email={contactInfo.kz[0].email.val}
        />
        <ContactCard
          city={SetString(contactInfo.kz[1].address.city)}
          address={SetString(contactInfo.kz[1].address.street)}
          numbers={contactInfo.kz[1].tels}
          email={contactInfo.kz[1].email.val}
        />
      </div>
      <div className={stls.col}>
        <ContactCard
          city={SetString(contactInfo.us.address.city)}
          address={SetString(contactInfo.us.address.street)}
          numbers={contactInfo.us.tels}
          email={contactInfo.us.email.val}
          numNonClickable
        />
        <ContactCard
          city={SetString(contactInfo.de.address.city)}
          address={SetString(contactInfo.de.address.street)}
          numbers={contactInfo.de.tels}
          email={contactInfo.de.email.val}
          numNonClickable
        />
      </div>
     */}
    </div>
  )
}

export default ContactCards
