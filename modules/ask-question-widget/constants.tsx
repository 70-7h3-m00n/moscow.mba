import { WayToContactType } from './AskQuestionStage/types'

export const waysToContact: WayToContactType[] = [
	{
		way: 'Telegram',
		url: '/assets/images/askQuestion/telegram.svg',
		contactMethods: [
			{
				name: 'Написать',
				icon: '/assets/images/askQuestion/email.svg'
			},
			{
				name: 'Позвонить',
				icon: '/assets/images/askQuestion/telephone.svg'
			}
		],
		validationRules: {
			shouldBeValidated: true,
			validationType: 'phone'
		}
	},
	{
		way: 'Viber',
		url: '/assets/images/askQuestion/viber.svg',
		contactMethods: [
			{
				name: 'Написать',
				icon: '/assets/images/askQuestion/email.svg'
			},
			{
				name: 'Позвонить',
				icon: '/assets/images/askQuestion/telephone.svg'
			}
		],
		validationRules: {
			shouldBeValidated: true,
			validationType: 'phone'
		}
	},
	{
		way: 'WhatsApp',
		url: '/assets/images/askQuestion/whatsapp.svg',
		contactMethods: [
			{
				name: 'Написать',
				icon: '/assets/images/askQuestion/email.svg'
			},
			{
				name: 'Позвонить',
				icon: '/assets/images/askQuestion/telephone.svg'
			}
		],
		validationRules: {
			shouldBeValidated: true,
			validationType: 'phone'
		}
	},
	{
		way: 'Позвонить',
		url: '/assets/images/askQuestion/telephone.svg',
		contactMethods: [
			{
				name: 'Позвонить',
				icon: '/assets/images/askQuestion/telephone.svg'
			}
		],
		validationRules: {
			shouldBeValidated: true,
			validationType: 'phone'
		}
	},
	{
		way: 'Электронная почта',
		url: '/assets/images/askQuestion/email.svg',
		contactMethods: [
			{
				name: 'Написать',
				icon: '/assets/images/askQuestion/email.svg'
			}
		],
		validationRules: {
			shouldBeValidated: true,
			validationType: 'email'
		}
	}
]
