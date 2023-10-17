import stls from '@/styles/components/images/journal/ImgJournalArticle.module.sass'
import { TypeClassNames, TypeImg, TypeImgExtended } from '@/types/index'
import { useState, useEffect } from 'react'
import { checkIfResourceExists } from '@/helpers/index'
import { ImgTemplate } from '@/components/images'
import srcDefault from '@/public/assets/images/journal/journalDefault.jpg'

type TypeImgJournalArticleProps = TypeClassNames &
	TypeImg &
	TypeImgExtended & {
		darken?: boolean
	}

const ImgJournalArticle = ({
	classNames,
	src,
	width,
	height,
	alt,
	title,
	darken
}: TypeImgJournalArticleProps) => {
	const [srcExists, setSrcExists] = useState(true)

	useEffect(() => {
		const checkSrc = async () => {
			if (typeof src === 'string') {
				const checkSrc = await checkIfResourceExists(src)
				setSrcExists(checkSrc)
				return
			}
			return
		}

		checkSrc()
	}, [src])

	const params = {
		src: srcExists ? src : srcDefault,
		...(srcExists && width ? { width } : {}),
		...(srcExists && height ? { height } : {}),
		alt: srcExists && alt ? alt : 'Статья',
		...(title ? { title } : {})
	}

	return (
		<>
			<ImgTemplate
				classNames={classNames}
				{...params}
				darken={darken}
				priority
			/>
		</>
	)
}

export default ImgJournalArticle
