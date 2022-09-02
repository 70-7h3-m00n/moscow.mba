import stls from '@/styles/components/btns/BtnArticlesShowMore.module.sass'

import { ImgTemplate } from '@/components/images'

import circleShowMore from '@/data/svgLoaders/circleShowMore.svg'

type TProps = {
    onClick: () => void
}

const BtnArticlesShowMore: React.FC<TProps> = ({ onClick }) => (
    <button className={stls.button} onClick={onClick}>
        <ImgTemplate
            src={circleShowMore}
            width={20}
            height={20}
            alt={'Заголовок'}
        />
        <span className={stls.text}>ПОКАЗАТЬ ЕЩЕ</span>
    </button>
)

export default BtnArticlesShowMore