import stls from './Contacts.module.sass'
import {
	IconDzenAlt,
	IconTelegram,
	IconTelegramAlt,
	IconVk,
	IconWhatsappAlt,
	IconYoutube
} from '@/components/icons'

export const socialLinks = [
	{
		link: 'https://vk.com/moscow_mba',
		ariaLabel: 'MBA VK',
		icon: <IconVk classNames={[stls.vk]} fill='#000000' />
	},
	{
		link: 'https://t.me/mbamoscow',
		ariaLabel: 'MBA Telegram',
		icon: <IconYoutube className={stls.youtube} />
	},
	{
		link: 'https://dzen.ru/moscow_business_academy',
		ariaLabel: 'MBA Dzen',
		icon: <IconDzenAlt className={stls.dzen} fill='#000000' />
	},
	{
		link: 'https://t.me/mbamoscow',
		ariaLabel: 'MBA Dzen',
		icon: <IconTelegramAlt className={stls.telegram} fill='#000' />
	}
]

export const contactLinks = [
	{
		link:
			'https://api.whatsapp.com/send?phone=79258088389&text=%D0%94%D0%BE%D0%B1%D1%80%D1%8B%D0%B9%20%D0%B4%D0%B5%D0%BD%D1%8C.%20%D0%AF%20%D0%BF%D0%BE%20%D0%B2%D0%BE%D0%BF%D1%80%D0%BE%D1%81%D1%83',
		ariaLabel: 'MBA Whatsapp',
		icon: <IconWhatsappAlt className={stls.watsapp} fill='#000' />
	},
	{
		link: 'https://t.me/MBAACADEMY_BOT',
		ariaLabel: 'MBA Telegram',
		icon: <IconTelegramAlt className={stls.telegram} fill='#000' />
	}
]
