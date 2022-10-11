import Image from 'next/image'
import { useState } from 'react'
import cn from 'classnames'

import {
  TelegramShareButton,
  WhatsappShareButton,
  VKShareButton
} from 'react-share'

import { TypeLibJournalArticle, TypeClassNames } from '@/types/index'

import { routesFront } from '@/config/index'

import { getClassNames } from '@/helpers/index'

import vkIcon from '@/public/assets/images/journal/toShare/vk.svg'
import telegramIcon from '@/public/assets/images/journal/toShare/telegram.svg'
import whatsAppIcon from '@/public/assets/images/journal/toShare/whatsApp.svg'
import shareIcon from '@/public/assets/images/journal/toShare/share.svg'
import arrowIcon from '@/public/assets/images/journal/toShare/arrow.svg'

import stls from '@/styles/components/popups/PopupToShare.module.sass'

type TypePopupToShareProps = {
  journalArticle: TypeLibJournalArticle
} & TypeClassNames

const widthIcon = 25
const heightIcon = 25

const widthIconArrow = 18
const heightIconArrow = 18

const PopupToShare = ({
  journalArticle,
  classNames
}: TypePopupToShareProps) => {
  const [isList, setIsList] = useState(false)
  const urlPage = `${routesFront.root}${routesFront.journal}/${journalArticle?.slug}`

  const handleShowList = () => {
    setIsList(isList => !isList)
  }
  // TODO Нужно что-нибудь другое или оставить alert?
  const handleClipboardLink = () => {
    navigator.clipboard.writeText(urlPage).then(
      () => alert('Ссылка скопирована в буфер обмена.'),
      err => alert('Произошла ошибка... Повторите еще раз.')
    )
  }

  if (!journalArticle?.slug) return null

  return (
    <div className={stls.popupToShare}>
      {isList && (
        <div className={cn(stls.list, getClassNames({ classNames }))}>
          <ul>
            <li className={stls.item}>
              <VKShareButton className={stls.link} url={urlPage}>
                <button className={stls.link}>
                  <div className={stls.imageWrapper}>
                    <Image width={widthIcon} height={heightIcon} src={vkIcon} />
                  </div>
                  <span className={stls.text}>{'Vkontakte'}</span>
                </button>
              </VKShareButton>
            </li>
            <li className={stls.item}>
              <TelegramShareButton className={stls.link} url={urlPage}>
                <button className={stls.link}>
                  <div className={stls.imageWrapper}>
                    <Image
                      width={widthIcon}
                      height={heightIcon}
                      src={telegramIcon}
                    />
                  </div>
                  <span className={stls.text}>{'Telegram'}</span>
                </button>
              </TelegramShareButton>
            </li>
            <li className={stls.item}>
              <WhatsappShareButton className={stls.link} url={urlPage}>
                <button className={stls.link}>
                  <div className={stls.imageWrapper}>
                    <Image
                      width={widthIcon}
                      height={heightIcon}
                      src={whatsAppIcon}
                    />
                  </div>
                  <span className={stls.text}>{'What’s App'}</span>
                </button>
              </WhatsappShareButton>
            </li>
            <li className={stls.item}>
              <button className={stls.link} onClick={handleClipboardLink}>
                <div className={stls.imageWrapper}>
                  <Image
                    width={widthIcon}
                    height={heightIcon}
                    src={shareIcon}
                  />
                </div>
                <span className={stls.text}>{'Скопировать ссылку'}</span>
              </button>
            </li>
          </ul>
        </div>
      )}
      <button className={stls.buttonShare} onClick={handleShowList}>
        <div className={stls.arrowWrapper}>
          <Image
            width={widthIconArrow}
            height={heightIconArrow}
            src={arrowIcon}
          />
        </div>
        <span className={stls.textShare}>{'Поделиться'}</span>
      </button>
    </div>
  )
}

export default PopupToShare
