import stls from '@/styles/components/layout/Footer.module.sass'
import Link from 'next/link'
import cn from 'classnames'
import { useAt } from '@/hooks/index'
import { contactData, routesFront } from '@/config/index'
import {
  IconLocation,
  IconVk,
  IconTelegramAlt,
  IconWhatsappAlt
} from '@/components/icons'

const Footer = () => {
  const contactInfo = contactData()
  const at = useAt()

  return (
    <footer className={stls.container}>
      <div className={stls.generalContainer}>
        <div className={stls.top}>
          <div className={stls.contactDetails}>
            <div className={stls.telephone}>
              <a href={contactInfo.ru.tels[0].href}>
                {contactInfo.ru.tels[0].val}
              </a>
            </div>
            <div className={stls.email}>
              <a href={contactInfo.ru.email.mailTo}>
                {contactInfo.ru.email.val}
              </a>
            </div>
          </div>
          <div className={stls.links}>
            {!at.promo && (
              <ul className={stls.linksList}>
                <li className={stls.linkItem}>
                  <Link
                    href='/programs/mini/online'
                    {...(at.en ? { locale: 'ru' } : undefined)}>
                    <a className={stls.link}>MBA Mini</a>
                  </Link>
                </li>
                <li className={stls.linkItem}>
                  <Link
                    href='/programs/mba/online'
                    {...(at.en ? { locale: 'ru' } : undefined)}>
                    <a className={stls.link}>MBA</a>
                  </Link>
                </li>
                <li className={stls.linkItem}>
                  <Link
                    href='/programs/executive'
                    {...(at.en ? { locale: 'ru' } : undefined)}>
                    <a className={stls.link}>Executive MBA</a>
                  </Link>
                </li>
                <li className={stls.linkItem}>
                  <Link
                    href='/programs/profession/online'
                    {...(at.en ? { locale: 'ru' } : undefined)}>
                    <a className={stls.link}>Профессии</a>
                  </Link>
                </li>
                <li className={stls.linkItem}>
                  <Link href='/about'>
                    <a className={stls.link}>
                      {at.en ? 'About' : 'Об академии'}
                    </a>
                  </Link>
                </li>
                <li className={stls.linkItem}>
                  <Link
                    href='/teachers'
                    {...(at.en ? { locale: 'ru' } : undefined)}>
                    <a className={stls.link}>
                      {at.en ? 'Experts' : 'Эксперты'}
                    </a>
                  </Link>
                </li>
                <li className={stls.linkItem}>
                  <Link
                    href='/webinars'
                    {...(at.en ? { locale: 'ru' } : undefined)}>
                    <a className={stls.link}>
                      {at.en ? 'Webinars' : 'Вебинары'}
                    </a>
                  </Link>
                </li>
                <li className={stls.linkItem}>
                  <Link href='/contact'>
                    <a className={stls.link}>
                      {at.en ? 'Contact' : 'Контакты'}
                    </a>
                  </Link>
                </li>
                <li className={stls.linkItem}>
                  <Link
                    href='/legal'
                    {...(at.en ? { locale: 'ru' } : undefined)}>
                    <a className={stls.link}>
                      {at.en ? 'Legal' : 'Сведения об организации'}
                    </a>
                  </Link>
                </li>
                {/* <li className={stls.linkItem}>
                  <Link
                    href='/journal'
                    {...(at.en ? { locale: 'ru' } : undefined)}>
                    <a className={stls.link}>{at.en ? 'Journal' : 'Журнал'}</a>
                  </Link>
                </li> */}
                <li className={stls.linkItem}>
                  <Link
                    href='/payment'
                    {...(at.en ? { locale: 'ru' } : undefined)}>
                    <a className={stls.link}>{at.en ? 'Payment' : 'Оплата'}</a>
                  </Link>
                </li>
                <li className={stls.linkItem}>
                  <Link
                    href={routesFront.corporateClients}
                    {...(at.en ? { locale: 'ru' } : undefined)}>
                    <a className={stls.link}>
                      {at.en
                        ? 'Corporate education'
                        : 'Корпоративное обучение для бизнеса'}
                    </a>
                  </Link>
                </li>
              </ul>
            )}
            <div className={stls.contacts}>
              <div className={stls.location}>
                <IconLocation />
                <span>
                  {contactInfo.ru.address.city}, {contactInfo.ru.address.street}
                </span>
              </div>
              <ul className={stls.socialsList}>
                {/* <li className={stls.socialItem}>
                  <a className={stls.socialLink} href='#!' aria-label='MBA VK'>
                    <IconVk />
                  </a>
                </li>
                <li className={stls.socialItem}>
                  <a
                    className={stls.socialLink}
                    href='#!'
                    aria-label='MBA Telegram'>
                    <IconTelegramAlt />
                  </a>
                </li> */}
                <li className={cn(stls.socialItem, stls.socialItemWhatsApp)}>
                  <a
                    className={stls.socialLink}
                    // href='https://api.whatsapp.com/send?phone=89258088389text=%D0%94%D0%BE%D0%B1%D1%80%D1%8B%D0%B9%20%D0%B4%D0%B5%D0%BD%D1%8C!'
                    href='https://api.whatsapp.com/send?phone=79258088389&text=%D0%94%D0%BE%D0%B1%D1%80%D1%8B%D0%B9%20%D0%B4%D0%B5%D0%BD%D1%8C.%20%D0%AF%20%D0%BF%D0%BE%20%D0%B2%D0%BE%D0%BF%D1%80%D0%BE%D1%81%D1%83'
                    aria-label='MBA Whatsapp'
                    target='_blank'
                    rel='noopener noreferrer'>
                    <IconWhatsappAlt />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={stls.bottom}>
          <div className={stls.copyright}>
            &copy; Moscow Business Academy, 2022
          </div>
          <a
            href='/legaldocuments/oferta.pdf'
            target='_blank'
            className={stls.legalLink}>
            {at.en ? 'Offer Contract' : 'Договор Оферты'}
          </a>
          <a
            href='/legaldocuments/NDA.pdf'
            target='_blank'
            className={stls.legalLink}>
            {at.en ? 'Privacy Policy' : 'Политика конфиденциальности'}
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
