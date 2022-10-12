import Image from 'next/image'
import cn from 'classnames'

import { TypeLibJournalArticleCardAuthor } from '@/types/index'

import stls from "@/styles/components/cards/CardAuthor.module.sass"

type TypeCardQuoteProps = {
    quote: TypeLibJournalArticleCardAuthor
    textAlign?: 'start' | 'end'
    fontWeightAuthorName?: 400 | 700
}

const CardAuthor = ({
    quote,
    textAlign,
    fontWeightAuthorName
}: TypeCardQuoteProps) => {
    if (!quote) return null

    return (
        <div className={cn(
            stls.cardAuthor,
            textAlign === 'start'
                ? stls.textAlignStart
                : textAlign === 'end'
                    ? stls.textAlignEnd
                    : '')
        }>
            {
                quote?.portrait?.url &&
                <div className={stls.image}>
                    <Image
                        src={quote?.portrait.url || undefined}
                        width={quote?.portrait.width && 48}
                        height={quote?.portrait.height && 48}
                        alt={quote?.portrait.alt || 'Фото'}
                        className={stls.img} />
                </div>
            }
            <div className={stls.content}>
                {
                    quote?.label
                        ? <p className={stls.label}>{quote?.label}</p>
                        : quote?.authorPosition
                            ? <p className={stls.position}>{quote?.authorPosition}</p>
                            : <p className={stls.position}>{'Автор'}</p>
                }
                <p className={cn(
                    stls.authorName,
                    fontWeightAuthorName === 400
                        ? stls.fontWeightNormal
                        : fontWeightAuthorName === 700
                            ? stls.fontWeightBold
                            : ''
                )}>{quote?.authorName}</p>
            </div>
        </div>
    )
}

export default CardAuthor