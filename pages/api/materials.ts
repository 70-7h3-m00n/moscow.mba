import { NextApiRequest, NextApiResponse } from 'next'

import nodemailer from 'nodemailer'
import { dev } from '@/config/index'
import axios from 'axios'

const materials = async (req: NextApiRequest, res: NextApiResponse) => {
	// This function checks if it is available (working) whether the link.
	// Which do not work, the function discards.
	const isCheckResourseToUrl = async data => {
		const isUrl = async pdfMaterial => {
			try {
				const res = await axios.head(pdfMaterial?.url)
				if (res.status === 200) {
					return {
						filename: `${pdfMaterial?.name}` || 'fileName.pdf',
						path: `${pdfMaterial?.url}`
					}
				}
			} catch (err) {
				return null
			}
		}

		const urls = await Promise.all(data.map(async item => await isUrl(item)))
		const succesUrls = urls.filter(url => url !== null)
		return succesUrls
	}

	const data = JSON.parse(req.body)
	const normilizeAttachments = await isCheckResourseToUrl(data.pdfMaterials)
	const subject = 'Подборка файлов от Московской Бизнес Академии'

	const transporter = nodemailer.createTransport({
		host: process.env.SMTP_PDF_MATERIALS_HOST,
		port: 587,
		secure: false, // true for 465, false for other ports
		logger: true,
		debug: true,
		tls: {
			rejectUnAuthorized: true
		},
		auth: {
			user: process.env.SMTP_PDF_MATERIALS_LOGIN,
			pass: process.env.SMTP_PDF_MATERIALS_PASSWORD
		}
	})

	try {
		await transporter.sendMail({
			// todo: make sure there is a design for the email
			from: 'info@moscow.mba',
			to: `${
				dev
					? // ? 'nova@ipo.msk.ru, novailoveyou3@gmail.com'
					  'baurinanton2013@yandex.ru'
					: data.values.email
			}`,
			subject, // Subject line
			text: 'Подборка файлов от Московской Бизнес Академии',
			attachments: normilizeAttachments
		})

		res.status(200).json({ status: 200, msg: 'Email is sent' })
	} catch (err) {
		res.status(500).json({ status: 500, err, msg: 'Unexpected server error' })
		console.error(err)
	}
}

export default materials
