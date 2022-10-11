import { NextApiRequest, NextApiResponse } from 'next'

import nodemailer from 'nodemailer'
import { dev } from '@/config/index'
import axios from 'axios'

const materials = async (req: NextApiRequest, res: NextApiResponse) => {
    
    // This function checks if it is available (working) whether the link.
    // Which do not work, the function discards.
    const isCheckResourseToUrl = async (dataParse) => {
        const isUrl = async (data) => {
            try {
                const res = await axios.head(data?.url)
                if (res.status === 200) {
                    return (
                        {
                            filename: `${data?.name}` || 'fileName.pdf',
                            path: `${data?.url}`,
                        }
                    )
                }
            } catch (err) {
                return null
            }
        }

        const urls = await Promise.all(dataParse.map(async item => await isUrl(item)))
        const succesUrls = urls.filter(url => url !== null)
        return succesUrls
    }

    const data = req.body
    const dataParse = JSON.parse(data)
    const normilizeAttachments = await isCheckResourseToUrl(dataParse)
    const subject = 'Подборка файлов от Московской Бизнес Академии'

    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: 587,
        secure: false, // true for 465, false for other ports
        logger: true,
        debug: true,
        tls: {
            rejectUnAuthorized: true
        },
        auth: {
            user: process.env.SMTP_LOGIN,
            pass: process.env.SMTP_PASS
        }
    })

    try {
        await transporter.sendMail({
            // TODO Оформление письма сделать
            from: 'lead@moscow.mba',
            to: `${dev
                // TODO Поставь обратно почту!
                // ? 'nova@ipo.msk.ru, novailoveyou3@gmail.com'
                ? 'baurinanton2013@yandex.ru'
                : 'mba.academy@yandex.ru, leads@moscow.mba'
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
