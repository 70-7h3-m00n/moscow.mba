import {
    useEffect,
    useState
} from 'react'
import { createPortal } from "react-dom"
import cn from 'classnames'

import { getClassNames } from '@/helpers/index'

import { useWindowWidth, useScroll } from '@/hooks/index'

import { TypeClassNames } from '@/types/index'

import stls from '@/styles/components/popups/PopupShowCoursesOnTopic.module.sass'

type TypeSectionPopupCoursesOnTopicProps = TypeClassNames

const PopupShowCoursesOnTopic = ({ classNames }: TypeSectionPopupCoursesOnTopicProps) => {
    const [isShow, setIsShow] = useState(true)
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)

        return () => setMounted(false)
    }, [])

    const handleShowPopupCoursesOnTopic = () => {
        setIsShow(isShow => !isShow)
    }

    const windowWidth = useWindowWidth()

    const popupShowCoursesOnTopicElements = (
        <div className={cn([stls.container], getClassNames({ classNames })) || undefined}>
            <div className={stls.courses}>
                <span className={stls.text}>{'Курсы по теме'}</span>
                <button className={stls.show}>{'Посмотреть'}</button>
            </div>
            <div className={stls.buttonClosed} onClick={handleShowPopupCoursesOnTopic}>
                <button className={stls.closed}></button>
            </div>
        </div>
    )

    if (!isShow) {
        return null
    } else {
        return (mounted && windowWidth <= 1020)
            ? createPortal(
                popupShowCoursesOnTopicElements, document.querySelector('#__next'))
            : ''
    }
}

export default PopupShowCoursesOnTopic