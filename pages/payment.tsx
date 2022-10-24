import stls from '@/styles/pages/Payment.module.sass'
import breadcrumbsStls from '@/styles/components/general/Breadcrumbs.module.sass'
import { GetStaticProps } from 'next'
import { NextSeo } from 'next-seo'
import truncate from 'truncate'
import Image from 'next/image'
import Popup from 'reactjs-popup'
import { contactData, routesFront, companyName } from '@/config/index'
import { handleGetStaticProps } from '@/lib/index'
import { usePageHandleContext } from '@/hooks/index'
import { Breadcrumbs } from '@/components/general'
import { PopupForm } from '@/components/popups'
import { SeoOrganizationJsonLd } from '@/components/seo'

const PagePayment = ({ programs }) => {
  usePageHandleContext({ programs })

  const contactInfo = contactData()

  const seoParams = {
    title: `Оплата обучения в ${companyName}`,
    desc: truncate('Оплата банковской картой через ПАО СБЕРБАНК', 120),
    canonical: `${routesFront.root}${routesFront.payment}`
  }

  return (
    <>
      <NextSeo
        title={seoParams.title}
        description={seoParams.desc}
        canonical={seoParams.canonical}
        openGraph={{
          url: seoParams.canonical,
          title: seoParams.title,
          description: seoParams.desc,
          images: [
            {
              url: `${routesFront.root}${routesFront.assetsImgsIconsManifestIcon512}`,
              width: 512,
              height: 512,
              alt: companyName,
              type: 'image/png'
            }
          ],
          site_name: companyName
        }}
      />
      <SeoOrganizationJsonLd />
      <section className={breadcrumbsStls.jumbotronGeneral}>
        <div className={stls.container}>
          <Breadcrumbs />
        </div>
      </section>
      <div className={stls.container}>
        <div className={stls.content}>
          <h1 className={stls.h1}>Оплата</h1>
          <h2 className={stls.h2}>Банковской картой</h2>

          <p className={stls.p}>
            Для проведения оплаты обучения, с помощью банковской карты, ниже на
            этой странице необходимо нажать кнопку{' '}
            <strong>Оплата банковской картой</strong>. Оплата происходит через
            ПАО СБЕРБАНК с использованием банковских карт следующих платёжных
            систем:
          </p>

          <ul className={stls.list}>
            <li>
              <p className={stls.p}>VISA International</p>
            </li>
            <li>
              <p className={stls.p}>Mastercard Worldwide</p>
            </li>
            <li>
              <p className={stls.p}>JCB</p>
            </li>
            <li>
              <p className={stls.p}>МИР</p>
            </li>
          </ul>

          <Image
            src='/assets/images/payment/payment-methods.png'
            alt='Способы оплаты: VISA International, Mastercard Worldwide, JCB, МИР'
            width={200}
            height={34}
          />

          <p className={`${stls.p} ${stls.mt}`}>
            Для оплаты (ввода реквизитов Вашей карты) Вы будете перенаправлены
            на платёжный шлюз ПАО СБЕРБАНК. Соединение с платёжным шлюзом и
            передача информации осуществляется в защищённом режиме с
            использованием протокола шифрования SSL. В случае если Ваш банк
            поддерживает технологию безопасного проведения интернет-платежей
            Verified By Visa, MasterCard SecureCode, MIR Accept, J-Secure, для
            проведения платежа также может потребоваться ввод специального
            пароля
          </p>

          <p className={stls.p}>
            Настоящий сайт поддерживает 256-битное шифрование.
            Конфиденциальность сообщаемой персональной информации обеспечивается
            ПАО СБЕРБАНК. Введённая информация не будет предоставлена третьим
            лицам за исключением случаев, предусмотренных законодательством РФ.
            Проведение платежей по банковским картам осуществляется в строгом
            соответствии с требованиями платёжных систем МИР, Visa Int.,
            MasterCard Europe Sprl, JCB
          </p>

          <p className={stls.p}>
            В случае возврата, срок возврата составляет 30 дней с момента
            получения образовательных материалов. Возврат переведённых средств
            производится на Ваш банковский счёт в течение 5-30 рабочих дней
            (срок зависит от банка, который выдал Вашу банковскую карту)
          </p>

          <p className={stls.p}>
            В случае возникновения проблем с оплатой, свяжитесь с нами, в
            рабочие часы (09:00-19:00 МСК), по телефону{' '}
            <em className={stls.em}>{contactInfo.ru.tels[0].val}</em>, с помощью
            email <em className={stls.em}>{contactInfo.ru.email.val}</em> или
            оставьте заявку, нажав на кнопку <strong>Помощь</strong> ниже
          </p>

          <p className={stls.p}>
            Пожалуйста, не забудьте указать ФИО и номер договора на странице с
            оплатой
          </p>

          <div className={stls.btns}>
            <a
              className={stls.btn}
              href='https://securepayments.sberbank.ru/sc/moNyCKhHxRNxygzY'
              target='_blank'
              rel='noopener noreferrer'>
              Оплата банковской картой
            </a>

            <Popup
              trigger={<a className={stls.btnAlt}>Помощь</a>}
              modal
              lockScroll
              nested
              closeOnDocumentClick>
              {/* @ts-expect-error  */}
              {close => (
                <PopupForm
                  title={'Помощь с оплатой'}
                  disc={
                    'Оставьте заявку, наш менеджер свяжется с Вами и поможет по вопросам оплаты'
                  }
                  closePopUpForm={close}
                  formName='Заявка с модальной формы "Помощь с оплатой"'
                />
              )}
            </Popup>
          </div>
        </div>
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps = async context =>
  await handleGetStaticProps({ page: routesFront.payment, context })

export default PagePayment
