import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

import { routesExternal } from '@/config/index'

import vk from '@/public/assets/images/journal/toShare/vk.svg'
import telegram from '@/public/assets/images/journal/toShare/telegram.svg'
import whatsApp from '@/public/assets/images/journal/toShare/whatsApp.svg'
import share from '@/public/assets/images/journal/toShare/share.svg'
import arrow from '@/public/assets/images/journal/toShare/arrow.svg'

import stls from '@/styles/components/popups/PopupToShare.module.sass'

const list = [
    { icon: vk, text: 'Vkontakte', href: routesExternal.vk, },
    { icon: telegram, text: 'Telegram', href: routesExternal.telegram, },
    { icon: whatsApp, text: 'What’s App', href: routesExternal.whatsapp, },
]

const widthIcon = 25
const heightIcon = 25

const widthIconArrow = 18
const heightIconArrow = 18

const PopupToShare = () => {
    const [isList, setIsList] = useState(false)

    const handleShowList = () => (
        setIsList(isList => !isList)
    )
    return (
        <div className={stls.popupToShare}>
            {
                isList &&
                <div className={stls.list}>
                    <ul>
                        {
                            list.map(item =>
                                <li className={stls.item}>
                                    <Link href={item.href}>
                                        <a className={stls.link}>
                                            <Image
                                                width={widthIcon}
                                                height={heightIcon}
                                                src={item.icon} />
                                            <span className={stls.text}>{item.text}</span>
                                        </a>
                                    </Link>
                                </li>
                            )
                        }
                        <li>
                            {/* TODO Разобраться, почему у button странные стили */}
                            <Link href={'/'}>
                                <a className={stls.link}>
                                    <Image
                                        width={widthIcon}
                                        height={heightIcon}
                                        src={share} />
                                    <span className={stls.text}>{'Скопировать ссылку'}</span>
                                </a>
                            </Link>
                        </li>
                    </ul>
                </div>
            }
            {/* TODO Разобраться, почему у button странные стили */}
            <button className={stls.buttonShare} onClick={handleShowList}>
                <div className={stls.arrowWrapper}>
                    <Image
                        width={widthIconArrow}
                        height={heightIconArrow}
                        src={arrow} />
                </div>
                <span className={stls.textShare}>{'Поделиться'}</span>
            </button>
        </div>
    )
}

export default PopupToShare